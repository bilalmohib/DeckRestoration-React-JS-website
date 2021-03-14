import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";
import { Helmet } from "react-helmet";

import '../Styling/Home.css';


function ServicesPage() {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Deck Restoration Services – Chicagoland Suburbs Deck Refinishing Near Me </title>
                <meta name="description" content="Deck Restoration Services Illinois company Deck Refinishing – Deck Repair Services, Deck Staining, Restoration Serving Chicago IL and Suburbs." />
            </Helmet>

            <Header />
            <a href="tel:7736648791" className="btn phoneMobile">
                <i className="glyphicon glyphicon-earphone ico-phone"></i>
            </a>

            {/* Service Banner Section Starts Here */}
            <section className="service-header">
                <img src="images/service-header.JPEG XR" />
            </section>
            {/* Service Banner Section Ends Here */}
            {/* Service Section 1 Starts Here */}
            <section className="pad-top-60 pad-bot-60" id="deck-cleaning-service">
                <div className="container">
                    <div className="row m-b-20">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> DECK CLEANING AND POWER WASHING SERVICES. WE SERVE ILLINOIS AND CHICAGOLAND AREA</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Power washing is extraordinary at eliminating surface soil rapidly. For a profound, dependable clean, there's nothing better for outside surfaces. Unfortunately, whenever done mistakenly, it can likewise rapidly gouge your surfaces, leaving irreparable harm to your home or deck. If you need a valid, profound clean with no danger of gouging, nothing beats Source Energy Deck Services </p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/deck-cleaning-and-power-washing.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <p> While business pressure washing hurriedly menaces surface earth away (abandoning damage simultaneously), Source Energy Deck Services makes a more fastidious 3 step approach. We start with a presoak, utilizing a delicate (yet powerful) froth to work even the steadiest earth and dark wood filaments out from any breaks or fissure. Next comes our particular pressing factor washing administration, which controls any coarseness and grime away. After the initial two stages, your surface will look all around great yet dissimilar to different organizations, and we don't stop there. For our last advance, we apply a defensive completion to help keep up your surfaces and save them much cleaner for more. </p>
                                <p> The consequence of our 3 venture measure is a more brilliant clean than any pressing factor washing organization can give. Source Energy Crew restore sand makes your deck look like the latest one!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> Here's an in depth look at each progression:  </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30 m-b-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box" style={{ minHeight: '220px' }}>
                                <h3> Presoak Foam </h3>
                                <p> Our selective biodegradable and harmless to the ecosystem froth stick and infiltrates, slackening where it counts earth and dark wood filaments. The foam lifts the released soil, carrying it to the surface, while likewise slaughtering mold and buildup without cruel chlorines. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box" style={{ minHeight: '220px' }}>
                                <h3> Power Clean</h3>
                                <p> Non harming pressure washes grime away and discharges dark wood filaments. Surfaces are reestablished to their unique allure without gouging or impacting ceaselessly great wood, and our force cleaning won't hurt your plants.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box" style={{ minHeight: '220px' }}>
                                <h3> Defensive Completion </h3>
                                <p> Uncommon polymers improve and drag out the common excellence of woods and broaden the existence of your surfaces. Our defensive completion battles climate harm by repulsing the components, including UV beams. It additionally seals pores to battle earth development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/make-your-deck-look-again1.JPEG XR" />
                                        </div>
                                        <div className="item">
                                            <img src="images/make-your-deck-look-again2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> MAKE YOUR DECK LOOK NEW AGAIN </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> An old canine will most likely be unable to learn new deceives, yet there's no explanation your old deck can't look pristine once more. After our 3 venture measure, a long time of coarseness and grime will be eliminated alongside any stained dim wood strands, uncovering glimmering, new looking wood under. Furthermore, deck pressure washing has different advantages other than style: by eliminating the shape, buildup, and earth and refixing your deck, you'll be shielding it from the components and adding exacting a very long time to your deck's life. It's an ideal opportunity to begin considering your deck's future: Call us today to get your free gauge for power washing your deck. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section 1 Ends Here */}
            {/* Service Section 2 Starts Here */}
            <section className="pad-top-60 pad-bot-60 bg-silver" id="deck-refinishing-service">
                <div className="container">
                    <div className="row m-b-20">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> DECK REFINISHING &amp; RESTORATION </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> A lovely deck can do a ton for the presence of your outside property. That is the explanation routine staining care can be a particularly good thought. Our deck staining company can prove useful for individuals who need to keep their current decks in excellent condition. It can improve the presence of hardwood decks altogether. It can likewise help the life expectancies of hardwood decks. Our top notch finishes are intended to improve wood appearance. They're intended to shield wood, as well. If you need to keep the dissatisfaction of unattractive wood distorting, disintegration, and rot under control, our company can get the job done.</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/deck-refinishing-and-restoration1.JPEG XR" />
                                        </div>
                                        <div className="item">
                                            <img src="images/deck-refinishing-and-restoration2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-b-20">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/how-we-proceed-painting-services.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> HOW WE PROCEED WITH DECK PAINTING SERVICES </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Regarding your home, the exact opposite thing that the vast majority consider regarding painting is the deck. This is because of the way that others would think that it's silly because the deck generally comprises level spaces.  In any case, at Source Energy Restoration Services InWheaton, we can do the work for you on the off chance that you wish. We can stain, seal or paint your deck, or we can doa mix of these projects for you. You need to call usto set up an appointment and be glad to work for youeven more than your expectation.
                  </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3>PAINTING VS. STAINING VS. SEALING   </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> There are three restoration services that we offer with regards to your deck. However, you may think that it's not easy to separate every one of them. It is the reason we have chosen to separate every one of them for your reference.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30 m-b-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src="images/painting1.JPEG XR" />
                                <h3> PAINTING </h3>
                                <p> When painting your deck, we will eliminate any flaws, for example, staining on a superficial level. In any case, it would not feature the regular tone and highlights of the wooden deck. Also, paint can likewise chip when the deck isn't appropriately painted or if you use paint of low quality. Actually, on the off chance of utilizing deck painting services, the deck would need undeniably less ongoing upkeep. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src="images/painting2.JPEG XR" />
                                <h3> STAINING</h3>
                                <p> When weare done with your deck, we will feature the wooden deck's regular highlights. It is a basic methodology that will likewise improve the plan and magnificence of your deck. The disadvantage to deck staining is that it will require continuous support. We're always ensured that our deck painting service does a thorough job while preparing the surface.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box">
                                <img src="images/painting3.JPEG XR" />
                                <h3> SEALING</h3>
                                <p> Sealing is a less difficult rendition of finishing since it simply permits the wood grains to be featured. In any case, you wouldhave to seal your deck in any event once every year. You can consolidate the deck sealing service with the deck staining service on the off chance you wish for your deck seal to last more. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/deck.JPEG XR" />
                                        </div>
                                        {/* <div class="item">
                              <img src="images/deck-inspection-2.jpg"> 
                           </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> DECK PAINTING PROCEDURE </h3>
                                <h3> Stage 1: DECK INSPECTION</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> At Source Energy Restoration Services , we don't simply begin the work without checking the surface's state that should be painted on. For this situation, we will assess the state of the deck before accomplishing some work. </p>
                                <p> Because of how your deck is presented to external components, our organization's delegate would have to check for mildews and molds. We need to ensure that the surface is ideal for painting and that no segment on your deck would require a fix. Our delegate would likewise furnish you with a report on our discoveries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20 pull-right">
                            <div className="detail-image" style={{ marginTop: '20px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/stage2-discussion2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> Stage 2: CLIENT DISCUSSION </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> After the deck investigation stage, we would now examine our venture's provisions with the customer. Since we would need to think about your financial plan before settling on a strategy, we would discuss your financial plan and planning worries before we begin.</p>
                                <p> In the wake of examining these things, we will give you the kind of paint that can suit your spending plan and furnish you with the best incentive. Additionally, we would get some information about the paint's shade that you wish to have painted on your deck.</p>
                                <p> When the entirety of this is settled, the time has come to discuss the agreement's last subtleties. We would keep you tuned in about the points of interest of all our costing and planning issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> Stage 3: DECK PAINTING  </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30 m-b-30">
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation1.JPEG XR" />
                                <h3> I. DECK PREPARATION</h3>
                                <p>Before we start the genuinepainting service, we should be certain that the work area is ideal. We will guarantee that there is no soil or oil present on the outside of the wooden deck. Besides, it is significant that the deck has been dried beforewe start any painting work. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation2.JPEG XR" />
                                <h3> II. PRIMER APPLICATION</h3>
                                <p> For the paint to last more, we need to apply a coat of primer. It will permit the paint to stick better. Besides, the primer likewise assists with a night out of the paint's utilization outside the deck. In the wake of applying the primer, we need to allow it to dry before continuing to the following stage.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation3.JPEG XR" />
                                <h3> III. PAINT APPLICATION</h3>
                                <p> It is currently an ideal opportunity to apply the paint shading that you pick. To guarantee that we accomplish the ideal paint tone, we would apply two layers of paint. This will likewise verify that the paint can keep going for a more extended timeframe. You don't need to stress the paint being excessively thick since we let the paint dry between coatings to guarantee even use of the paint. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation4.jpg" />
                                <h3> IV. FINISHING TOUCHES AND CLEANUP WORK </h3>
                                <p> In the wake of applying the paint, we would ensure that everywhere is covered. Additionally, we would likewise eliminate any defensive layer that we have utilized before the artistic creation system. Our specialists would likewise accomplish the cleanup work to be certain that you are getting your budget's worth. </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation5.JPEG XR" />
                                <h3> V. Customer INSPECTION </h3>
                                <p> In the wake of chipping away at our undertaking, we ensure that our customer is completely happy with our deck staining services work. It is the reason we permit the customer to assess our work before leaving the premises. If our customer is unsatisfied, we will not quit working until we have received our client's two thumbs up.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="advan-box advan-box2">
                                <img src="images/deck-preparation6.JPEG XR" />
                                <h3> VI. Client support GUARANTEE</h3>
                                <p> Since we believe our customer's positive reaction to being our actual resource, we expect to keep a decent standing. We do this by guaranteeing that we give total consumer loyalty to each venture we take on. Because of the way that Source Energy Deck Services has 17 years of involvement with the Deck Restorationindustry, we have attempted to procure our unwavering customers' trust. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20 pull-right">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/excellent-service-essential.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> EXCELLENT SERVICE IS ESSENTIAL</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Decks and porches are continually outside regardless. That is why it bodes well that they're so powerless against the common dangers of the components. If you need to shield your beautiful deck from the solid and forceful UV (ultraviolet) beams the sun radiates,staining service will improve things greatly. If you need to shield your deck from brutal breezes, storming heavily, and all the other things, the Source Energy deck staining service can likewise bring about the ideal result. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/how-our-service-benefit1.JPEG XR" />
                                        </div>
                                        <div className="item">
                                            <img src="images/how-our-service-benefit2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> HOW OUR SERVICE CAN BENEFIT YOU </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Source Energy deck restoration service is the exemplification of polished methodology. Our crew members are talented staining devotees who have broad experience. We're knowledgeable in the entirety of the most dependable, viable, and safe staining strategies out there. We utilize the entirety of the most trustworthy and excellent staining equations and apparatuses available also. Our defensive completions are everything without exception you might potentially require. A deck that looks revived and all around great again can be a genuine delight. It can better your home's check allure and property estimation impressively. On the off opportunity that you need to one day put your home available to be purchased possibly, an alluring and around kept up deck can prove to be useful. A solid and appealing deck can likewise be stupendous for engaging purposes. If you like to have outside gatherings with companions, neighbors, and relatives throughout the late spring, a solid, tough and perfect deck can go far. Who needs to invest energy on a deck that appears to be frail? Who needs to invest energy in a deck that is brimming with staining and spoiling? </p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 m-t-20 pull-right">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/offer-exceptional-service.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 m-t-20">
                            <div className="detail-text">
                                <h3> WE ALSO OFFER EXCEPTIONAL POWER WASHING SERVICE </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Staining is only one of our numerous subject matters. We additionally offer power washing services to our clients. Force washing can give the outside of your home a flawless, perfect, and clean appearance. It can improve wellbeing, as well. That is because dirty set chimes can add to the rise of buildup and form the same. If you need your outdoor space to look more professional and feel inviting, immaculate and agreeable consistently, our power washing service is the arrangement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-m-4 col-lg-4 col-sm-12 col-xs-12">
                            <div className="estimate-icon">
                                <img src="images/contact-company.JPEG XR" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="col-m-8 col-lg-8 col-sm-12 col-xs-12">
                            <div className="detail-text m-b-40">
                                <h3> CONTACT OUR COMPANY TODAY</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> If you need brilliant staining and power washing service, it's an ideal opportunity to connect with our neighborhood firm.Our painters are dependable, productive, and thorough too.</p>
                            </div>
                            <div className="email-form email-form2">
                                <form method="post" id="info_form" autoComplete="off">
                                    <div className="row">
                                        <div className="col-md-12  m-b-5">
                                            <p className="email-head">Get a FREE Quote</p>
                                        </div>
                                        <div className="col-md-6 col-xs-12 m-b-5">
                                            <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6 col-xs-12 m-b-5">
                                            <input type="text" placeholder="Your Email" className="form-control" name="email" />
                                        </div>
                                        <div className="col-md-6 col-xs-12 m-b-5">
                                            <input type="text" placeholder="Your Phone" className="form-control" name="phone" />
                                        </div>
                                        <div className="col-md-6 col-xs-12 m-b-5">
                                            <textarea placeholder="Your Message" name="address" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12   m-b-5">
                                            <input type="submit" className="get-quote-but" name="submit" />
                                            <span id="error_message" className="text-danger" />
                                            <span id="success_message" className="text-success" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 hide message">
                                        <div className="form-field2 alert alert-success">
                                            <strong>Success!</strong> Your Form has been submit.
                      </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section 2 Ends Here */}
            {/* Service Section 3 Starts Here */}
            <section className="pad-top-60 pad-bot-60" id="deck-repair-service">
                <div className="container">
                    <div className="row m-b-20">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> DECK REPAIR </h3>
                                <h3> Would it be advisable for me to Have a Deck Repaired?</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> The extraordinary thing about decks is how they can increase the value of your home. A professional deck repair will supplement your yard's arranging and add more area to appreciate your property. Another deck is superb for those warm nights when your loved ones need to appreciate the outside. That is why it's crucial to save your deck's nature, and employing a specialist from Source Energy deck repair service is the ideal method to do it.</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/deck-maintain1.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> DECK REPAIRS AND DECK MAINTENANCE SERVICES </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> At the point when your yard's development is starting to lose its foundation support, a specialist investigation is what you need. We'll inform you of the issues regarding deck fixes and encourage the ideal choice to fix them. As a capable property holder, fixing the strength of your deck is basic for utilizing it. When your deck is in helpless structure, the Source Energy deck repair service will have the option to fix it. Our talented craftspeople have the aptitude expected to deal with both underlying and corrective issues, furnishing you with genuine feelings of serenity. </p>
                                <p> When your deck work is bigger and more included, we give an all out venture the executives cycle that our rivals don't offer. We stay in contact with our clients during their deck project, ensuring they stay refreshed on all the vital subtleties and how their work is going. With our particular purpose of reach, you reliably realize how to stay in contact about your deck fix or establishment situation.</p>
                                <p> When you are looking for cost accommodating, reliable administrations, and effective correspondence lines,Source Energy deck repair service is your top choice. We know how significant your property is, which is why we approach each deck resurfacing project with the best meticulousness and exactness. To ensure that we give solid work, each project worker with our deck repair service has the best devices available. The most elevated preparing the business has to bring to the table.</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail-grids">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="detail-image2">
                                    <img src="images/deck-maintain2.JPEG XR" />
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                <div className="detail-image2">
                                    <img src="images/deck-maintain3.JPEG XR" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-m-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="double-list2">
                                <h3> Tasks We Specialize In:</h3>
                                <ul>
                                    <li>  Deck restoration </li>
                                    <li>  Deck refinishing </li>
                                    <li>  Deck repair </li>
                                    <li>  Deck staining services </li>
                                    <li> Rotten wood replacements </li>
                                    <li>  Deck/porch painting </li>
                                    <li>  Lumber work, Wood Sanding, etc. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-m-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="estimate-icon m-t-30">
                                <img src="images/compliment-quote.JPEG XR" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="col-m-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text m-b-40 ">
                                <h3> CALL US TODAY FOR A COMPLIMENTARY QUOTE</h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Alongside our devotion to brilliant work, our involvement in the board's task separates us from our rivals. As opposed to narrowing our thoughtfulness regarding one restoration style, we offer a full restoration approach that reviews your venture from each point. Everything begins with a whole study of the work to be executed, trailed by standard advancement reports. At Source Energy Deck Restoration Services, we go all out to ensure you are altogether content with our work. In case you're prepared to eliminate deck, establishment, or restoring from your home improvement list, contact Source Energy deck restoration in Illinois and get your free estimate today. We serve Chicago and suburbs in Illinois.. We serve Wheaton, and western suburbs of Chicago, in Illinois. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section 3 Ends Here */}
            {/* Service Section 4 Starts Here */}
            <section className="pad-top-60 pad-bot-60 bg-silver" id="exterior-service">
                <div className="container">
                    <div className="row m-b-20">
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <h3> EXTERIOR CARPENTRY </h3>
                                <h6 className="line1 m-b-20"> . </h6>
                                <p> Who doesn't prefer to appreciate some natural air in their patio? As a part of our administrations, we offer outside work around your home. At Source Energy's carpentry services, we do everything: Deck, porch rebuild and repair, column installation, railing replacement, stairways, doors, and many othercustom outside work.</p>
                                <p> We work with the best materials in the business for your outside projects to give you a dependable and quality final result. The most usually utilized items are outside pressure treated, cedar, pine, PVC, and composite. In the most recent decade, outside pressure treatment has demonstrated its toughness and unbeaten adaptability regarding interesting formats, plans, and shapes for your outside undertaking. It is truly simple to work with, and it very well may be shower painted in any tone to accomplish the end vision that you have at the top of the priority list.</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="detail-image" style={{ marginTop: '0px' }}>
                                <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval={3500}>
                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img src="images/exterior-1.JPEG XR" />
                                        </div>
                                        <div className="item">
                                            <img src="images/exterior-2.JPEG XR" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-m-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="double-list2">
                                <h3> Why Us? </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-m-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="double-list3">
                                <h3> EXTERIOR PAINTING </h3>
                                <ul className="list-bullet">
                                    <h5> Commercial </h5>
                                    <li> <b> . </b>  Commercial Buildings </li>
                                    <li> <b> . </b> Barns </li>
                                    <li> <b> . </b> Etc. </li>
                                </ul>
                                <ul className="list-bullet">
                                    <h5> Residential </h5>
                                    <li> <b> . </b> Houses </li>
                                    <li> <b> . </b> Decks/Porches </li>
                                    <li> <b> . </b> Etc. </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-m-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="double-list3">
                                <h3> DECK RESTORATION SERVICES: </h3>
                                <ul className="list-bullet">
                                    <h5> Lumber work </h5>
                                    <li> <b> . </b>  Rotten wood replacements </li>
                                    <li> <b> . </b> Deck/porch refinishing: staining, painting, sealing </li>
                                    <li> <b> . </b> Wood Sanding </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-m-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="double-list3">
                                <h3> POWER WASHING SERVICES </h3>
                                <ul className="list-bullet">
                                    <h5> Residential </h5>
                                    <li> <b> . </b>  Wood Decks</li>
                                    <li> <b> . </b> Fences </li>
                                    <li> <b> . </b> Patio Covers </li>
                                    <li> <b> . </b> Block Walls </li>
                                    <li> <b> . </b> Barns / Horse Stalls </li>
                                    <li> <b> . </b> Gazebos </li>
                                    <li> <b> . </b> Patio Furniture </li>
                                    <li> <b> . </b> Commercial </li>
                                </ul>
                                <ul className="list-bullet">
                                    <h5> Walkways &amp; Service Areas </h5>
                                    <li> <b> . </b> Building Exteriors </li>
                                    <li> <b> . </b> Dumpster Areas </li>
                                    <li> <b> . </b> Parking Lots </li>
                                    <li> <b> . </b> Drive Thru Areas </li>
                                    <li> <b> . </b> Loading Docks </li>
                                    <li> <b> . </b> Service Stations </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-m-6 col-lg-6 col-sm-12 col-xs-12">
                            <div className="double-list3">
                                <h3> EXTERIOR CARPENTRY </h3>
                                <ul className="list-bullet">
                                    <li> <b> . </b>  Vinyl Siding </li>
                                    <li> <b> . </b> PVC Trim </li>
                                    <li> <b> . </b> Windows &amp; Skylights </li>
                                    <li> <b> . </b> Clapboard Siding </li>
                                    <li> <b> . </b> Cedar Siding </li>
                                    <li> <b> . </b> Doors </li>
                                </ul>
                                <ul className="list-bullet">
                                    <li> <b> . </b> Decks </li>
                                    <li> <b> . </b> Stairways </li>
                                    <li> <b> . </b> Porches </li>
                                    <li> <b> . </b> Sheds </li>
                                    <li> <b> . </b> Roofing </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row m-t-30">
                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <div className="detail-text">
                                <p> Our project workers have the gear important to execute all carpentry work up to code. We realize your time is significant, so we show up quickly and work productively until the venture is finished.
                                Our staff at Source Energy achieve your special errand. We will probably get your necessities together to date carpentry strategies. Your venture will be overseen by an accomplished craftsman of our group that cooperates. We see precisely how to unite your cravings with the absolute best carpentry strategies.
                                We are glad to be your all inclusive resource for a wide range of outside carpentry occupations. We give upkeep and redesign benefits just as the establishment of preassembled units. We'll put forth a valiant effort to join your input at all levels of your carpentry project, coming full circle in your total happiness.
                                Contact Our Deck Restoration Services .
                                Our expert staff is primarily concerned with customer satisfaction while offering the most exceptional carpentry services around. Source Energy has the most qualified carpenters in the western suburbs area for every home improvement job.
                    Want to learn more about Source Energy's carpentry services? Then stretch out to Source Energy's experts today. Our expert carpenters would be more than happy to arrange a free appointment for you to figure out the costs of your outermost or home carpentry job. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Section 4 Ends Here */}
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
                                        <li> Elmhurst, Deck Restoration Services</li>
                                        <li> Arlington Heights, Deck Restoration Services </li>
                                        <li> Naperville, Deck Restoration Services </li>
                                        <li> Hinsdale, Deck Restoration Services </li>
                                        <li> Palatine, Deck Restoration Services </li>
                                        <li>  Mount Prospect, Deck Restoration Services</li>
                                        <li> Suburb of Chicago in</li>
                                        <li> Western Suburb of Chicago </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                                <div className="footer-col">
                                    <h3> Deck Restoration Near me - Deck Restoration Services </h3>
                                    <p> Chicagolandand the Western Chicago suburbs Deck Restoration Services, Illinois Deck Refinishing &amp; Restoration NearMe, Deck Repair Services and Deck Staining Services. Call us Today, to find out how to plan your deck to suit yourself. If you need to repair the deck, you’ll love our services! </p>
                                    <p> Deck Restoration Near Me, Deck RefinishingServices, Deck Repair, Deck Staining, Pressure Washing Services, Deck Sealing Services,Deck CleaningServices, Deck Repair,Deck Lighting. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="footer-col">
                                    <h3> Desk Restoration Services – Deck Restoration Near Me </h3>
                                    <p> For an extraordinary change to your bathroom desk, our expert workers will tune in to your thoughts and restore precisely the sort of work area you're searching for. Full Deck Inspection, Paint &amp; Stain Removal, Deck Cleaning, Carpentry Repair, Complete Wood Restoration, Color &amp; Stain Consultation, Refinishing with Paint or Stain your bathroom desk in Wheaton, IL and the Western Chicago Suburbs</p>
                                    <p> Deck Restoration Near Me – Deck Restoration Services – Deck Refinishing Services – Deck Repair Services – Deck Staining Services Serving Illinois &amp; Chicagoland. </p>
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
export default ServicesPage;
