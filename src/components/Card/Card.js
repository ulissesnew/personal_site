import React from 'react'
import "./Card.scss";
import Link from "../Link/Link";

 const Card = ({imgUrl, category, title,link }) => {
    return (
        <div className="card"
            style={
                {backgroundImage:`url(${imgUrl})`

                }
            }>
            <div className="content">
                <div id="shadow">
                    <span>{category}</span>
                    <h5>{title}</h5>
                    <Link 
                        url={link} 
                        text="More -->" 
                        color="White"
                    />
                </div>
            </div>
        </div>
    )
}


export default Card