import React from 'react'
import "./ShadowText.scss";

const ShadowText = ({arr, left, right, top, bottom}) => {
    return (
        <div style={{left:left, right:right, top:top, bottom:bottom}} 
            id="text-shadow"
        >
            {arr.length ? arr.map((word,id)=> {
                return (
                    <h1 key={id}>{word}</h1>
                )
            }): null}

        </div>
    )
}

export default ShadowText
