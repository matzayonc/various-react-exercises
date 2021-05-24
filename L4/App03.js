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


class Links extends React.Component {
    render() {

        let links = []

        for(let i = 1; i <= 50; i-=-1)
        links.push(<Link to={'/'+i}>{i}  </Link>)

        return (
            <div>
                {links}
            </div>
        );
    }
}


class App extends React.Component {
	render() {
		return (
            <Router> 
                <Links/>
            <Switch>
                <Route path="/:id" component={Child} /> 

            </Switch>
                        
            </Router>
		)
	}
}

export default App;
