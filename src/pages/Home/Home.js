import React from 'react'
import './Home.scss';
import Section from "../../hoc/Section/Section";
import Button from "../../components/Button/Button";
import photo from "../../assets/my.png"
import Image from "../../components/Image/Image";
import BackgroundHome from "./Background/BackgroundHome";
import ShadowText from "../../components/ShadowText/ShadowText";

const Home = () => {
    return (
        <Section id="home">
         {/* <BackgroundHome> */}
             <ShadowText 
                arr={ ["DESI", "GN", "ER"]}
                top="20%"
                left="3%"
            />
         <BackgroundHome/>

            <div className="home">

                <div className="left">
                    <div className="hello">
                        <h1>Hello </h1> <h1 id="character">.</h1>
                    </div>
                    <div className="job">
                        <h1>I am </h1> 
                        <p >I am a Graphic Designer and UI Designer.</p>
                    </div>
                   <h1>John</h1>
                   <div className="buttons">
                        <Button url="#contact"
                            text="Say Hello"
                            color= "White"
                            bgColor="BrightOrange"
                            size="small"
                        />
                        <p id="space"></p>
                        <Button url="#about"
                            text="About me"
                            color= "BrightOrange"
                            bgColor="White"
                            arrow={true}
                            size="small"
                            notPadding={true}
                        />
                   </div>
                </div>
                <div className="right">
                    <span id="right-shape">
                        <span id="orange"></span>
                        
                    </span>

                    <Image 
                        url={photo}
                        size="l"
                        alt="my photo"
                        // radius={true}
                    />

                </div>
            </div>
            {/* </BackgroundHome> */}
        </Section>
    )
}

export default Home
