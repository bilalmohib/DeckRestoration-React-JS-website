import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../Styling/Home.css';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Top Bar Section Starts Here */}
            <section className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="top-bar-left">
                                <h6> Our Ratings:
                    <span> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <b> 5 out of 5 </b> </span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="top-bar-right">
                                <span> <i className="fa fa-envelope"> </i> contact@deckrestorationservices.com </span>
                                <span> <i className="fa fa-phone"> </i> 773 664 8791 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top Bar Section Ends Here */}
            {/* Header Section Starts Here */}
            <header>
                <div className="container">
                    <div className="logo">
                        <Link to="/"> <img src="images/logo.JPEG XR" /> </Link>
                    </div>
                    <div className="navbar-handler">
                        {(menuOpen) ? (
                            <div>
                                <button className="btnToggle" onClick={() => setMenuOpen(false)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <img src="images/cross.JPEG XR" alt="" />
                                </button>

                            </div>
                        ) : (
                            <div>
                                <button className="btnToggle" onClick={() => setMenuOpen(true)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <img src="images/hamburger.JPEG XR" alt="" />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="navbar-custom collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="menu-item">
                            <Link to="/"> Home </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/services"> Services </Link>
                            <ol>
                                <li> <a href="services#deck-cleaning-service"> DECK CLEANING AND POWER WASHING </a></li>
                                <li> <a href="services#deck-refinishing-service"> DECK REFINISHING &amp; RESTORATION </a></li>
                                <li> <a href="services#deck-repair-service"> DECK REPAIR </a></li>
                                <li> <a href="services#exterior-service"> EXTERIOR CARPENTRY </a></li>
                            </ol>
                        </div>
                        <div className="menu-item">
                            <Link to="/about"> About Us </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/gallery"> Gallery </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/contact"> Contact Us </Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/blog"> Blog </Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header Section Ends Here */}
        </div>
    )
}
export default Header;
