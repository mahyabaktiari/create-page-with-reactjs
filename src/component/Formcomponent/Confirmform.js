import React, { Component } from 'react'

export class Confirmform extends Component {
    render() {
        const { value , nextStep , prevStep} = this.props
        return (
            <div className="confirmform">
            <h3>confirm info</h3>
             <div>
                 <label> name : {value.name}</label>
                 <label> family : {value.family}</label>
             </div>
             <div>
                 <label>age : {value.age}</label>
                 <label>address : {value.address}</label>
             </div>
             <div>
                 <label>phone : {value.phone}</label>
                 <label>email : {value.email}</label>
             </div>
             <button className="prev-button" onClick={prevStep}>Prev</button>
             <button className="next-button" onClick={nextStep}>Confirm</button>
                
            </div>
        )
    }
}

export default Confirmform
