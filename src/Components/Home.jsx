import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";
import { Helmet } from "react-helmet";
// import axios from "axios";
import * as emailjs from 'emailjs-com'

import '../Styling/Home.css';
import { Message } from '@material-ui/icons';

//const axios = require('axios').default;

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            phone: '',
            city: '',
            messageSuccess:false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        let xhe = new XMLHttpRequest();

        xhe.addEventListener('load',()=>{
            // update the email status with the response
            console.log(xhe.responseText);

        })

        xhe.open('GET','http://api.ruvictor.com/sendemail/index.php?sendto='+this.state.email + 
           '&name='+this.state.name+
           '&address='+this.state.address+
           '&city='+this.state.city+
           '&phone='+this.state.phone)

           //send the request
           xhe.send();


        ////////////////////////////////////   
        // let templateParams = {
        //     from_name: this.state.email,
        //     to_name: 'bilalmohib7896@gmai.com',
        //     subject: this.state,
        //     message_html: "A message",
        // }
        // emailjs.send(
        //     'service_4io9ocs',
        //     'template_r3zh9g8',
        //     templateParams,
        //     'user_jhV7zmT6gOxCy06YDz3ON'
        // )
        ////////////////////////////////////
    }
    componentDidUpdate=()=>{
        console.log(this.state)
    }
    render() {
        return (
            <div>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Deck Restoration Services</title>
                    <meta name="description" content="Deck Restoration near me Illinois Deck Services – Staining Services, Deck Refinishing, Deck Repair -Wood Restoration Company – Power Washing Services"/>
                </Helmet>

                <Header />
                <a href="tel:7736648791" className="btn phoneMobile">
                    <i className="glyphicon glyphicon-earphone ico-phone"></i>
                </a>

                {/* Banner Slider Section Starts Here */}
                <section className="banner-slider">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval={10000}>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                            <div className="item active banner-bg1">
                                <div className="container">
                                    <div className="banner-text">
                                        <h3> Source Energy Restoration Professionals <br /> Deck Restoration Services In Illinois.</h3>
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <ul className="double-list">
                                                    <li>Full Deck Inspection </li>
                                                    <li>Paint &amp; Stain Removal </li>
                                                    <li>Deck Cleaning </li>
                                                    <li>Carpentry Repair </li>
                                                    <li>Complete Wood Restoration </li>
                                                    <li> Color &amp; Stain Consultation </li>
                                                    <li>Refinishing with Paint or Stain </li>
                                                    <li>Rotten Wood Replacements </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item banner-bg2">
                                <div className="container">
                                    <div className="banner-text">
                                        <h3> Are You Looking To Refinish Your Wood Deck? We Offer High Quality Deck Services. Give Us A
                      Call Today And Find Out Why We Are A Top Rated Deck Restoration Company In Illinois!</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="item banner-bg4">
                                <div className="container">
                                    <div className="banner-text">
                                        <h3>A High Quality Deck Restoration &amp; Refinishing Company At Your Service. We Provide Exceptional
                      Deck Repair, Deck Restoration, and Custom Deck Refinishing Service In Illinois, Since 2004!</h3>
                                    </div>
                                </div>
                            </div>

                            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="email-form email-header-form">
                            <form action="#" id="info_form" method="POST" autoComplete="off">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="email-head">Get a FREE Quote</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} name="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Your Email" className="form-control" name="email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} placeholder="Your Phone" className="form-control" name="phone" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <textarea placeholder="Your Message" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} name="address" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="submit" defaultValue="SEND" onClick={e => this.handleFormSubmit(e)} className="get-quote-but" name="submit" />
                                        <span id="error_message" className="text-danger" />
                                        <span id="success_message" className="text-success" />
                                    </div>
                                </div>
                                <div className="col-md-12 message">
                                    <div className="form-field2 alert hide alert-success">
                                        <strong>Than you for contacting us -</strong> We will get back to you soon!
                  </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* Banner Slider Section Ends Here */}
                {/* Renovation Needed Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                <div className="renovate-text">
                                    <h2> Source Energy Restoration Services in Illinois. Deck Restoration Services Serving Illinois And
                                    Chicagoland Area!
                  </h2>
                                    <h3> Deck restoration – Are you looking for a deck repair, deck refinishing or deck restoration? We
                    will do it all in Chicago and its suburbs! Check our offer! </h3>
                                    <h4> IS A RENOVATION NEEDED? </h4>
                                    <p className="para-text1"> It very well maybe just that when you take a gander at your deck, you see that
                                    the design is beginning to show its age. If the attacks of time and climate have begun to affect
                                    your open air space negatively, you may not need a full redesign, only some extra cleaning and
                                    upkeep to reestablish its unique gloss. In any case, it is essential to lead an intensive
                                    evaluation of the deck's primary sufficiency in general, to get underneath the surface and
                                    guarantee that all parts are as yet fit as a fiddle. While another layer of deck stain or paint is
                                    reviving the deck's vibe, you need to guarantee that your speculation isn't undermined due to an
                    issue that you can't see. </p>
                                    <p className="para-text1"> An all around kept up deck can keep going for a lifetime; however, when our
                                    bustling timetables keep us from routine support year over year, the lacks that create can flag a
                                    significant fix or substitution. It's ideal for getting issues that can make early so little,
                                    favorable to dynamic fixes. At Source Energy Deck Restoration, we have counseled many deck fix and
                    redesign projects in Wheaton and surrounding areas. Here's our methodology. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <div className="renovate-image1">
                                    <img src="images/H1.JPEG XR" />
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-30">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/Hy2.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/Hy3.JPEG XR" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Renovation Needed Section Ends Here */}
                {/* Deck Inspection Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 deck-bg1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500} style={{ marginTop: '50px' }}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/deck-inspection1.JPEG XR" width="580" />
                                        </div>
                                        <div className="item">
                                            <img src="images/deck-inspection2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3 className="col-white"> DECK INSPECTION </h3>
                                    <h6 className="line1 m-b-20 col-white"> . </h6>
                                    <p className="col-white"> The principal thing that we need to decide is the underlying trustworthiness of
                                    your deck. Before any therapeutic changes or moves up to the deck, we need to guarantee that your
                                    deck is protected and not developing to turn into a likely risk to your property. We check for
                                    screws and fasteners that have gotten free over the existence of the deck, just as those that may
                                    have rusted or consumed after some time and require substitution. We'll additionally check for free
                    nails and sheets that should be rejoined. </p>
                                    <p className="col-white"> In any case, it's what lies underneath the outside of the deck that can affect
                                    the main requirements of your deck renovation. We will evaluate the state of the footings, the
                                    joists' strength, and the associations that protected your deck to the outside of your home. We
                                    check for moisture and water damage/rotten wood, indications of rot, or whatever other condition
                                    that may bargain your deck's well being. If fixes or substitutions are required, we speak with you
                    all through the cycle to propose alternatives and work with you to arrive at a cure. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Deck Inspection Section Ends Here */}
                {/* Deck Repair Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="detail-text">
                            <h3> DECK REPAIR </h3>
                            <h6 className="line1 m-b-20"> . </h6>
                            <p>Regardless of whether your deck has supported broad harm or is beginning to indicate mileage, we are the
                            company that gives quick and quality deck repair service in Illinois and Chicagoland area. Our deck
                            restoration company is created to fix a wide range of decks, including wood, vinyl, or composite
                material, and will also save you a great deal of time looking for repairers and stain services. </p>
                            <p> We give moderate answers for dry deck rot, termites, mold, stripped completions, and other deck patio
                            repair issues. It's an exceptionally savvy approach as we can sand and prestain numerous pieces of your
                deck during the way toward being built or repaired. </p>
                            <p> With long and stretches years of experience restoring decks, intermittently, we are supplanting wood on
                            the faulty installation report. Trouble spots involve rotting structures due to heavy moisture,
                            dispersing between sheets where downpour will pool, and twisted or broke wood because of the low timber
                quality. </p>
                        </div>
                        <div className="detail-grids">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/dec1.JPEG XR" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/dec2.JPEG XR" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Deck Repair Section Ends Here */}
                {/* Deck Restoration Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 bg-silver">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-image">
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="images/hr1.JPEG XR" />
                                            </div>
                                            <div className="item">
                                                <img src="images/hr2.JPEG XR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> DECK RESTORATION </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p> Has your deck abided more good times? It's simple for a deck to capitulate with the impacts of
                                    unforgiving climate and general mileage over the long run. So, if your deck could utilize some
                                    consideration, we're at your service at Source Energy's carpentry services. We offer deck
                                    restoration services (i.e., Rotten wood replacements, deck/porch refinishing: staining, painting,
                                    sealing, lumber work, etc.) for customers in Illinois. Regardless of your deck's condition, we can
                    make it put its best self forward with the goal that it serves you well for the long stretch. </p>
                                    <p> When you recruit our group for deck restoration, you'll get the fantastic customer service and
                                    excellent craft you merit. We highly esteem offering incredible worthwhile keeping our rates
                                    sensible and reasonable. Furthermore, when you select us, you can have confidence that we'll work
                    rapidly and proficiently to finish your task in an ideal design. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Deck Restoration Section Ends Here */}
                {/* Deck Resurfacing Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="detail-text">
                            <h3> DECK RESURFACING </h3>
                            <h6 className="line1 m-b-20"> . </h6>
                            <p> Is your deck beginning to give indications of mileage (wear and tear)? You ought to have the choice to
                            create the most of your deck without agonizing over its appearance at Source Energy'sdeck restoration
                            services, and we offer solid deck resurfacing services for clients in Wheaton and the western suburbs.
                            Regardless of whether your deck is made of wood, vinyl, or a composite material, we have the devices and
                abilities to make it put its best self forward instantly. </p>
                            <p> At Source Energy's deck services, we highly esteem conveying excellent worth and service. Regardless of
                            the condition of your deck, we promise to make it look all around great. We take a conscientious,
                            exhaustive way to deal with each reemerging position we embrace, and we keep our rates sensible without
                            holding back on quality.
                            With sensible evaluating and simple booking, Source Energy's deck restoration services are the company to
                            trust for quality deck repair, restoration, and resurfacing services in Illinois and Chicagoland area.
              </p>
                        </div>
                        <div className="detail-grids">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/Hwe1.JPEG XR" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/Hwe2.JPEG XR" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/Hwe3.JPEG XR" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Deck Resurfacing Section Ends Here */}
                {/* Stain or Painting Decks Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 deck-bg2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                                <div className="detail-image" style={{ marginTop: '10px' }}>
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            {/* <div class="item active">
                              <img src="images/stain-painting-deck2.jpg">
                           </div>*/}
                                            <div className="item active">
                                                <img src="images/Hww1.JPEG XR" height="100%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3 className="col-white"> STAIN OR PAINTING DECKS </h3>
                                    <h6 className="line1 m-b-20 col-white"> . </h6>
                                    <p className="col-white"> There are numerous alternatives while picking a covering for your exterior
                                    decking. Numerous homes in Naperville and the Western Suburbs have wood decks, yards, porches, and
                                    walkways that should be kept up to shield from an assortment of climate conditions. Wonderful day
                                    off and sun harm unprotected wood, so it is imperative to guarantee wood decking is appropriately
                                    shielded from the components; without protection, wooden decking will disintegrate and require
                                    untimely fixes and substitution. Support may mean a straightforward, clean and layer of finish or
                                    completely sanding and eliminating existing deck coatings, and applying another sealer system.
                                    Applying another look or finish for your deck is simple with our wood deck resurfacing system,
                    which a few stages include cleaning, arrangement, and covering. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Stain or Painting Decks Section Ends Here */}
                {/* Finishing Options for Deck Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="detail-text">
                            <h3> FINISHING OPTIONS FOR DECKS </h3>
                            <h6 className="line1 m-b-20"> . </h6>
                            <p> There are numerous choices for the security of wooden decks. These incorporate oil based paints and
                            stains, acrylic and wax wrap up. Source energy deck restoration services have long stretched of
                            involvement, applying an assortment of deck coatings to accomplish various looks on various wood species.
                            Numerous organizations/companies worldwide produce items that will viably ensure wood decks in Illinois.
                            These items can accomplish a characteristic wood look or new impact that will supplement different
                regions of your home and outside spaces around your property. </p>
                            <p> Whenever we have finished the resurfacing of your decking, we will suggest a straightforward upkeep
                measure that will guarantee long haul insurance from the components. </p>
                        </div>
                        <div className="detail-grids">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/Hw1.JPEG XR" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="detail-image2">
                                        <img src="images/Hw2.JPEG XR" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Finishing Options for Deck Section Ends Here */}
                {/* Custom Pressure Treated Decks Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 bg-silver">
                    <div className="container">
                        <div className="detail-text m-b-40">
                            <h3> CUSTOM PRESSURE TREATED DECKS </h3>
                            <h6 className="line1 m-b-20"> . </h6>
                            <p style={{ maxWidth: '900px' }}> Critical factor treated decks are one of the top decisions for some property
                            owners who need a good extravagance wood look that is both tough and practical. Pressing treated wood is
                            flexible, simple to work with, can withstand Wheaton's hostile environment, and battle insects and pests.
              </p>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/custom-pressure-treated-decks1.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/custom-pressure-treated-decks2.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/custom-pressure-treated-decks3.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/custom-pressure-treated-decks4.JPEG XR" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Custom Pressure Treated Decks Section Ends Here */}
                {/* Pressure Treated Wood Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="row m-b-20">
                            <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> WHAT IS PRESSURE TREATED WOOD? </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p> Pressing treated wood is a mainstream outside building material that has been utilized for more
                                    than 40 years. The pressing factor treatment measure is applied to any wood, regularly softwood
                                    lumbers, to give them against maturing and inset repulsing properties that guarantee durable
                    solidness, insurance, and protection from decay. </p>
                                    <p> The wood is artificially treated in a unique vessel that utilizes critical factors and vacuum to
                                    enter the wood with additives in a treating arrangement (either water or oil). The additives are
                                    profoundly assimilated into the wood cells through this cycle, which gives the wood long haul
                                    resilience against regular components. Pressing treated wood can have 5 to multiple times the
                                    assistance life of untreated wood and can keep going for a very long time or more when introduced
                    appropriately. </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                                <div className="detail-image" style={{ marginTop: '20px' }}>
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="images/Hqq1.JPEG XR" />
                                            </div>
                                            <div className="item">
                                                <img src="images/Hqq2.JPEG XR" />
                                            </div>
                                            <div className="item">
                                                <img src="images/Hqq3.JPEG XR" />
                                            </div>
                                            <div className="item">
                                                <img src="images/Hqq4.JPEG XR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-30">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> THE ADVANTAGES OF USING PRESSURE TREATED WOOD FOR YOUR DECK </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-30">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/Hq1.JPEG XR" />
                                    <h3> Excellent Esthetic </h3>
                                    <p> The excellent normal appearance of the timber isn't undermined even though the wood is pressure
                                    treated. It implies you don't lose the normal wood look. Can stain critical factor treated decking
                    with an assortment of stains to unite your full vision for your open air living space. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/Hq2.JPEG XR" />
                                    <h3> Security/protection </h3>
                                    <p> Pressing factor treated wood protects your deck from bugs, micro organisms, and fungal decay. The
                                    additives protect your wood from the back to front, which causes the wood to withstand the impacts
                                    of each of the four seasons; from hefty snowfalls to summer showers, your critical factor treated
                                    deck can battle all the components. The wood's toughness shields it from being handily damaged,
                    imprinted, or harmed, which delays its life expectancy. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/Hq3.JPEG XR" />
                                    <h3> Cost Effectiveness </h3>
                                    <p> Pressing factor treated decking is quite possibly the most usually utilized deck materials since
                                    it is practical and financial plan agreeable in contrast with different alternatives like composite
                                    or cedar decks. There is a huge scope of evaluations accessible to look over because any wood can
                                    be pressure treated. Yet, even with a higher evaluation of wood, it very well may be undeniably
                                    more moderate than other extraordinary timbers like cedar, redwood, or elective alternatives like
                    vinyl and PVC. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Pressure Treated Wood Section Ends Here */}
                {/* Composite Decks Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 bg-silver">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-image" style={{ marginTop: '0px' }}>
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            {/* <div class="item active">
                              <img src="images/composite-deck-head1.jpg">
                           </div>*/}
                                            <div className="item active">
                                                <img src="images/composite-deck-head2.JPEG XR" />
                                            </div>
                                            {/*<div class="item">
                              <img src="images/composite-deck-head3.jpg">
                           </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> SOURCE ENERGY FAVORITE DECKING CHOICE: COMPOSITE DECKS </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p> Composite decking is rapidly turning into the head material for custom decks in Illinois .
                                    Homeowners pick composite decks for their long life expectancy, low support, high sturdiness, and
                                    the huge range of accessible plan alternatives. In case you're searching for an extravagance
                                    outdoor living space that sticks out, enhances your home, and is sensibly priced, composite decking
                    might be your top decision. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Composite Decks Section Ends Here */}
                {/* What is Composite Decking Section Starts Here */}
                <section className="pad-top-60 pad-bot-60">
                    <div className="container">
                        <div className="row m-b-20">
                            <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> WHAT IS COMPOSITE DECKING? </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p> Composite decking is produced using a mix of recycled wood and plastic, wood flour PVC, or wood
                                    filaments and polyethylene, and a coupling specialist. Combining these materials brings about a
                                    more grounded, thicker, and tough item than wood alone. Progression in composite decking materials
                                    has brought about a wide assortment of choices in the wood level to plastic. For property owners
                                    searching for a significantly more grounded alternative, there is covered composite decking that
                                    gives an extra layer of assurance under the material. It's a thin layer of PVC that is figured
                                    uniquely in contrast to the sheets. This outer coat is intended to give expanded protection from
                    blurring, scratches, stains, and water. </p>
                                    <p> Composite decking material doesn't contain any synthetic compounds or poisons, and it's normally
                                    made out of reused plastics and waste wood, making it an eco accommodating structure material. Most
                                    composite materials are intended to seem as though wood, so you'll see a wood grain or brush stroke
                                    design, which is an appealing option for individuals who like the appearance of wood yet don't care
                                    for sanding upkeep and painting that accompanies it. Composite decks are likewise shoeless
                                    agreeable, delicate to the touch, don't fragment, and can with stand the harsh climate, making them
                    ideal for Illinois shifting seasons. </p>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                                <div className="detail-image" style={{ marginTop: '40px' }}>
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="images/composite-decking4.JPEG XR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-30">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3> THE BENEFITS OF HAVING A COMPOSITE DECK </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-30">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/HLL1.JPEG XR" />
                                    <h3> Modern and Classy Look </h3>
                                    <p> Composite decking offers you an extravagance look, feel, and plan without the excessive sticker
                                    price. The plan choices accessible are broad; you can accomplish a good wood look without the
                                    support needed with a characteristic wood deck. There are adequate tones to choose from; regardless
                                    of whether you pick a monochromatic or multichromatic design, the outcomes are dazzling and
                    ageless. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/HLL2.JPEG XR" />
                                    <h3> High Performing </h3>
                                    <p> Composite decking is perhaps the most mainstream option than a wood deck since it requires a lot
                                    of lower upkeep and flaunts a more drawn out life expectancy. There is no yearly support required,
                                    no sanding, no staining, no fixing, no issue, which implies no drawn out upkeep costs. Composite
                                    decking is perhaps the toughest decking materials available today. It is decay, form, parasitic
                                    rot, and bug safe. You don't need to stress over parting, twisting, breaking, or contracting the
                                    materials. Composite likewise holds up to the brutal Wheaton climate conditions, which implies
                    insignificant warm development and compression and most extreme soundness. </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="advan-box">
                                    <img src="images/HLL3.JPEG XR" />
                                    <h3> Long Haul Value </h3>
                                    <p> Composite decking is mid range on the estimating scale, and keeping in mind that it is more costly
                                    than pressure treated decks, the estimation of your speculation over the life expectancy of your
                                    composite deck is far more noteworthy. Composite decking holds up after some time, and you will
                    appreciate the profit for your speculation for quite a long time. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* What is Composite Decking Section Ends Here */}
                {/* Experience Deck Restorators Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 deck-bg3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pull-right">
                                <div className="detail-image" style={{ marginTop: '0px' }}>
                                    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="images/HL1.JPEG XR" />
                                            </div>
                                            <div className="item">
                                                <img src="images/HL2.JPEG XR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                                <div className="detail-text">
                                    <h3 className="col-white"> WE'RE EXPERIENCED DECK RESTORATORS </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p className="col-white"> We have a consolidated 17 years of involvement to reestablish and restore decks
                                    in Wheaton's,its suburbs, and many tasks added to our repertoire. We're centered around quality
                                    craftsmanship, strength, and building you a stunning deck to invest your lawn energy in. Our
                                    certified staff is well educated about reclamation and primary rules, with the correct instruments
                    and gear to finish projects securely and effectively. <br /> We utilize the business's absolute
                    best items and help you get your fantasy deck assembled the correct way and on a sensible financial
                    plan. We'll regard your deck as though it were our own!
                  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Experience Deck Restorators Section Ends Here */}
                {/* Our Process Section Starts Here */}
                <section className="pad-bot-60 pad-top-60">
                    <div className="container">
                        <div className="detail-text m-b-40">
                            <h3> OUR PROCESS </h3>
                            <h6 className="line1 m-b-20"> . </h6>
                            <p> Source Energy's decks offer you top quality craftsmanship. With a red seal understudy woodworker on each
                            place of work, we can guarantee you professional work. Every single deck is refinished and repaired like
                it was our own. </p>
                            <p> When we come out to converge you, we evaluate the space and tune in to your fantasy space related to
                            your spending necessities. We will make a few recommendations dependent on our experience and your
                            necessities in light of these elements. We, at that point, attract up an arrangement to be evaluated and
                affirmed by you! </p>
                            <p> Each task is made with care from the beginning. It begins with a strong establishment. Regardless of
                            whether it's solid or screw heaps, we guarantee the deck sits on a sound base. Next comes the outlining,
                            where we guarantee each shaft and joist is nailed to meet and surpass the town construction regulation.
                            Finally, we add top sheets and railings, which are introduced with accuracy to give you a delightful
                completed item. We restore decks Illinois house owners are proud of! </p>
                            <p> We can likewise refinish, stain, paint, seal and redo excellently to make your deck professional and
                more tremendous. </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/CUSTOM PRESSURE TREATED DECKS 1.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/CUSTOM PRESSURE TREATED DECKS 2.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="renovate-image2">
                                    <img src="images/CUSTOM PRESSURE TREATED DECKS 3.JPEG XR" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Process Section Ends Here */}
                {/* Free Estimates Section Starts Here */}
                <section className="pad-bot-60 pad-top-60 bg-silver">
                    <div className="container">
                        <div className="row">
                            <div className="col-m-3 col-lg-3 col-sm-12 col-xs-12">
                                <div className="estimate-icon">
                                    <img src="images/estimate-icon.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-m-9 col-lg-9 col-sm-12 col-xs-12">
                                <div className="detail-text m-b-40">
                                    <h3> FREE ESTIMATES </h3>
                                    <h6 className="line1 m-b-20"> . </h6>
                                    <p>We're glad to converse with you about your vision and needs and set up a gauge that works for your
                                    financial plan. Our appraisals are 100% responsibility free, and we'll be completely
                                    straightforward about the thing you're paying for and how we work. We would be happy to help you
                    plan and restore your deck to make you feel amazed about your outdoor living space </p>
                                    <p> On the off chance that you'd prefer to get a thought of when we can begin on your deck and the
                                    amount you can anticipate that it should cost, it would be ideal if you don't hesitate to reach us
                    today. We'd love to get with you! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Free Estimates Section Ends Here */}
                {/* Footer Content Starts Here */}
                <section className="pad-bot-60 pad-top-60" style={{ background: '#252525' }}>
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                                    <div className="footer-col" style={{ marginTop: '10px' }}>
                                        <h3> Towns We Provide Our Deck Servises: </h3>
                                        <ul>
                                            <li> Downers Grove, Deck Restoration Services </li>
                                            <li> Darien, Deck Rstoration Services </li>
                                            <li> Western Springs, Deck Restoration Services </li>
                                            <li> Lagrange, Deck Restoration Services </li>
                                            <li> Glen Ellyn, Deck Restoration Services </li>
                                            <li> Wheaton, Deck Restoration Services </li>
                                            <li> Lemont, Deck Restoration Services </li>
                                            <li> Lombard, Deck Restoration Services </li>
                                            <li> Elmhurst, Deck Restoration Services </li>
                                            <li> Arlington Heights, Deck Restoration Services </li>
                                            <li> Naperville, Deck Restoration Services </li>
                                            <li> Hinsdale, Deck Restoration Services </li>
                                            <li> Palatine, Deck Restoration Services </li>
                                            <li> Mount Prospect, Deck Restoration Services</li>
                                            <li> Suburb of Chicago in </li>
                                            <li> Western Suburb of Chicago </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                                    <div className="footer-col">
                                        <h3> Deck Restoration Near me - Deck Restoration Services </h3>
                                        <p> Chicagolandand the Western Chicago suburbsDeck Restoration Services, Illinois Deck Refinishing&amp;
                                        Restoration NearMe, Deck Repair Services and Deck Staining Services. Call us Today, to find out
                                        how to plan your deck to suit yourself. If you need to repair thedeck, you’ll love our services!
                    </p>
                                        <p> Deck Restoration Near Me, Deck RefinishingServices, Deck Repair, Deck Staining, Pressure
                      Washing Services, Deck SealingServices,Deck CleaningServices, Deck Repair,Deck Lighting. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <div className="footer-col">
                                        <h3> Desk Restoration Services – Deck Restoration Near Me </h3>
                                        <p> For an extraordinary change to your bathroom desk, our expert workers will tune in to your
                                        thoughts and restore precisely the sort of work area you're searching for. Full Deck Inspection,
                                        Paint &amp; Stain Removal, Deck Cleaning, Carpentry Repair, Complete Wood Restoration, Color &amp; Stain
                                        Consultation, Refinishing with Paint or Stain your bathroom desk in Wheaton, IL and the Western
                      Chicago Suburbs </p>
                                        <p> Deck Restoration Near Me – Deck Restoration Services – Deck Refinishing Services – Deck Repair
                      Services – Deck Staining Services Serving Illinois &amp; Chicagoland. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Content Ends Here */}

                <BottomSlogan />
                <Footer />
            </div>
        )
    }

}
export default Home;
