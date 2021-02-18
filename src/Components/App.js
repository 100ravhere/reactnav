import {BrowserRouter as Router, Route} from "react-router-dom";


import React from 'react';
import Header from "./Header";
import I from "./I";
import Resume from "./Resume";
import Blog from "./Blog";
import ConnectWithMe from "./ConnectWithMe";




function App() {
  return (
    <Router>
      <Header/>
     
      <Route path="/" exact component={I}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/connectwithme" component={ConnectWithMe}/>
  
    </Router>
 
    );
}

export default App;
