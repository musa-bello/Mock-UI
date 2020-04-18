import React from 'react'

function CardComponent(props){
    return(
        <div className ="card-box shadow p-3" style ={props.style}>
            <h5 className ="card-title">{props.name}</h5>
            <p className ="card-text">{props.text}</p>
            <div className='card-icon'>
                <img src={props.src} />
            </div>
        </div>
    )
}

export default CardComponent