import React from 'react'
import './Home.scss';
import Section from "../../hoc/Section/Section";
import Button from "../../components/Button/Button";
import photo from "../../assets/my.png"
import Image from "../../components/Image/Image";
import Background from "../../hoc/Background/Background";
import ShadowText from "../../components/ShadowText/ShadowText";

const Home = () => {
    return (
        <Section id="home">
         <Background>
             <ShadowText 
                arr={ ["DESI", "GN", "ER"]}
                top="20%"
                left="3%"
            />
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
                  
                    <Image 
                        url={photo}
                        size="l"
                        alt="my photo"
                        // radius={true}
                    />

                </div>
            </div>
            </Background>
        </Section>
    )
}

export default Home
