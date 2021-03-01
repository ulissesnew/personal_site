import React from 'react'
import Section from "../../hoc/Section/Section";
import "./About.scss";
import BigText from "../../components/BigText/BigText";
import  Button from "../../components/Button/Button"
import photo from "../../assets/my.png"
import Image from "../../components/Image/Image";
import Background from "../../hoc/Background/Background";
import ShadowText from "../../components/ShadowText/ShadowText";

const About = () => {
    return (
        <Section id="about"> 
            <div className="about">
                <div className="left">
                    <div id="shape"></div>
                    <div id="circle"></div>

                    <Image 
                        url={photo}
                        alt="my photo"
                        size="l"
                    />
                    <ShadowText 
                        arr={["AB","OUT","ME"]}
                        top="0px"
                        left="40%"
                    />

                </div>
                <div className="right">
                    <BigText 
                        small="About Me"
                        title="Who am I"
                        content="My name is John, I am 28 years old from USA, I am Hungry and ambitious.
                                Dreamer Graphic Designer and UI/UX Designer. I pratice everyday by reading
                                books and watching tutorials, I love my job very much and. I will
                                do my best to improve my skills, because my dream is to be a great
                                designer. "
                        character="?"
                    />
                    <Button url="#contact"
                        text="Find out more"
                        color= "BrightOrange"
                        bgColor="White"
                        arrow={true}
                        size="large"
                        notPadding={true}
                    />
                </div>

            </div>
        </Section>
    )
}

export default About
