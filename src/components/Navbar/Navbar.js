
import React from 'react'
import './Navbar.scss';
import Button from '../Button/Button'
import Link from '../Link/Link';


const Navbar = () => {
    return (
        <div className="nav" id="nav"> 
                <h2>John Doe <small>.</small></h2>
            <div className="navbar">
                <Link url="#home" text="Home"/>
                <Link url="#about" text="About me"/>
                <Link url="#about" text="What I do" />
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

        </div>
    )
}

export default Navbar
