import React from 'react';

import { Link } from 'react-router-dom';


function Footer() {

    return (
        <div>
            {/* Footer Section Starts Here */}
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-col">
                                    <img src="images/logo.JPEG XR" width="70%" />
                                    <p className="m-t-20"> Restore your weathered deck into a space that suits you and your family. Make it
                                    an excellent den for the children, outdoor room, party space for you, or whatever else you can
                    consider.Call us Today for excellent deck restoration services.</p>
                                    {/* Experience Deck Restorators Section Ends Here 
                           <a href=""><img src="images/facebook.png" /></a>
                           <a href=""><img src="images/twitter.png" /></a>
                           <a href=""><img src="images/instagram.png" /></a>
                           */}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-col con-foot">
                                    <h3> Contact Info </h3>
                                    <p><img src="images/location.JPEG XR" /> Location here</p>
                                    <p><img src="images/call.JPEG XR" /> 773 664 8791</p>
                                    {/*  <p><img src="images/phone.png" /> </p>*/}
                                    <p><img src="images/email.JPEG XR" />contact@deckrestorationservices.com</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-col">
                                    <h3> NAVIGATION </h3>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/">HOME</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/services">SERVICES</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/about">ABOUT US</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/gallery">GALERY</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/contact">CONTACT US</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/blog">BLOG</Link></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <Link to="/admin">ADMIN</Link></p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-col">
                                    <h3> SERVICES </h3>
                                    <p> <a href="services#deck-cleaning-service"><i className="fa fa-chevron-right fs-12" /> DECK CLEANING &<br/>POWER WASHING</a></p>
                                    <p> <a href="services#deck-refinishing-service"><i className="fa fa-chevron-right fs-12" /> DECK REFINISHING &<br/> RESTORATION</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="services#deck-repair-service">DECK REPAIR</a></p>
                                    <p><i className="fa fa-chevron-right fs-12" /> <a href="services#exterior-service">EXTERIOR CARPENTRY</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section Ends Here */}
        </div>
    )
}
export default Footer;
