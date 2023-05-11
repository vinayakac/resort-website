import React from "react";

import "./index.css"

let RoomsData = [
    {
        image: process.env.PUBLIC_URL + '/Assets/HomePageRoom/images/image1.png',
        title: "FAMILY ROOM",
        paragraph: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        name: "Starting",
        amount: "$260",
        day: "/days"

    },
    {
        image: process.env.PUBLIC_URL + '/Assets/HomePageRoom/images/image2.png',
        title: "LUXURY ROOM",
        paragraph: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        name: "Starting",
        amount: "$260",
        day: "/days"


    },
    {
        image: process.env.PUBLIC_URL + '/Assets/HomePageRoom/images/image3.png',
        title: "STANDERD ROOM",
        paragraph: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        name: "Starting",
        amount: "$260",
        day: "/days"


    },
    {
        image: process.env.PUBLIC_URL + '/Assets/HomePageRoom/images/image4.png',
        title: "DOUBLE BED ROOM",
        paragraph: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
        name: "Starting",
        amount: "$260",
        day: "/days"


    },
]

function HomePageRooms() {
    return (
        <div className="home-page-rooms-container">
            <div className="home-page-rooms-content-container">
                <div className="home-page-rooms-content-header">ROOMS</div>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
            </div>

            <div className="home-page-rooms-card-container">

                {RoomsData.map((d, i) => (

                    <div className="home-page-rooms-card">
                        <div className="home-page-rooms-card-image">
                            <img src={d.image} alt="" />
                        </div>

                        <div>

                            <div className="home-page-rooms-card-header-title">{d.title}</div>
                            <div className="home-page-rooms-card-paragraph">{d.paragraph}</div>

                            <div className="home-page-rooms-card-list">
                                <li>Max: 4 Person(s) </li>
                                <li>Size: 35 m2 / 376 ft2</li>
                                <li>View: Ocen</li>
                                <li>Bed: King-size or twin beds</li>

                            </div>
                            <div className="home-page-rooms-card-amount-container">
                                <div className="home-page-rooms-card-day">{d.name}</div>
                                <div className="home-page-rooms-card-amount">{d.amount}</div>
                                <div className="home-page-rooms-card-day">{d.day}</div>

                            </div>
                            <button id="myBtn" className="home-page-rooms-button" type="submit">VIEW DETAILS</button>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePageRooms