import React, { Component } from 'react';
import {Link} from 'react-router-dom'


export default class Wizard extends Component{
    
    constructor(){
        super();
        this.state ={
            monthlyMortgage: '',
            desiredRent:''
          }
        }
    
    handleMortgageUpdate(val){
        this.setState({
            monthlyMortgage: val
        })
    }

    handleDesiredRent(val){
        this.setState({
            desiredRent: val
        })
    }

  
    
    render(){
        return(
            <div className='Wizard'>
            Wizard
            <h2>Monthly Mortgage Amount:</h2>
            <input onChange={(e) => this.handleMortgageUpdate(e.target.value)} value={this.state.image_URL}/>
            <h2>Desired Monthly Rent:</h2>
            <input onChange={(e) => this.handleDesiredRent(e.target.value)} value={this.state.image_URL}/>
            <button className='Complete'> COMPLETE</button>
            <div className='nav_button'>
             <Link to={`/WizardStep2`}><button className='add_property'> Previous Step</button></Link>
            </div>
            
            </div>
            
            
        )
            
        
    }
    
}