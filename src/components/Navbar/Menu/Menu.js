import React from 'react'
import "./Menu.scss";

const Menu = ({click, isClicked}) => {
    return (
        <div onClick={click} className="menu">
            <span id={isClicked ? "rotate-left" : null}></span>
            <span id={isClicked ? "none": null}></span>
            <span id={isClicked ? "rotate-right" : null}></span>
        </div>
    )
}

export default Menu;

