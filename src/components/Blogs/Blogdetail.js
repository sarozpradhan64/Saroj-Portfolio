import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./blog.css";

function Blogdetail(props) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://blazesrz.pythonanywhere.com/api/blog/${slug}`
        );
     

        /*  res.data.content =  res.data.content.replace("img src=\"/django-summernote", "img src=\"http:127.0.0.1:8000/django-summernote"); */

        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [
    props.match.params.id,
  ]); /* this id is received from the  <Route exact path = '/blog/:id' component={Blogdetail}/> */

  const createBlog = () => {
    return { __html: blog.content };
  };



  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  };


  return (
    <div className="blog_detail">
     
     {/* ---------react_helmet-------------- */}
<Helmet>
 <meta property="og:image" content={blog.thumbnail}/> 
</Helmet>

      <div className="blog_body">
       {/*  <img width="600px" src={blog.thumbnail} /> */}
        <h1>{blog.title}</h1>
        <h4>{blog.month}{blog.day}</h4>
        
        <div className="content" dangerouslySetInnerHTML={createBlog()}></div>
        {/* <div className="comments">comments
        <form className="commentform">
          <textarea className="commentsection" >

          </textarea>
          <button className="readmore" type="submit" onSubmit={(e)=> e.preventDefault}>Send</button>
        </form>
        </div> */}
      </div>
      <div className="latest_posts">related posts</div>
    </div>
  );
}

export default Blogdetail;

/* 
Yes there is a difference!

The immediate effect of using innerHTML versus dangerouslySetInnerHTML is identical -- the DOM node will update with the injected HTML.

However, behind the scenes when you use dangerouslySetInnerHTML it lets React know that the HTML inside of that component is not something it cares about.

Because React uses a virtual DOM, when it goes to compare the diff against the actual DOM, it can straight up bypass checking the children of that node because it knows the HTML is coming from another source. So there's performance gains.

More importantly, if you simply use innerHTML, React has no way to know the DOM node has been modified. The next time the render function is called, React will overwrite the content that was manually injected with what it thinks the correct state of that DOM node should be.

Your solution to use componentDidUpdate to always ensure the content is in sync I believe would work but there might be a flash during each render. */
