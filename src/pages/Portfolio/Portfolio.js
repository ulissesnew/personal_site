import React, {useState, useEffect} from 'react'
import "./Portfolio.scss";
import Section from "../../hoc/Section/Section";
import BigText from "../../components/BigText/BigText";
import ShadowText from "../../components/ShadowText/ShadowText";
import CardList from "../../components/CardList/CardList";
import data from "./dataPortfolio";
import Button from "../../components/Button/Button"
import CategoryLabels from "../../components/CategoryLabels/CategoryLabels";
import Input from "../../components/Input/Input";


const dataCategory = ["Web Design","3D", "Branding", "Mobile", "Typography"];


const Portfolio = () => {
    const [input, setInput] = useState("")
    const [allData, setAllData] = useState([])

    useEffect(() => {
        return setAllData(data)
    }, [])

    // console.log(allData.splice(0,3));
    const searchEvent = (event) => {
        return setInput(event.target.value) 
     }

    const filterData = (arr, search) => {
        return arr.length > 0 ? arr.filter(x => {
            return x.category.toLowerCase().includes(search.toLowerCase())
        }) : [];
    }
  
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
                        <CategoryLabels arr={dataCategory} state={input}/>
                    </div>
                    <div>
                        <Input id="input-search" 
                            change={searchEvent}
                            type="search" 
                            placeholder="Search for category"
                        />
                    </div>

                </div>
                <CardList items={filterData(allData,input)}/>
                    {/* {JSON.stringify(allData)} */}
                <Button color="White"
                    text="Discover all Works"
                    bgColor="Orange"
                    size="large"
                    arrow={true}
                     url="#portfolio"
                 />
                
            </div>
        </Section>
    )
}

export default Portfolio
