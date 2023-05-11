import React from "react";

import "./index.css"

import image1 from "./images/image1.png"

import image2 from "./images/image2.png"

import image3 from "./images/image6.png"

import image4 from "./images/image4.png"

import image5 from "./images/image9.png"

import image6 from "./images/image10.png"

import image7 from "./images/image8.png"

import image8 from "./images/image7.png"

import image9 from "./images/image5.png"

import image10 from "./images/image3.png"



// let DinningData = [
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image1.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image2.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image6.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image10.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image8.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image9.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image7.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image4.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image5.png',

//     },
//     {
//         image: process.env.PUBLIC_URL + './Assets/HomePageDinnings/images/image3.png',

//     },
    
// ]

function HomePageDinning() {
    return (
        <div className="home-page-dinning-container">

            <div className="home-page-dinning-header-title">DINNING AND EVENTS</div>

            <div className="home-page-dinning-header-sub-title">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</div>

            <div className="home-page-dinning-image-container">

            {/* {DinningData.map((d, i) => ( */}

                {/* <div className="home-page-dinning-images"> */}

                <img src={image1} alt="" className="home-page-dinning-images"/>
                <img src={image2} alt="" className="home-page-dinning-images"/>
                <img src={image3} alt="" className="home-page-dinning-images"/>
                <img src={image4} alt="" className="home-page-dinning-images"/>
                <img src={image5} alt="" className="home-page-dinning-images"/>
                <img src={image6} alt="" className="home-page-dinning-images"/>
                <img src={image7} alt="" className="home-page-dinning-images"/>
                <img src={image8} alt="" className="home-page-dinning-images" width={278} height={193}/>
                <img src={image9} alt="" className="home-page-dinning-images"/>
                <img src={image10} alt="" className="home-page-dinning-images"/>


                {/* </div> */}
            {/* ))} */}

            </div>
        </div>
    )
}

export default HomePageDinning