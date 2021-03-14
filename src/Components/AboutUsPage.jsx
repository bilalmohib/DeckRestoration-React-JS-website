import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import '../Styling/Home.css';

function AboutUsPage() {

    return (
        <div>
            <Header />
            <a href="tel:7736648791" className="btn phoneMobile">
                <i className="glyphicon glyphicon-earphone ico-phone"></i>
            </a>
            {/* Service Banner Section Starts Here */}
            <section className="service-header">
                <img src="images/service-header.JPEG XR" />
            </section>
            {/* Service Banner Section Ends Here */}
            {/* About us Page Content Starts Here */}
            <section className="pad-top-60 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 pull-right">
                            <div className="about-textual" style={{ textAlign: 'left' }}>
                                <h3 style={{ textAlign: 'left !important' }}>  Who We Are</h3>
                                <img src="images/about-image1.JPEG XR" />
                                <h3 style={{ textAlign: 'left !important' }}>  ABOUT US</h3>
                                <p> Source Energy's deck services is a family claimed and worked business in Chicagoland suburbs  with long stretches of involvement with the home improvement industry. Our business has fabricated a standing by giving its customers quality and the best quality of polished methodology and security. We are committed to giving predominant quality materials, ideal development plans, and experienced representatives that function as a group and invest heavily in their craft.</p>
                                <p> Whether you want torepairor restore your deck,you can depend on Source Energy's deck services team to convey top quality and professional service. We realize our clients are the main piece of our business, presently and later on. We are focused on gathering and surpassing our client's assumptions.</p>
                                <p> By choosing us, you are choosing a project work as well as a structure accomplice. We accept that positive connections are the way to conveying a profitable venture and guaranteeing the excursion of development is proficient and pleasant.</p>
                                <img src="images/about-image2.JPEG XR" style={{ marginTop: '30px' }} />
                                <h3 style={{ textAlign: 'left !important' }}> OUR MISSION </h3>
                                <p> Our focus on Source Energy's deck restoration services is to convey whatever our customers need. Regardless of whether you are on a huge or little financial plan, we can tailor your venture to suit your necessities.</p>
                                <p> Source Energy's deck services have finished many fruitful redesigns and expansions, which is obvious when you take a gander at the number of rehash references from our fulfilled clients. Our principles center around excellent client care. It's your home. It would be best touse our service, and we will control you through it with our skill.</p>
                                <p> Source Energy's deck services have skilled workers and experienced dealers, empowering the organization to give outstanding work on a wide range of private deck repairs and restorations effectively and securely.</p>
                                <p> Your deck is an augmentation of your home, a spot to invest quality energy with loved ones while getting a charge out of the outside. For more than 17 years, Source Energy's carpentry Decks has gladly made wonderful, high caliber, and durable decks. We value our unmatched craftsmanship and are committed to building your fantasy deck. In case you're prepared to see your vision spring up, get in touch with us for an estimate today! </p>
                                <a className="custom-btn2"> BOOK YOUR CONSULTATION </a>
                            </div>
                            <div className="row" style={{ maxWidth: '950px', marginLeft: 'auto', marginRight: 'auto' }}>
                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div className="about-textual">
                                        <img src="images/about-image3.JPEG XR" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                    <div className="about-textual">
                                        <img src="images/about-image4.JPEG XR" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                            <div className="estimate-form3">
                                <h3> FREE ESTIMATE TODAY!</h3>
                                <form id="info_form" autoComplete="off">
                                    <div className="form-field2">
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-field2">
                                        <input type="text" placeholder="Your Email" name="email" required />
                                    </div>
                                    <div className="form-field2">
                                        <input type="text" placeholder="Your Phone" name="phone" required />
                                    </div>
                                    <div className="form-field2">
                                        <textarea placeholder="Your Message" name="address" defaultValue={""} />
                                    </div>
                                    <div className="form-field2">
                                        <input type="submit" defaultValue="SEND" name="submit" />
                                        <span id="error_message" className="text-danger" />
                                        <span id="success_message" className="text-success" />
                                    </div>
                                    <div className="col-md-12 hide message">
                                        <div className="form-field2 alert alert-success">
                                            <strong>Than you for contacting us -</strong> We will get back to you soon!
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About us Page Content Ends Here */}
            <Footer />
        </div>
    )
}
export default AboutUsPage;
