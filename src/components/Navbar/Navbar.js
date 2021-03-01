
import React from 'react'
import './Navbar.scss';
import Button from '../Button/Button'
import Link from '../Link/Link';
import Menu from './Menu/Menu';

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            isOpen: true
        }
    }
    toggleMenu = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    }
    render(){
        const {isOpen} = this.state;

        return (
            <div className="nav" id="nav"> 
                <h2>John Doe <small>.</small></h2>
                <nav style={{display: isOpen ? true : "none"}} className="navbar">
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
                </nav>
                <Menu 
                    click={() => this.toggleMenu()}
                    isClicked={isOpen}
                />

            </div>
        )
    }
}

export default Navbar
