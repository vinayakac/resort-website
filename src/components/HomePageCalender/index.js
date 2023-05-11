import React from "react";

import "./index.css"

import icon from "./icons/calender.png"

import icon1 from "./icons/dropdown.png"

let CalenderData = [
    {
        content: "Arrival Date",
        icon: icon
    },
    {
        content: "Departure Date",
        icon: icon
    },
    {
        content: "Adults",
        icon: icon1

    },
    {
        content: "Children's",
        icon: icon1

    },

]

function HomePageCalender() {
    return (
        <div className="home-page-calender-container">

            <div className="home-page-calender-box">
                {CalenderData.map((d, i) => (
                    <div className="home-page-calender-check-in-container">

                        <div className="home-page-calender-content">{d.content}</div>
                      
                            <div className="home-page-calender-icon">
                                <img src={d.icon} alt="" />
                            </div>
                       
                    </div>

                ))}

                    <button id="myBtn" className="home-page-calender-button" type="submit">CHECK AVAILABLITY</button>

            </div>

        </div>
    )
}

export default HomePageCalender;