import React from 'react'
import "./ModalNavbar.scss";
import Link from "../../Link/Link";
import  Button from "../../Button/Button"

const ModalNavbar = ({isOpen}) => {
    return (
        <div id="modal-navbar" style={{display: !isOpen ? "none":true}}>
            <Link url="#home" text="Home"/>
            <Link url="#about" text="About me"/>
            <Link url="#experience" text="What I do" />
            <Link url="#portfolio" text="Portfolio"/>
            <Link url="#blog" text="Blog" />

            <Button url="#contact"
                text="Contact"
                color= "White"
                bgColor="BrightOrange"
                arrow={true}
                size="small"
            />
        </div>
    )
}

export default ModalNavbar
