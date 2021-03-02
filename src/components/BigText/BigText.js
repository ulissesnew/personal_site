import React from 'react';
import  './BigText.scss';


const BigText = ({small,title,content, character}) => {
    return (
        <div className="bigtext">
            <small className="small">{small}</small>
            <h1 className="title">
                {title}
                <small className="character">
                    {character}
                </small>
            </h1>
            <p className="content">
                {content}
             </p>
       
        </div>
    )
}

export default BigText
