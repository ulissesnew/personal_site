import React from 'react'
import "./Portfolio.scss";
import Section from "../../hoc/Section/Section";
import BigText from "../../components/BigText/BigText";
import ShadowText from "../../components/ShadowText/ShadowText";
import CardList from "../../components/CardList/CardList";
import data from "./dataPortfolio";

const Portfolio = () => {
    return (
        <Section id="portfolio">
            <div className="portfolio">
                <div className="top">
                    <ShadowText
                        arr={["POR","TFO","LIO"]}
                        right="0px"
                    />
                    <BigText 
                        small="My Feature Works"
                        title="Portfolio"
                        content="Look at all of my latest works."
                        character="."
                        />
                    <div id="buttons-search">
                        <p>All category</p>
                        <p>Web design</p>
                        <p>3D</p>
                        <p>Branding</p>
                        <p>Mobile</p>
                        <p>Typography</p>
                    </div>
                </div>
                <CardList items={data}/>
                <button>Discover all Works</button>
            </div>
        </Section>
    )
}

export default Portfolio
