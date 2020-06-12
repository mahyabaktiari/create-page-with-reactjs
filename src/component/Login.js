import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <p>Username : </p>
                <input/>
                <p>Password : </p>
                <input/>
                <p>forget password?</p>
                <button>Login</button>
            </div>
        )
    }
}

export default Login
