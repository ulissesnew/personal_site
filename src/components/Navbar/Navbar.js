
import React from 'react'
import './Navbar.scss';
import Button from '../Button/Button'
import Link from '../Link/Link';
import Menu from './Menu/Menu';
import ModalNavbar from "./ModalNavbar/ModalNavbar";

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            isOpen: false,
            width: 0
        }
        window.addEventListener("resize", this.update)
    }
    componentDidMount(){
        this.update()
        // console.log(window.innerWidth);
    }
   update = () => {
        this.setState(
            {width:window.innerWidth}
        )
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
                
                <nav  className="navbar">
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
                {this.state.width < 700 
                ? <ModalNavbar isOpen={isOpen}/>
                : null}
                <span id="width-screen">width: {this.state.width}</span>

            </div>
        )
    }
}

export default Navbar
