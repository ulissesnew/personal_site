import React from 'react'
import "./Image.scss";
import {sizeImage, borderRadius, joinClassName} from "../../handleCss/handleCss";


 const Image = ({url, alt, size, radius}) => {
    const classCss = joinClassName(sizeImage(size), borderRadius(radius));
    return (
        <img 
            id="image" className={classCss} 
            src={url} alt={alt} 
        />
    )
}

export default Image
