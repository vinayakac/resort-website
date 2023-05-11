import React from "react";

import "./index.css"

import AboutUsPageBanner from "../AboutUsPageBanner";

import AboutUsPageAbout from "../AboutUsPageAbout";

import AboutUsPageAccommodation from "../AboutUsPageAccommodation";

function AboutUsPage () {
    return (
        <div className="about-us-page-container">

            <AboutUsPageBanner/>

            <AboutUsPageAbout/>

            <AboutUsPageAccommodation/>
            
        </div>
    )
}

export default AboutUsPage