import React from 'react'
import Section from "../../hoc/Section/Section";
import "./Testimonials.scss";
import BigText from "../../components/BigText/BigText";
import  Button from "../../components/Button/Button"
import ShadowText from "../../components/ShadowText/ShadowText";
import CarouselList from "./CarouselList/CarouselList";
import data from "../Testimonials/dataTestimonials.js";

class Testimonials extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            activeIndex: 0,
            length: 0,
            landing: []
        }
    }
    componentDidMount(){
        this.setState({landing:data})
    }
    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.landing.length;
        if(index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });

    }
    goToNextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.landing.length;
        if(index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });

    }
    render(){
        return (
            <Section id="testimonials">
                <div className="testimonials">
                    <div id="shape-yellow"></div>
                    <ShadowText 
                        arr={["TESTIM", "ONIALS"]}
                        right="0"
                    />
                    <div className="carousel">
                        <BigText 
                            small="What My Clients Says"
                            title="Testimonials"
                        
                            character="."
                            />
                            <div id="controls">
                                <button id="arrow-left" onClick={() => this.goToPrevSlide()}><span>&#8592;</span></button>
                                <button id="arrow-right" onClick={() => this.goToNextSlide()}><span>&#8594;</span></button>
                            </div>
                            

                    </div>
                    <CarouselList 
                        activeIndex={this.state.activeIndex} 
                        landing={data}
                        />
                    
                </div>
            </Section>
        )
    };
}

export default Testimonials
