import React, { Component } from 'react'

export class Home extends Component {
    clickLogin = ()=>{
        this.props.history.push('/login')
    }

    clickSignUp = () => {
        this.props.history.push('/singup')
    }
    render() {
        return (
            <div className="home">
                <p className="titr">Welcome my page</p>
                <button onClick={this.clickLogin}>Sign in</button>
                <button onClick={this.clickSignUp}>Sign up</button>      
            </div>
        )
    }
}

export default Home
