import React from "react";

import "./index.css"

import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import arrow from "./images/arrow.png"


function HomePageBanner() {

  const sliderRef = useRef();

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
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
    <div>
      <Slider ref={sliderRef} {...settings}>

        <div className="home-page-banner-container-1">
          <p className="home-page-banner-content">W I T H  T H E  B E S T</p>

          <div className="home-page-banner-sub-content">AMINITIES</div>
          <button id="myBtn" className="home-page-banner-button" type="submit">View More</button>

        </div>

        <div className="home-page-banner-container-2">
          <p className="home-page-banner-content">B E S T </p>

          <div className="home-page-banner-sub-content">FOOD</div>
          <button id="myBtn" className="home-page-banner-button" type="submit">View More</button>
        </div>
        <div className="home-page-banner-container-3">
          <p className="home-page-banner-content">W E L L  M A I N T A I N E D  </p>

          <div className="home-page-banner-sub-content">AMBIANCE</div>
          <button id="myBtn" className="home-page-banner-button" type="submit">View More</button>
        </div>


      </Slider>

      <div className="home-page-banner-carousal-btn">
        <div className="home-page-banner-slider-action-holder">
          <div
            className="home-page-banner-carousal-left-chevron-btn"
            onClick={() => {
              console.log(sliderRef);
              sliderRef.current.slickPrev();
            }}
          >
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9375 1.47925L0.916667 9.50008L8.9375 17.5209"
                stroke="hsla(0,0%,93.3%,.9)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">

              <rect x="40.2852" y="53.2847" width="31.5695" height="3.5695" transform="rotate(-180 43.2852 43.2847)" fill="#FFFFFF" />

              <circle cx="27.5005" cy="27.5" r="26.9451" transform="rotate(-180 27.5005 27.5)" stroke="white" stroke-width="1.10987" />

              <path
                d="M8.9375 1.47925L0.916667 9.50008L8.9375 17.5209"
                stroke="hsla(0,0%,93.3%,.9)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

            </svg> */}
          
        </div>
      </div>

      <div
        className="home-page-banner-carousal-right-chevron-btn"
        onClick={() => {
          console.log(sliderRef);
          sliderRef.current.slickNext();
        }}
      >
        <svg
          width="10"
          height="19"
          viewBox="0 0 10 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.0625 17.5208L9.08333 9.49992L1.0625 1.47908"
            stroke="hsla(0,0%,93.3%,.9)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>


    </div >
  )
}

export default HomePageBanner;





