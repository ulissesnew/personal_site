import React from 'react'
import "./BackgroundExperiences.scss";

const BackgroundHome = ({children}) => {
    return (
        <div id="background">
              <div className="orange-circle-experience"></div>
              <div className="blue-circle-top-experience"></div>
              <div className="blue-circle-experience"></div>
              <div className="min-yellow-circle-experience"></div>
              <div className="orange-circle-experience2"></div>
              <div className="silver-circle-top-experience"></div>
              <div className="banana-yellow-circle-experience"></div>
              <div className="d-yellow-experience"></div>
              <div className="d-orange-experience"></div>
              <div className="banana-silver-circle-experience"></div>
              <div className="blue-circle-experience2"></div>
              <div className="d-blue-circle-experience"></div>
              <div className="yellow-circle-experience2"></div>
              <div className="d-orange-experience2"></div>
              <div className="m-orange-circle-experience"></div>
              <div className="silver-circle-experience"></div>
              <div className="pizza-orange-experience"></div>

              <div className="mid-silver-circle-experience"></div>
              <div className="mid-blue-circle-experience"></div>
              
              <div className="mid-yellow-circle-experience"></div>
              <div className="pizza-orange-experience2"></div>
            {children}
        </div>
    )
}

export default BackgroundHome
