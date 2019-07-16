import React from 'react'

const button = (props) => 
    <button 
        onClick={props.clicked} 
        type="button" 
        className={props.btnClass ? `game-button ${props.btnClass}` : "game-button"}
    >{props.children}</button>

export default button
