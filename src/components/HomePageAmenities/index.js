import React from "react";

import "./index.css"



let AmenitiesData = [
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon1.png',
        title:"Outdoor Bbq"

    },
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon2.png', 
        title:"Lake Swimming" 
      },
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon3.png', 
        title:"Games & Sports" 
      },
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon4.png', 
        title:"Outdoor Adventure" 
      },
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon5.png',  
        title:"Nature Walk"
      },
    {
        icon: process.env.PUBLIC_URL + '/Assets/HomePageAmenitie/icons/icon6.png', 
        title:"Campfire"
       },
]

function HomePageAmenities () {
    return (
        <div className="home-page-amenities-container">
            <div className="home-page-amenities-content-container">
                <div className="home-page-amenities-card-container">

                {AmenitiesData.map((d, i) => (

                    <div className="home-page-amenities-card">
                        <div className="home-page-amenities-card-icon">
                            <img src={d.icon} alt="icon" width={70}/>
                        </div>
                        <div className="home-page-amenities-card-title">{d.title}</div>
                    </div>

                ))}
                </div>
                <div className="home-page-amenities-card-content-container">

                    <div className="home-page-amenities-card-content-header">AMENITIES</div>

                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

                    <button id="myBtn" className="home-page-amenities-button" type="submit">READ MORE</button>

                </div>

            </div>
        </div>
    )
}

export default HomePageAmenities