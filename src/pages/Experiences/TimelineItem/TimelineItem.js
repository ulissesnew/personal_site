import React from 'react'
import  "./TimelineItem.scss";


const TimelineItem = ({time, title, job}) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <time>{time}</time>
                <h2>{title}</h2>
                <p>{job} </p>
                <span className="circle"></span>
            </div>
        </div>
    )
}

export default TimelineItem
