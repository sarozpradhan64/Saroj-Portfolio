import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Projects";
import Blog from "./components/Blogs/Blog";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/footer";
import Form from "./components/Contact/Form";
import NotFoundpage from "./components/NotFoundpage";
import Success from "./components/Contact/Success";
import Category from './components/Blogs/Category';
import Blogdetail from "./components/Blogs/Blogdetail";
/* blog routes */ 
function App() {
  return (
    <>
      <Router>
        
        <Navbar />{" "}
        {/* navbar and footer outside the switch tags means that they will be present in all the pages */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/projects/" component={Project} />

          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/contact/" component={Form} />
          <Route exact path="/success/" component={Success} />
          <Route exact path="/blogs" component={Blog} />
          <Route exact path = "/category/:id" component={Category} />
          <Route exact path = '/blog/:id' component={Blogdetail}/>
          <Route path="*" component={NotFoundpage} />


        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
