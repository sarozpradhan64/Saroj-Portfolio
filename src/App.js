import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Home from './components/Home/Home'
import Project from './components/Projects/Projects'
import Blog from './components/Blogs/Blog'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/footer'

function App() {
  return (
    <>
    
     
    <Router>
  
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Projects' component={Project}/>
        <Route path="/Blogs" component={Blog}/>
        <Route path="/Gallery" component={Gallery}/>
        
        
        
      </Switch>
      <Footer/>
      
      
    </Router>
    
    
    
    </>
  );
}

export default App;
