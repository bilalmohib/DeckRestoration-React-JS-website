import React, { useEffect, useState } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import BottomSlogan from "./BottomSlogan";

import { connect } from "react-redux";

import { get_Blog_all_data, setBlogCategory } from '.././store/action/index';


// import sh from "../UI/service-header.JPEG XR";

import firebase from '../firebase/index';

import { Link } from 'react-router-dom';
import '../Styling/BlogPage.css';

import BlogSubDiv from "./BlogSubDiv";

class BlogCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: '',
            data: this.props.user_blogs,
            fullData: this.props.user_blogs,
            categoryProps: "",
            loader: false
        }
    }



    componentDidMount = () => {
        let jobData = [];
 
        ///////////////////////////////////////////////////////////////////////////////
        firebase.database().ref(`Blog/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                //console.log(data.val())
                var BlogAllDataHere = data.val()
                var Keys = Object.keys(BlogAllDataHere);
                //console.log(Keys);
                // for (let i = 0; i < Keys.length; i++) {
                //     let k = Keys[i].toString();
                //     let Category = BlogAllDataHere[k].Category;
                //     //console.log("Idahr bhi dekh: " + Category);
                //     if (Category == cat) {
                //     jobData.push(data.val())
                // }
                jobData.push(data.val());
            })

            //console.log(jobData);
            this.setState({
                data: jobData,
                fullData: jobData,
                loader: true
            })

        })
        this.props.get_Blog_all_data();
    }


    componentDidUpdate = (prevProps) => {
        // compare props
        if (this.props.blog_category !== prevProps.blog_category) {
            console.log("The Props are asfsa : " + this.props.blog_category)
            this.setState({
                categoryProps: this.props.blog_category
            })
        }
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
        console.log("The Blog Category is : ", this.props.blog_category)
        console.log("firebase sales in blog category data is : ", this.state.data);
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
                                <div>

                                    {this.state.data.map((v, i) => {
                                        return <li key={i} style={{ listStyle: "none" }}>
                                            <div style={{ display: "block" }}>
                                                {/* {console.log("key==>",i)} */}
                                                {(v.Category == this.props.blog_category) ? (
                                                    <BlogSubDiv
                                                        index={i}
                                                        Title={v.Title}
                                                        Category={v.Category}
                                                        Para={v.Para}
                                                        Para1={v.Para1}
                                                        Para2={v.Para2}
                                                        Para3={v.Para3}
                                                        IMAGEURL={v.IMAGEURL}
                                                        IMAGEURL1={v.IMAGEURL1}
                                                        IMAGEURL2={v.IMAGEURL2}
                                                        time={v.time}
                                                    />
                                                ) : (
                                                    <div className="col-md-12">
                                                        <span></span>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    })}
                                </div>
                            ) : (
                                <div style={{ marginLeft: "40%" }}>
                                    <div className="loader"></div>
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
    blog_category: state.app.SETCATEGORYBLOG
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_Blog_all_data: () => dispatch(get_Blog_all_data()),
    setBlogCategory: (data) => dispatch(setBlogCategory(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogCategory);