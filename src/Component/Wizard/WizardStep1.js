import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
// import {updatepropertyName, updateAddress, updateCity, updatePropertyState, updateZipcode}


export default class Wizard extends Component{
    
    constructor(){
        super();
        this.state ={
            propertyname: '',
            address: '',
            city: '',
            state: '',
            zip: ''
          }
        }
    
    handlePropertyNameUpdate(val){
        this.setState({
            propertyname: val
        })
    }

    handleAddressUpdate(val){
        this.setState({
            address: val
        })
    }
    handleCityUpdate(val){
        this.setState({
            city: val
        })
    }
    handleStateUpdate(val){
        this.setState({
            state: val
        })
    }
    handleZipUpdate(val){
        this.setState({
            zip: val
        })
    }
    
    
    render(){
        return(
            <div className='Wizard'>
            Wizard
            <h2>Property Name:</h2>
            <input onChange={(e) => this.handlePropertyNameUpdate(e.target.value)} value={this.state.propertyname}/>
            <h2>Address:</h2>
            <input onChange={(e) => this.handleAddressUpdate(e.target.value)} value={this.state.address}/>
            <h2>City:</h2>
            <input onChange={(e) => this.handleCityUpdate(e.target.value)} value={this.state.city}/>
            <h2>State:</h2>
            <input onChange={(e) => this.handleStateUpdate(e.target.value)} value={this.state.state}/>
            <h2>Zip:</h2>
            <input onChange={(e) => this.handleZipUpdate(e.target.value)} value={this.state.zip}/>
            <div className='property_button'>
             <Link to={`/WizardStep2`}><button className='add_property'> Next Step</button></Link>
            </div>
            </div>
            
            
            
        )
            
        
    }
    
}

// export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updatePropertyState, updateZipcode})(WizardStep1)
//mapStatetoProps - is a function that you would use to provide the store data to your component
//mapDispatchtoProps - something that you use to proivde the action creators as props to your component