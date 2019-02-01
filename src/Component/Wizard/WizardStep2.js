import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Wizard extends Component{
    
    constructor(){
        super();
        this.state ={
            image_URL: '',
          }
        }
    
    handleImageUpdate(val){
        this.setState({
            image_URL: val
        })
    }

  
    
    render(){
        return(
            <div className='Wizard'>
            Wizard
            <h2>Image URL:</h2>
            <input onChange={(e) => this.handleImageUpdate(e.target.value)} value={this.state.image_URL}/>
            <div className='nav_button'>
             <Link to={`/WizardStep1`}><button className='add_property'> Previous Step</button></Link>
            </div>
            <div className='nav_button'>
             <Link to={`/WizardStep3`}><button className='add_property'> Next Step</button></Link>
            </div>
            </div>
            
            
        )
            
        
    }
    
}