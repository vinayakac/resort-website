import React from "react";

import "./index.css"

import about1 from "./images/about1.png"

function AboutUsPageAbout() {
    return (
        <div className="about-us-page-about-container">
            <div className="about-us-page-about-block">

                <div className="about-us-page-about-image">
                    <img src={about1} alt="" />
                </div>
                <div className="about-us-page-about-content">
                    <div className="about-us-page-about-content-header-title">ABOUT US</div>
                    <div className="about-us-page-about-content-header-sub-title">Lorem Ipsum is simply dummy text</div>

                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>

                    <button id="myBtn" className="about-us-page-about-button" type="submit">READ MORE</button>


                </div>

            </div>

            <div className="about-us-page-about-block">

                
                <div className="about-us-page-about-content-1">
                    <div className="about-us-page-about-content-header-title">WHY YOU CHOOSE US</div>
                    <div className="about-us-page-about-content-header-sub-title">One of Catalina Island's best-loved hotels, Hotel Vista Del Mar is recognized as one of Avalon's leading hotels with gracious island hospitality, thoughtful amenities and distinctive .</div>

                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>


                </div>

                <div className="about-us-page-about-image-2">
                    <img src={about1} alt="" />
                </div>

            </div>

        </div>
    )
}
export default AboutUsPageAbout