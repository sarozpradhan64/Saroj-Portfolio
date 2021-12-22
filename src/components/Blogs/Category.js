import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./blog.css";

function Category(props) {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setcurrentCategory] = useState("");

  useEffect(() => {
    const category = props.match.params.id;
    
    setcurrentCategory(category);

    const config = { "Content-Type": "application/json" };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          "https://blazesrz.pythonanywhere.com/api/blog/category",
          { category }, config
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);


  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  };

  /* loopfunction for all the blogs  */
  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="blog"> 
          
          <img
           
            src={`https://blazesrz.pythonanywhere.com/${blogPost.thumbnail}`}  /* because when doing console.log(blogs), it only recieved /django-summernote */
          
          /><p className="category">{capitalizeFirstLetter(blogPost.category)}</p>
          <h3 className="blog_title">{blogPost.title}</h3>
          <Link to={`/blog/${blogPost.slug}`} className="blog_readmore">
            Read more
          </Link>
       
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 1) {
      result.push(
        <div key={i} className="blogcard">
        {list[i]}
          
        </div>
      );
    }

    return result;
  };

  return (

    <div className="blog_container">
{/*       <h1 className="blog_intro">{capitalizeFirstLetter(currentCategory)} category</h1> */}
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

<div className="blog_list">
      {getCategoryBlogs()}
      </div>
    </div>
  );
}

export default Category;
