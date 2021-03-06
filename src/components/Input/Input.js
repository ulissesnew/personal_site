import React from 'react'
import "./Input.scss";


const Input = ({change,type, placeholder}) => {
    return (
        <div className="input-container">
            <input id="input-search" 
                onChange={change}
                type={type} 
                placeholder={placeholder}
            />
            <span id="icon"></span>
       </div>
    )
}

export default Input
