import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";

import axios from "axios";
import "./blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState([]);

  /*   useeffect for featured blog */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://blazesrz.pythonanywhere.com/api/blog/featured"
        );
        console.log(res.data[0]);
        setFeaturedBlog(res.data[0]);
      } catch (err) {}
    };
    fetchData();
  }, []);

  /*   useeffect for blogs */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://blazesrz.pythonanywhere.com/api/blog/"
        );

        setBlogs(res.data); /* data is default object of json  */
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word)
      return (
        word.charAt(0).toUpperCase() + word.slice(1)
      ); /* this means all other string in word except 1st letter */
  };

  const Truncate = (word) => {
    if (word) return word.slice(0, 10);
  };

  /*   loopfunction for all the blogs */
  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        /* blogcard */
        <div className="blog">
          <div className="">
            <img src={blogPost.thumbnail} alt="thumbnail" />
          </div>
          <div className="">
            <i className="category">{capitalizeFirstLetter(blogPost.category)}</i>
            <h3 className="blog_title">{blogPost.title}</h3>
            <NavLink to={`/blog/${blogPost.slug}`} className="blog_readmore">
              Read more
            </NavLink>
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 1) {
      result.push(
        <div key={i} className="blogcard">
          {list[i]}
        </div>
        /*   <div className="blog_list"
          key={i}
          style={{
            
          }}
        >
          <div>{list[i]}</div>
          <div>{list[i + 1]}</div>
        </div> */
      );
    }

    return result;
  };

  return (
    <div className="blog_container">
      <Helmet>
        <title>Saroj | Blogs</title>
      </Helmet>
      <nav className="blog_nav">
        <NavLink
          activeClassName="blog_active"
          className="blog_link"
          exact
          to="/blog/"
        >
          All
        </NavLink>
        <NavLink
          activeClassName="blog_active"
          className="blog_link"
          to="/category/programming"
        >
          Programming
        </NavLink>
        <NavLink
          activeClassName="blog_active"
          className="blog_link"
          to="/category/web"
        >
          Web
        </NavLink>
        <NavLink
          activeClassName="blog_active"
          className="blog_link"
          to="/category/techs"
        >
          Techs
        </NavLink>
      </nav>

      <div className="featured">
        <div className="featured_heading">Featured</div>
        <img src={featuredBlog.thumbnail} />
        <i className="category">
          {capitalizeFirstLetter(featuredBlog.category)}
        </i>
        <div className="featured_title">
          <Link to={`/blog/${featuredBlog.slug}`} className="featured_link">
            
            <h2>{featuredBlog.title}</h2>
          </Link>
          <Link to={`/blog/${featuredBlog.slug}`} className="readmore">
            Read more
          </Link>
        </div>
      </div>

      <div className="blog_heading">
        <h1>All blogs</h1>
      </div>
      <div className="blog_list">{getBlogs()}</div>
    </div>
  );
}

export default Blog;
