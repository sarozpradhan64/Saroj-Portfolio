import React,{useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Projects";
import Blog from "./components/Blogs/Blog";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/footer";
import NotFoundpage from "./components/NotFoundpage";
import Form from "./components/Contact/Form";
import Success from "./components/Contact/Success";
import Category from "./components/Blogs/Category";
import Blogdetail from "./components/Blogs/Blogdetail";
import { PropagateLoader } from "react-spinners";
import './App.css'
/* blog routes */
function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []); 

  return (
    <>
    {/* if ternary operator , if loading is true run <cliploader>
else run <router>*/}
    {loading ? (
      <div className="loader">
        <PropagateLoader size={15} color={"#24248f"} loading={loading} />
      </div>
    ) : (
      <Router>
        <Navbar />
         <Scrolltotop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/projects/" component={Project} />
          <Route exact path="/gallery/" component={Gallery} />
          <Route exact path="/contact/" component={Form} />
          <Route exact path="/success/" component={Success} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/blog/:id" component={Blogdetail} />
          <Route path="*" component={NotFoundpage} />
        </Switch>
        <Footer />
      </Router>
        )}
        </>
      );
  
}

export default App;
