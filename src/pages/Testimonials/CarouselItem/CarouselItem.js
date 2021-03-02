import React from 'react'
import "./CarouselItem.scss";

const CarouselItem = ({content, imgUrl, name, job}) => {
    return (
        <div>
            <div id="item">
                    <p id="content"> 
                        {content}
                    </p>
                    <div id="person">
                        <img src={imgUrl} alt="name"/>
                        <div id="description">
                            <h5>{name}</h5>
                            <small>{job} </small>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CarouselItem
