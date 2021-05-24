import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



class Links extends React.Component {
    constructor(){
        super()
        this.state = {nums: [7, 3, 5, 6, 10, 20, 2, 1, 11]}
        this.click = this.click.bind(this)
    }

    click(n){
        console.log('clck', n)
        let updated = this.state.nums
        updated[n] += 1
        this.setState({nums: updated})
    }

    render() {

        let links = []

        for(let i = 0; i < this.state.nums.length; i-=-1)
        links.push(<Link onClick={()=>this.click(i)} key={i} to={'/'+i}>{this.state.nums[i]}  </Link>)

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
            <Switch>
                <Route path="/:num" component={Links} /> 
                <Route path='/' component={Links}/>

            </Switch>
                        
            </Router>
		)
	}
}

export default App;
