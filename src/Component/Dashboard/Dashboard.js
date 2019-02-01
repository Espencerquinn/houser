import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import House from './../House/House'

export default class Dashboard extends Component{
    
    constructor(){
        super();

        this.state ={
            propertyList: []
        }
        }
    
    componentDidMount(){
        axios.get('/api/houses')
        .then((res) => {
            this.setState({
            propertyList: res.data
            })
        })
        }

    deleteProperty(id) {
        axios.delete(`/api/houses/${id}`)
        .then( (res) => {
          console.log('deleted')
        })
      }
    
    render(){
        return(
            <div className='Dashboard'>
            Dashboard
            {
            this.state.propertyList.map(house => (
            <House
            key={house.id}
            id={house.id}
            name={house.propertyname}
            adddress={house.address}
            city={house.city}
            state={house.state}
            zip={house.zip}
            img={house.img}
            mortgage={house.mortgage}
            rent={house.rent}
            deleteFn={this.deleteProperty}
            />
            ))
            }
             <div className='property_button'>
             <Link to="/wizard/step#1"><button className='add_property'> Add Property</button></Link>
            </div>
            </div>
            
        )
            
        
    }
    
}