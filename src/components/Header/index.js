import React, { useState } from "react";
import "./index.css"

import sign from "./icons/sign.png"

import logo from "./icons/logo.png"

import dropdown from "./icons/dropdown.png"

function Header() {

    const [showHeaderLinkDropdown, setShowHeaderLinkDropdown] = useState(false)
    const [showAboutmobileViewSubmenue, setShowAboutmobileViewSubmenue] = useState(false);
    const [showAccommodationmobileViewSubmenue, setShowAccommodationmobileViewSubmenue] = useState(false);


    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header-links-container">
                <a className="header-links" href="/">Home page </a>
                <div className="dropdown">
                    <a className="header-links" href="/about-us">About Us

                        <div className="drop-down-icon"><img src={dropdown} alt="dropdown" width={15} height={15} /></div>
                    </a>

                    <div className="dropdown-content">
                        <a href="#">Client Review</a>

                    </div>
                </div>


                <div className="dropdown">
                    <a className="header-links">Accommodation

                        <div className="drop-down-icon"><img src={dropdown} alt="dropdown" width={15} height={15} /></div>
                    </a>

                    <div className="dropdown-content">
                        <a href="#">Deluxe Room</a>
                        <a href="#">Superior Cottage</a>
                        <a href="#">Premium Room</a>
                        <a href="#">Garden View</a>
                    </div>
                </div>

                <a className="header-links" href="">Gallery</a>
                <a className="header-links" href="">Amenities</a>
                <a className="header-links" href="">Contact Us</a>
                <a className="header-links" href="">Sign In</a>

            </div>
            <div className="header-ham">
                <svg
                    width="30"
                    height="20"
                    viewBox="0 0 30 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => setShowHeaderLinkDropdown(!showHeaderLinkDropdown)}
                >
                
                    <path xmlns="http://www.w3.org/2000/svg" d="M4,7v2h24v-2zM4,15v2h24v-2zM4,23v2h24v-2z"
                    fill="#f3620ec7"
                    fillOpacity="0.9"
                    
                    />
                </svg>
             
            </div>


            {showHeaderLinkDropdown && (
                <div style={{ background: "#FFFF" }} className="nav-menu active">
                    <div className="header-link-container-mobile">
                        <a href="/" style={{ textDecoration: "none" }}>
                            <div className="header-link-mobile">Home page </div>
                        </a>


                        <div className="header-link-mobile" onClick={e => setShowAboutmobileViewSubmenue(!showAboutmobileViewSubmenue)}>About Us

                            <div className="drop-down-icon"><img src={dropdown} alt="dropdown" width={15} height={15} /></div>


                        </div>

                        {showHeaderLinkDropdown && showAboutmobileViewSubmenue &&

                            <div className="header-link-mobile">

                                <div style={{ height: "30px", display: "inline-grid", }}>


                                    <span className="dropdown-mobile" >
                                        <a href="#">Client Review</a>
                                    </span>

                                </div>


                            </div>


                        }

                        <div className="header-link-mobile" onClick={e => setShowAccommodationmobileViewSubmenue(!showAccommodationmobileViewSubmenue)}>Accommodation

                            <div className="drop-down-icon"><img src={dropdown} alt="dropdown" width={15} height={15} /></div>


                        </div>

                        {showHeaderLinkDropdown && showAccommodationmobileViewSubmenue &&

                            <div className="header-link-mobile">

                                <div style={{ height: "120px", display: "inline-grid", }}>


                                    <span className="dropdown2-mobile" >
                                        <a href="#">Deluxe Room</a>
                                        <a href="#">Superior Cottage</a>
                                        <a href="#">Premium Room</a>
                                        <a href="#">Garden View</a>
                                    </span>

                                </div>


                            </div>


                        }
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="header-link-mobile">Gallery</div>
                        </a>
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="header-link-mobile">Amenities</div>
                        </a>
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="header-link-mobile">Contact Us</div>
                        </a>
                        <a href="" style={{ textDecoration: "none" }}>
                            <div className="header-link-mobile">Sign In</div>
                        </a>

                    </div>
                </div>
            )}

            {/* <div className="header-buttons">
                <div className="header-sign-in-button">
                    <div className="header-sign-in-icon">

                        <img src={sign} alt="sign" width={20} height={20} />

                    </div>
                    <div className="header-sign-in">Sign In</div>
                </div>
                <button id="myBtn" class="header-book-now-button" type="submit">BOOK NOW !</button>

            </div> */}

        </div>
    )
}

export default Header;

