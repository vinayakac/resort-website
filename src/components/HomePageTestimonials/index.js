import React from "react";

import "./index.css"

import Slider from "react-slick";


import image from "./images/image1.png"

import profile from "./images/profile1.png"

import star from "./images/star.png"

let TestimonialData = [
    {
        profile: profile,
        name: "Ralph Clark",
        subname: "Solo Travele",
        paragraph: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",

    },
    {
        profile: profile,
        name: "Ralph Clark",
        subname: "Solo Travele",
        paragraph: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.",

    },
]

function HomePageTestimonials() {


    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: false,
        nextArrow: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="home-page-testimonial-container">
            <div className="home-page-testimonial-content-container">
                {/* <Slider  {...settings}> */}
                    <div className="home-page-testimonial-image">
                        <img src={image} alt="" className="testimonial-image" />
                    </div>
                {/* </Slider> */}
                <div className="home-page-testimonial-title-container">
                    <div className="home-page-testimonial-content-header-title">T E S T I M O N I A L S</div>
                    <div className="home-page-testimonial-content-header-sub-title">WHAT THEY SAY’S </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.</p>

                    <div className="home-page-testimonial-card-container">

                        {TestimonialData.map((d, i) => (

                            <div className="home-page-testimonial-cards">
                                <div className="home-page-testimonial-card-profile-container">
                                    <div className="home-page-testimonial-profile">
                                        <img src={d.profile} alt="" style={{ border: "2px solid #FFFFFF", borderRadius: 50 }} />
                                    </div>
                                    <div className="home-page-testimonial-name-container">
                                        <div className="home-page-testimonial-name">{d.name}</div>
                                        <div className="home-page-testimonial-sub-name">{d.subname}r</div>

                                    </div>

                                </div>
                                <div className="home-page-testimonial-card-paragraph">{d.paragraph}</div>
                                <div className="home-page-testimonial-card-star-container">

                                    <img className="home-page-testimonial-card-star"
                                        src={star}
                                        alt="star"
                                    />

                                    <img className="home-page-testimonial-card-star"
                                        src={star}
                                        alt="star"
                                    />

                                    <img className="home-page-testimonial-card-star"
                                        src={star}
                                        alt="star"
                                    />

                                    <img className="home-page-testimonial-card-star"
                                        src={star}
                                        alt="star"
                                    />

                                    <img className="home-page-testimonial-card-star"
                                        src={star}
                                        alt="star"
                                    />

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePageTestimonials