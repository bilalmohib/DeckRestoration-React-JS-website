import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import '../Styling/Home.css';

function ContactUsPage() {

    return (
        <div>
            <Header />
            <a href="tel:7736648791" className="btn phoneMobile">
                <i className="glyphicon glyphicon-earphone ico-phone"></i>
            </a>
            {/* Contact Banner Section Starts Here */}
            <section className="service-header">
                <img src="images/service-header.JPEG XR" />
            </section>
            {/* Contact Banner Section Ends Here */}
            {/* Contact us Page Content Starts Here */}
            <section className="pad-top-60 pad-bot-60">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div className="contact-head">
                        <h3> Contact Us </h3>
                    </div>
                    <div className="contact-details">
                        <p> <a href="tel:7736648791"> <b> Phone: </b>  773-664-8791 </a> </p>
                        <p> <a href="gmail.com"> <b> Email: </b>  contact@deckrestorationservices.com </a> </p>
                        <p> <a href="tel:7736648791"> <b> Text: </b>  7773-664-8791 </a> </p>
                    </div>
                    <div className="contact-form">
                        <form id="info_form" autoComplete="off">
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                    <div className="form-field2">
                                        <p> Your Name * </p>
                                        <input type="text" name="name" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                    <div className="form-field2">
                                        <p> Address/City* </p>
                                        <input type="text" placeholder name="city" required />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                    <div className="form-field2">
                                        <p> Email Address * </p>
                                        <input type="text" placeholder="Your Email" name="email" required />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                    <div className="form-field2">
                                        <p> Phone Number * </p>
                                        <input type="text" placeholder="Your Phone" name="phone" required />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="form-field2">
                                        <p> Please tell us a bit about your project </p>
                                        <textarea placeholder="Your Message" name="address" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="form-field2">
                                        <input type="submit" defaultValue="SEND" name="submit" />
                                        <span id="error_message" className="text-danger" />
                                        <span id="success_message" className="text-success" />
                                    </div>
                                </div>
                                <div className="col-md-12 hide message">
                                    <div className="form-field2 alert alert-success">
                                        <strong>Than you for contacting us -</strong> We will get back to you soon!
                                </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Contact us Page Content Ends Here */}
            <Footer />
        </div>
    )
}
export default ContactUsPage;