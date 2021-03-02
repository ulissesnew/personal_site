import React from 'react'
import "./CarouselList.scss"
import CarouselItem from "../CarouselItem/CarouselItem";


class CarouselList extends React.Component {
         render(){
             
            return (
                <div >
                    {
                    this.props.landing.map((item, index) => {
                        const {content, imgUrl,name, job} = item;
                        return (
                            <div className={
                                index === this.props.activeIndex ? 'active' : 'inactive'
                                }
                                key={index}
                            > 
                            <CarouselItem
                                content={content}
                                imgUrl={imgUrl}
                                name={name}
                                job={job}
                            />
                            </div>
                        )
                    })
                    }
                </div>
            )
                }
}

export default CarouselList
