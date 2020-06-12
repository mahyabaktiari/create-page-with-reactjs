import React, { Component } from 'react'
import Form from './Formcomponent/Form'
import Confirmform from './Formcomponent/Confirmform'
import Success from './Formcomponent/success'

export class Register extends Component {
    constructor(){
        super()
        this.state = {
            step : 1,
            name:"",
            family:"",
            age : "",
            address : "",
            email : "",
            phone : ""
        }
    }

    handelChange = input => e =>{
        this.setState({[input] : e.target.value})
    }

    nextStep = ()=>{
        this.setState({step : this.state.step + 1 })
    }

    prevStep = ()=>{
        this.setState({step : this.state.step - 1 })
    }
    render() {
        const { step } = this.state
        const {name , family , age , address , email , phone} = this.state
        const value = {name , family , age , address , email , phone}
        switch(step){
            case 1 : 
                return(<Form value={value} changeValue={this.handelChange} nextStep = {this.nextStep} />)
            case 2 :
                return(<Confirmform value={value}  nextStep = {this.nextStep} prevStep={this.prevStep} />)
            case 3 :
                return(<Success />)
            default :
                return(<Form value={value} changeValue={this.handelChange} nextStep = {this.nextStep} />)
            
        }
    }
}

export default Register
