import React from 'react'
import "./TimelineContainer.scss";
import TimeLineItem from "../TimelineItem/TimelineItem";

const TimeLineContainer = ({data}) => {
    return (
        <ul className="timeline-container">
           {data.length > 0 ? data.map((item, id) => {
               const {time, title, job} = item;
               return  <TimeLineItem 
                            key={id}
                            time={time}
                            title={title}
                            job={job}
                        /> 
           }) : null}
        </ul>
    )
}

export default TimeLineContainer
