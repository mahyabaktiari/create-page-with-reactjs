import React, { Component } from 'react'
import {Route , NavLink , BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'

export class Page extends Component {
    render() {
        return( 
                <Router>
                    <div className="header">
                        <p style={{fontWeight:"bold"}}>My Aplication</p>
                        <div className="links">
                            <p><NavLink activeClassName="active" to="/">Home</NavLink></p>
                            <p><NavLink activeClassName="active" to="/singup">Sign Up</NavLink></p>
                            <p><NavLink activeClassName="active" to="/login">Sign in</NavLink></p>
                        </div>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/singup" component={Register} />
                    <Route path="/login" component={Login} />
                </Router>)
    }
}

export default Page
