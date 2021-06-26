import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          
        );
        setBlogs(res.data);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  };

  /*   loopfunction for all the blogs */
  const getBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="blog">
          <div className="bog_title">
            <strong className="">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3>{blogPost.title}</h3>
            <div>
              {blogPost.month} {blogPost.day}
            </div>
            <p>{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });
    console.log("lenght of list is " + list.length);
    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            borderStyle: "solid",
            margin:'40px'
          }}
        >
          <div >{list[i]}</div>
          <div >{list[i + 1]}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="blog_container">
      <h1 className="blog_intro">maintainance going on</h1>
      <nav className="blog_nav">
        <Link className="blog_link" exact to="/category/">
          All
        </Link>
        <Link className="blog_link" to="/category/programming">
          Programming
        </Link>
        <Link className="blog_link" to="/category/web">
          Web
        </Link>
        <Link className="blog_link" to="/category/Technology">
          Technology
        </Link>
      </nav>

      <div className="featured">
        <div className="blog_title">
          <h1>{featuredBlog.title}</h1>
          <p>{featuredBlog.excerpt}</p>
          <Link to={`/blog/${featuredBlog.slug}`} className="">
            continue reading
          </Link>
        </div>
        <img
          style={{}}
          src={featuredBlog.thumbnail}
          width="200px"
          height="300px"
        />
      </div>
      {getBlogs()}
    </div>
  );
}

export default Blog;
