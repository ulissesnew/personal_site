import React from 'react'
import './Button.scss'

const Button = ({url, text, color,bgColor, arrow,size}) => {
    return (
       <a style={
           {
               backgroundColor: `var(--${bgColor})`,
               color: `var(--${color})`,
               maxWidth: size ==="large" ? "250px" : "100px"
            }
        } 
            className="button" href={url}>
            <div className="content">
                <p>
                    {text} 
                </p>
                {arrow ? <small>&#8594;</small>:<small></small>}
            </div>
       </a>
    )
}

export default Button
