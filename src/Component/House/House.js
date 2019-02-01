import React from 'react';


export default function House(props){
    
    let {id, deleteFn} = props;
    // let {id} = props.match.params;
    return(
        <div className='house'>
            {/* <h1>MATCH HERE: {id} </h1> */}
            <h4>Property Name: {props.propertyname}</h4>
            <h4>Property Address: {props.address}</h4>
            <h4>Property City: {props.city}</h4>
            <h4>Property State: {props.state}</h4>
            <h4>Property Zip: {props.zip}</h4>
            <button className='delete_property' onClick={() => deleteFn(id)}> DELETE</button>
        </div>
    )
}