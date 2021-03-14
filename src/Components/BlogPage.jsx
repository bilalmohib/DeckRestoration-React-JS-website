import React, { useEffect, useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";

import { connect } from "react-redux";

import { get_Blog_all_data, setBlogCategory } from '.././store/action/index';

import firebase from '../firebase/index';

import { Link } from 'react-router-dom';
import '../Styling/BlogPage.css';

import BlogSubDiv from "./BlogSubDiv";

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: '',
            data: this.props.user_blogs,
            fullData: this.props.user_blogs,
            loader: true
        }
    }
    componentDidMount() {
        let jobData = [];
        //Taking data from job vacancy form
        firebase.database().ref(`Blog/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                jobData.push(data.val())
                // console.log(data.val())
            })

            //console.log(jobData);
            this.setState({
                data: jobData,
                fullData: jobData,
                loader: false
            })

        })
        this.props.get_Blog_all_data();
    }

    handleSearch = (text) => {
        this.setState({
            searchString: text.toUpperCase()
        });

        let searchWord = text.trim().toUpperCase();
        // console.log("yahan dekh=>,",searchWord);
        if (searchWord) {
            var tempArray = [];
            for (var x = 0; x < this.state.data.length; x++) {
                var paragraph = '' + this.state.data[x].Title.toUpperCase();
                var index = paragraph.indexOf(searchWord);
                if (index != -1) {
                    // console.log('Testing Log');
                    tempArray.push(this.state.data[x]);
                }
                else {
                    for (let y = 0; y < this.state.data[x].Title.length; y++) {
                        let paragraph = '' + this.state.data[x].Title[y].toUpperCase();
                        let index = paragraph.indexOf(searchWord);
                        //console.log('x is ==>',x);
                        //console.log('index is ==>',index);
                        if (index != -1) {
                            tempArray.push(this.state.data[x]);
                        }
                    }
                }
            }
            this.setState({
                data: tempArray
            })
        }
        else {
            tempArray = this.state.fullData;
        }

    }

    render() {
        console.log("firebase sales data", this.props.user_blogs);
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
                </section>
                {/* Service Banner Section Ends Here */}

                <div className="container">
                    <div className="row">
                        <h2 className="latestPosts">Latest Posts</h2>

                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            {(this.state.loader) ? (
                                <div style={{ marginLeft: "40%" }}>
                                    <div className="loader"></div>
                                </div>
                            ) : (
                                <div>
                                    {this.state.data.map((v, i) => {
                                        return <li key={i} style={{ listStyle: "none" }}>
                                            <div style={{ display: "block" }}>
                                                {/* {console.log("key==>",i)} */}

                                                <BlogSubDiv
                                                    index={i}
                                                    Title={v.Title}
                                                    Category={v.Category}
                                                    Para={v.Para}
                                                    Para1={v.Para1}
                                                    Para2={v.Para2}
                                                    Para3={v.Para3}
                                                    Para1T={v.Para1T}
                                                    Para2T={v.Para2T}
                                                    Para3T={v.Para3T}
                                                    IMAGEURL={v.IMAGEURL}
                                                    IMAGEURL1={v.IMAGEURL1}
                                                    IMAGEURL2={v.IMAGEURL2}
                                                    time={v.time}
                                                />

                                            </div>
                                        </li>
                                    })}
                                </div>
                            )}

                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control bSearch"
                                onChange={(e) => this.handleSearch(e.target.value)}
                                placeholder="Search"
                                onKeyDown={(e) => {
                                    if (e.keyCode === 8) {
                                        this.setState({
                                            data: this.state.fullData
                                        })
                                    }
                                }}
                            />
                            <br />
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

                <BottomSlogan />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    user_blogs: state.app.GET_SELL,
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_Blog_all_data: () => dispatch(get_Blog_all_data()),
    setBlogCategory: (data) => dispatch(setBlogCategory(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogPage);