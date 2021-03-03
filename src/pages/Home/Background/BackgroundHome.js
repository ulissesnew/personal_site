import React from 'react'
import "./BackgroundHome.scss";

const BackgroundHome = ({children}) => {
    return (
        <div id="background">
              <div className="blue-circle"></div>
              <div className="yellow-circle"></div>
              <div className="orange-circle"></div>
              <div className="min-orange-circle"></div>
              <div className="min-orange-circle2"></div>
              <div className="blue-circle-top"></div>
              <div className="silver-circle"></div>
              <div className="blue-circle-top3"></div>
              <div className="mid-orange-circle"></div>
              <div className="banana"></div>
              <div className="d-yellow-circle"></div>
              <div className="d-dark-circle"></div>
              <div className="d-blue-circle"></div>
              <div className="d-orange-circle"></div>
              <div className="banana-silver"></div>
              <div className="m-yellow-circle"></div>
              <div className="m-silver-circle"></div>
              <div className="pizza-orange"></div>
              <div className="m-orange-circle"></div>






            {children}
        </div>
    )
}

export default BackgroundHome
