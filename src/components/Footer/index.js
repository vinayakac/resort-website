import React from "react";

import "./index.css"

import mail from "./icons/mail.png"

import phone from "./icons/phone.png"

import instagram from "./icons/instagram.png"

import facebook from "./icons/facebook.png"

import twitter from "./icons/twitter.png"

import youtube from "./icons/youtub.png"


function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container-1">
                <div className="footer-container-header-title">RESORT NAME</div>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC.</p>
                <div className="footer-container-buttons">
                    <div>
                        <input
                            className="footer-mail"
                            placeholder="Enter your Email"

                        />
                    </div>
                    <button id="myBtn" className="footer-button" type="submit">SUBSCRIBE</button>


                </div>
            </div>
            <div className="footer-container-2">
                <div className="footer-header-links-container">
                    <div className="footer-link-header">
                        <div className="footer-link-header-title">Company</div>
                        <div className="footer-link-header-list">
                            <li>About Us</li>
                            <li>Leadership</li>
                            <li>Careers</li>
                            <li>News & Article</li>
                        </div>

                    </div>
                    <div className="footer-link-header">
                        <div className="footer-link-header-title">Locations</div>

                        <div className="footer-link-location"> HSR Layout Bangalore Karnataka</div>

                        <div className="footer-container-mail-address">
                            <div className="footer-mail-icon">
                                <img src={mail} alt="" />
                            </div>
                            <div className="footer-mail-name">resortname@yourdomain.tld </div>


                        </div>
                        <div className="footer-container-mail-address">
                            <div className="footer-mail-icon">
                                <img src={phone} alt="" />
                            </div>
                            <div className="footer-mail-name">+(91) 8348758766 </div>


                        </div>

                    </div>

                </div>
                <div className="footer-follow-us-container">
                    <div className="footer-link-header-title">Follows On</div>

                    <div className="footer-social-icon-container">
                        <a
                            traget="_new"
                            href="https://instagram.com"
                        >
                            <img className="footer-social-icons"
                                src={instagram}
                                alt=""
                            />
                        </a>
                        <a
                            traget="_new"
                            href="https://facebook.com"
                        >
                            <img className="footer-social-icons"
                                src={facebook}
                                alt=""
                            />
                        </a>
                        <a
                            traget="_new"
                            href="https://twitter.com"
                        >
                            <img className="footer-social-icons"
                                src={twitter}
                                alt=""
                            />
                        </a>
                        <a
                            traget="_new"
                            href="https://youtube.com"
                        >
                            <img className="footer-social-icons"
                                src={youtube}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer