import React from "react";

import "./index.css"

import image from "./images/image.png"

import image1 from "./images/image1.png"

function HomePageAbout() {
    return (
        <div className="home-page-about-container">
            <div className="home-page-about-block">
                <div className="home-page-about-block-image">
                    <img src={image} alt="" />
                </div>
                <div className="home-page-about-block-content">
                    <div className="home-page-about-block-content-header">ABOUT US</div>
                    <div className="home-page-about-block-paragraph">Lorem Ipsum is simply dummy text</div>
                    <div className="home-page-about-block-paragraph">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
                    </div>

                    <button id="myBtn" className="home-page-about-button" type="submit">READ MORE</button>


                </div>
            </div>

            <div className="home-page-about-block">

                <div className="home-page-about-block-content-2">
                    <div className="home-page-about-block-content-header">OUR BEST</div>

                    <p>One of Catalina Island's best-loved hotels, Hotel Vista Del Mar is recognized as one of Avalon's leading hotels with gracious island hospitality, thoughtful amenities and distinctive </p>

                    <div className="home-page-about-block-board-container">
                        <div>
                        <li>Coffee maker </li>
                        <li>25 inch or larger TV </li>
                        <li>Cable/satellite TV channels</li>
                        <li>AM/FM clock radio </li>
                        <li>Oversized work desk</li>
                        <li>Hairdryer</li>
                        </div>
                       <div>
                       <li>Iron/ironing board upon request</li>
                        <li>Dataport</li>
                        <li> Phone access fees waived</li>
                        <li>24-hour Concierge service</li>
                       </div>
                    </div>



                </div>
                <div className="home-page-about-block-image-2">
                    <img src={image1} alt="" />
                </div>
            </div>

        </div>
    )
}

export default HomePageAbout;