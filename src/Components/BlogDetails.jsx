import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";

import { connect } from "react-redux"

import { setBlogCategory } from '.././store/action/index';

import { Link } from "react-router-dom";

import '../Styling/BlogDetails.css';
import '../Styling/BlogPage.css';

class BlogDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0
        }
    }

    componentDidMount = () => {
        this.setState({
            key: this.props.SET_KEY
        })
    }


    render() {
        console.log("The Current Key of Blog Details Array is: ", this.state.key);
        return (
            <div>
                <Header />

                <a href="tel:7736648791" className="btn phoneMobile">
                    <i className="glyphicon glyphicon-earphone ico-phone"></i>
                </a>

                {/* Service Banner Section Starts Here */}
                <section className="service-header">
                    <img src="images/service-header.JPEG XR" />
                    <br />
                    <br />
                    <br />
                </section>
                {/* Service Banner Section Ends Here */}

                <div className="container">
                    <div className="row">
                        <h4>&ensp; &ensp; <Link to="/">Home</Link> » <Link to="/blog">Blog</Link> » {this.props.user_blogs[this.state.key].Category} » {this.props.user_blogs[this.state.key].Title}</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                <h1 className="title-blog-details">{this.props.user_blogs[this.state.key].Title}</h1>
                                                <h3>Posted on {this.props.user_blogs[this.state.key].time}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="" className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                        <img className="img-blog-details" src={this.props.user_blogs[this.state.key].IMAGEURL} alt="" />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                        <div className="text-blog">{this.props.user_blogs[this.state.key].Para}</div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                                        <img className="img-2" src={this.props.user_blogs[this.state.key].IMAGEURL1} alt="" />
                                    </div>
                                    <div className="col-md-8 col-lg-8 col-sm-8 col-xs-12">
                                        <h3 className="SubRowsTitle">{this.props.user_blogs[this.state.key].Para1T}</h3>
                                        <div className="text-blog">{this.props.user_blogs[this.state.key].Para1}</div>
                                    </div>
                                </div>
                                <br />
                                <br />

                                <div className="row">
                                    <div className="col-md-8 col-lg-8 col-sm-8 col-xs-12">
                                        <h3 className="SubRowsTitle">{this.props.user_blogs[this.state.key].Para2T}</h3>
                                        <div className="text-blog">{this.props.user_blogs[this.state.key].Para2}</div>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                                        <img className="img-2" src={this.props.user_blogs[this.state.key].IMAGEURL2} alt="" />
                                    </div>
                                </div>

                                <br />


                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <h3 className="SubRowsTitle">{this.props.user_blogs[this.state.key].Para3T}</h3>
                                        <div className="text-blog">{this.props.user_blogs[this.state.key].Para3}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Categories</h2>
                            <ul>
                                <li><h4 onClick={() => this.props.setBlogCategory("EXTERIOR PAINTING")}><Link to="/category">EXTERIOR PAINTING</Link></h4></li>
                                <li><h4><Link onClick={() => this.props.setBlogCategory("DECK RESTORATION")} to="/category">DECK RESTORATION</Link></h4></li>
                                <li><h4><Link onClick={() => this.props.setBlogCategory("EXTERIOR CARPENTRY")} to="/category">EXTERIOR CARPENTRY</Link></h4></li>
                                <li><h4><Link onClick={() => this.props.setBlogCategory("POWER WASHING")} to="/category">POWER WASHING</Link></h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />

                <br />
                <BottomSlogan />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
    user_blogs: state.app.GET_SELL
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setBlogCategory: (data) => dispatch(setBlogCategory(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogDetails);