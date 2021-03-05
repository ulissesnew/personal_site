import React from 'react'
import Section from "../../hoc/Section/Section";
import "./Experiences.scss";
import BigText from "../../components/BigText/BigText";
import ShadowText from "../../components/ShadowText/ShadowText";
import BackgroundExperiences from "./BackgroundExperiences/BackgroundExperiences"

const Experiences = () => {
    return (
        <Section id="experience">
                <div className="container"> 
            <BackgroundExperiences/>

                <ShadowText 
                    arr={["EXP", "ERIE","NCE"]}
                    left="24%"
                />
                <div className="left">
                        <BigText 
                            small="My Experiences"
                            title="Experiences"
                            content="I`ve had the pleasure of working with some great organizations."
                            character="."
                        />
                </div>
                <div id="line" ></div>
                    <div className="timeline">
                        <div className="item">
                            <div className="shape_time_left">
                                <div id="circle" ></div>
                            </div>
                            
                            <div className="text-center">
                                <small>Sep.2010- Now</small>
                                <h2>intelligent</h2>
                                <span>Senior UX Designer </span>
                            </div>
                        </div>  
                        <div className="null"></div>
                        <div className="null"></div>

                        <div className="item">               
                            <div id="shape-right" class="shape_time_right">
                                <div id="circle" ></div>
                            </div>
                            <div className="text-center">
                                <small>Aug.2009-Aug.2010</small>
                                <h2>Promise</h2>
                                <span>Jr. UX Designer </span>
                            </div>
                            
                        </div>
                        <div className="item">
                            <div class="shape_time_left">
                                <div id="circle" ></div>

                            </div>
                            <div className="text-center">
                                <small>Apr.2006-Dec 2008</small>
                                <h2>Tech Expo</h2>
                                <span>Jr. Front-End Developer </span>
                            </div>
                        </div>
                        
                        <div className="null"></div>

                    </div>
                </div>
        </Section>
    )
}

export default Experiences
