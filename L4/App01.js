import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from './App01/Home'
import About from './App01/About'
import Products from './App01/Products'



class App extends React.Component {
	render() {
		return (
            <Router> 
  
            <Link to="/">Home  </Link>
            <Link to="/about">About  </Link>
            <Link to="/products">Products  </Link>


            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/about" component={About} />
                <Route exact path="/products" component={Products} />

            </Switch>
                        
            </Router>
		)
	}
}
export default App;
