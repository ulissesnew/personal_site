import React from 'react'
import './Button.scss'

const Button = ({url, text, color,bgColor, arrow,size, notPadding}) => {
    return (
       <a style={
           {
               backgroundColor: `var(--${bgColor})`,
               color: `var(--${color})`,
               maxWidth: size ==="large" ? "250px" : "100px",
               padding: notPadding ? "0px" : "5px 10px"
            }
        } 
          
            className="button" href={url}>
            <div className="content">
                <p>
                    {text} 
                </p>
                {arrow === true ? <small>&#8594;</small>:<small></small>}
            </div>
       </a>
    )
}

export default Button
