import React from 'react'
import Section from "../../hoc/Section/Section";
import "./Experiences.scss";
import BigText from "../../components/BigText/BigText";
import ShadowText from "../../components/ShadowText/ShadowText";
import BackgroundExperiences from "./BackgroundExperiences/BackgroundExperiences"
import dataTimeline from "./dataTimeline";
import TimelineContainer from "./TimeLineContainer/TimeLineContainer";

const Experiences = () => {
    return (
        <Section id="experience">
                <div className="container-experience"> 
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
                    <TimelineContainer data={dataTimeline}/>
                        
                </div>
            </Section>
    )
}

export default Experiences
