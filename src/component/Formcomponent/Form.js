import React, { Component } from 'react'

export class Form extends Component {
    render() {
        const  {value , changeValue , nextStep} = this.props
        return (
            <div className="form">
            <h3>Sign Up</h3>
            <div>
                <label>name : <input type="text" value={value.name} onChange={changeValue("name")}/></label>
                <label>family : <input type="text" value={value.family} onChange={changeValue("family")}/></label>
            </div>  
            <br/>
            <div>
                <label>age : <input type="text" value={value.age} onChange={changeValue("age")}/></label>
                <label>address : <input type="text" value={value.address} onChange={changeValue("address")}/></label>
            </div>   
            <br />
            <div>
                <label>phone : <input type="text" value={value.phone} onChange={changeValue("phone")}/></label>
                <label>email : <input type="text" value={value.email} onChange={changeValue("email")}/></label>
            </div>
            <br />
                <button className="next-button" onClick={nextStep}>Next</button>  
            </div>
        )
    }
}

export default Form
