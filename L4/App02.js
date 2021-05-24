import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Child extends React.Component {
    render() {
        return (
            <h1>
                Child: {this.props.match.params.id}
            </h1>
        );
    }
}


class App extends React.Component {
	render() {
		return (
            <Router> 
  
            <Link to="/1">1  </Link>
            <Link to="/2">2  </Link>
            <Link to="/3">3  </Link>


            <Switch>
                <Route path="/:id" component={Child} /> 

            </Switch>
                        
            </Router>
		)
	}
}

export default App;
