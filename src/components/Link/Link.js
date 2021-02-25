import React from 'react'
import './Link.scss';

const Link = ({url, text, color}) => {
    return (
        <a className="link" href={url} >
            <p style={{color: `var(--${color})`}}>{text}</p>
        </a>
    )
}

export default Link
