import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
          "https://sarojpradhan.herokuapp.com/api/blog/category",
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
        <di>
          <p>{capitalizeFirstLetter(blogPost.category)}</p>
          <p>{blogPost.title}</p>
          <p>{blogPost.month}</p>
          <p>{blogPost.excerpt}</p>
          <Link to={`/blog/${blogPost.slug}`} className="">
            continue reading
          </Link>
          <img
            width="200"
            height="250"
            src={blogPost.thumbnail}
            alt="thumbnail"
          />
        </di>
      );
    });
    console.log("lenght of list is " + list.length);
    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i}>
          <div>{list[i]}</div>
          <div>{list[i + 1]}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div>
      <h1>{capitalizeFirstLetter(currentCategory)} category</h1>
      <nav>
        <Link className="" exact to="/category/">
          All
        </Link>
        <Link className="" to="/category/programming">
          Programming
        </Link>
        <Link className="" to="/category/web">
          Web
        </Link>
        <Link className="" to="/category/Technology">
          Technology
        </Link>
      </nav>

      {getCategoryBlogs()}
    </div>
  );
}

export default Category;
