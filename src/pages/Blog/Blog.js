import React from 'react'
import "./Blog.scss";
import BigText from "../../components/BigText/BigText";
import  Button from "../../components/Button/Button"
import ShadowText from "../../components/ShadowText/ShadowText";
import CardList from "../../components/CardList/CardList";
import data from "../../components/CardList/data";
// import logList from "./BlogList/BlogList";

const Blog = () => {
    return (
        <section id="blog">
            <div className="blog">
                <ShadowText arr={["BLOG"]}/>
                <BigText 
                    small="My Blog"
                    title="Blog"
                    content="See the latest articles that`s talking about design and development."
                    character="."
                />
                <CardList items={data}/>
                <Button 
                    url=""
                    text="Read all articles"
                    color= "White"
                    bgColor="BrightOrange"
                    arrow={true}
                    size="large"
                />
             
            </div>

            
        </section>
    )
}

export default Blog
