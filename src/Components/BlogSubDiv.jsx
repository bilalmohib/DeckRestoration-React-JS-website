import React, { useEffect, useState } from 'react';

// import Header from "./Header";
// import Footer from "./Footer";

// import sh from "../UI/service-header.JPEG XR";


import { connect } from "react-redux"

import { setCurrentKey } from '../store/action/index'


import { Link, useHistory } from 'react-router-dom';
import '../Styling/BlogSubDiv.css';

function BlogSubDiv(props) {



    const history = useHistory();
    const handleRowClick = (e) => {
        props.setCurrentKey(props.index)
        history.push(`/${e}`);
        // alert(e.target.innerText)
    }

    useEffect(() => {

    })


    return (
        <div>

            <div className="container">
                <div onClick={() => handleRowClick('detail')}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.IMAGEURL} alt="" className="img-blog" />
                        </div>
                        <div className="col-md-8">
                            <h1 id="blog_list_title">{props.Title}</h1>

                            <h4 className="ColorBloGText">Posted on {props.time}</h4>

                            <h4 className="ColorBloGText specialText">{props.Para}
                            </h4>

                            <h4 className="ColorBloGText">
                                <a onClick={() => handleRowClick('detail')} style={{fontWeight:"normal"}}>more</a>
                            </h4>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setCurrentKey: (data) => dispatch(setCurrentKey(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogSubDiv);
