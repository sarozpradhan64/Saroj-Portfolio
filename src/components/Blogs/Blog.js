import React, { useState, useEffect } from "react";
import { Link , NavLink} from "react-router-dom";

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
        setBlogs(res.data);
        console.log(blogs)
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1); /* this means all other string in word except 1st letter */
  };

  const Truncateforexcerpt = (word) =>
  {
    if (word) return word.slice(0, 150) + "..."
  }


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
            <i className="">{capitalizeFirstLetter(blogPost.category)}</i>
            <h3 style={{ marginTop: "10px" }}>{blogPost.title}</h3>
            <div>
              {blogPost.month} {blogPost.day}
            </div>
            <p style={{ marginTop: "20px" }}>{blogPost.excerpt}</p>
            <NavLink to={`/blog/${blogPost.slug}`} className="readmore">
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
console.log(blogs)
    return result;
  };
  console.log("this is blog hae");
  console.log(blogs);
  return (
    <div className="blog_container">
      <h1 className="blog_intro">Blogs</h1>
      <nav className="blog_nav">
        <NavLink activeClassName="blog_active" className="blog_link" exact to="/blog/">
          All
        </NavLink>
        <NavLink activeClassName="blog_active"  className="blog_link" to="/category/programming">
          Programming
        </NavLink>
        <NavLink  activeClassName="blog_active" className="blog_link" to="/category/web">
          Web
        </NavLink>
        <NavLink activeClassName="blog_active" className="blog_link" to="/category/techs">
          Techs
        </NavLink>
      </nav>

      <h2 className="featured_heading">Featured Blog</h2>
      <div className="featured">
        
        <img
          style={{ marginTop: "20px" }}
          src={featuredBlog.thumbnail}
         
        />
        <i className="">{capitalizeFirstLetter(featuredBlog.category)}</i>
        <div className="featured_title">
          <h1 style={{ marginBottom: "20px", marginTop: "20px" }}>
            {featuredBlog.title}
          </h1>
          <p>{featuredBlog.excerpt</p>
          <Link to={`/blog/${featuredBlog.slug}`} className="readmore">
            Read more
          </Link>
        </div>
      </div>

      <div className="blog_heading">
        <h2>All blogs</h2>
      </div>
      <div className="blog_list">{getBlogs()}</div>
    </div>
  );
}

export default Blog;
