import React from 'react'
import "./Image.scss";
import {sizeImage, borderRadius, joinClassName} from "../../handleCss/handleCss";


 const Image = ({url, alt, size, radius}) => {
    const classCss = joinClassName(sizeImage(size), borderRadius(radius));
    return (
        <img width="400px" height="400px"
            id="image" className={classCss} 
             alt={alt} 
             src={url}
        />
    )
}

export default Image
