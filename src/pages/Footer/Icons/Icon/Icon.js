import React from 'react'
import "./Icon.scss";


const Icon = ({imgUrl, url}) => {
    return (
        <a href={url}  >
            <div className="icon" 
                style={{backgroundImage:`url(${imgUrl})`}}
            >
            </div>
        </a>
         
    )
}

export default Icon
