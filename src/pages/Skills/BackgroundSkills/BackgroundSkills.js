import React from 'react'
import "./BackgroundSkills.scss";

const Background = ({children}) => {        
    return (
        <div id="background">
            <div className="m-orange-circle-skills"></div>
            <div className="d-yellow-circle-skills"></div>
            <div className="orange-pizza-skills"></div>
            <div className="blue-circle-right"></div>
            
            <div className="d-silver-circle-right"></div>
            <div className="banana-skills"></div>
            <div className="silver-circle-right"></div>
            <div className="m-blue-circle-skills"></div>
            <div className="orange-pizza-skills2"></div>
            <div className="yellow-banana-skills"></div>
         

            {children}
        </div>
    )
}

export default Background
