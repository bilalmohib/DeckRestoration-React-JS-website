import React, { useState, useEffect } from "react"

import firebase from '../firebase/index';

import { storage } from '../firebase';

import ProgressBar from 'react-bootstrap/ProgressBar';

import Header from "./Header";

import { Helmet } from "react-helmet";

import "../Styling/Admin.css";
import Footer from "./Footer";

const Admin = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [status, setStatus] = useState(null);

    const [title, setTitle] = useState("");

    const [para, setPara] = useState("");
    const [para1, setPara1] = useState("");
    const [para2, setPara2] = useState("");
    const [para3, setPara3] = useState("");

    const [para1T, setPara1T] = useState("");
    const [para2T, setPara2T] = useState("");
    const [para3T, setPara3T] = useState("");

    const [category, setCategory] = useState("");

    const [ImageURL, setImageURL] = useState("https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton15-1024x683.jpg");
    const [ImageURL1, setImageURL1] = useState("https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton08-200x300.jpg");
    const [ImageURL2, setImageURL2] = useState("https://www.normandyremodeling.com/wp-content/uploads/2019/10/Auburn_12-lo-300x200.jpg");

    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);

    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);

    const setCategoryFunction = (e) => {
        let selectCategory = e.target.value
        alert(`${selectCategory} is the Category you selected`);
        setCategory(selectCategory);

    }



    const handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage(image);
        }
    }

    const handleChange1 = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage1(image);
        }
    }

    const handleChange2 = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage2(image);
        }
    }

    const handleUpload = (e) => {
        const img = image;
        if (img != null) {
            const uploadTask = storage.ref(`images/${img.name}`).put(img);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(img.name).getDownloadURL().then(url => {
                        setImageURL(url);
                    })
                });

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            alert(e.target.innerText);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        else {
            alert("Please select an Image to upload");
        }
    }

    const handleUpload1 = (e) => {
        const img = image1;
        if (img != null) {
            const uploadTask = storage.ref(`images/${img.name}`).put(img);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress1(progress);
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(img.name).getDownloadURL().then(url => {
                        setImageURL1(url);
                    })
                });

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            alert(e.target.innerText);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        else {
            alert("Please select a Image to upload");
        }
    }

    const handleUpload2 = (e) => {
        const img = image2;
        if (img != null) {
            const uploadTask = storage.ref(`images/${img.name}`).put(img);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress2(progress);
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(img.name).getDownloadURL().then(url => {
                        setImageURL2(url);
                    })
                });

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            alert(e.target.innerText);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        else {
            alert("Please select a Image to upload");
        }
    }

    const sendData = () => {
        ////////////////////////////To take the current date and time//////////////////////////////////
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        ////////////////////////////To take the current date and time//////////////////////////////////


        var key = firebase.database().ref('Blog/').push().key;

        let Data = {
            Title: title,
            Category: category,
            Para: para,
            Para1: para1,
            Para2: para2,
            Para3: para3,
            Para1T: para1T,
            Para2T: para2T,
            Para3T: para3T,
            IMAGEURL: ImageURL,
            IMAGEURL1: ImageURL1,
            IMAGEURL2: ImageURL2,
            Key: key,
            time: dateTime
        }


        //For storing all ads i.e to show at main page
        firebase.database().ref('Blog').push(Data)
            .then(alert("Your Blog is Submitted Successfully."))

        setTitle("");
        setCategory("");
        setPara("");
        setPara1("");
        setPara2("");
        setPara3("");
        setPara1T("");
        setPara2T("");
        setPara3T("");
        setImageURL("https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton15-1024x683.jpg");
        setImageURL1("https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton08-200x300.jpg");
        setImageURL2("https://www.normandyremodeling.com/wp-content/uploads/2019/10/Auburn_12-lo-300x200.jpg");
        setProgress(0);
        setProgress1(0);
        setProgress2(0);

    }

    const reset_password = () => {
        var auth = firebase.auth();
        var emailAddress = "contact@deckrestorationservices.com";
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // alert(`A password reset email has been sent to ${emailAddress}.`)
        }).catch(function (error) {
            // An error happened.
            alert(error)
            // return;
        });
        alert(`A password reset email has been sent to ${emailAddress}.`)
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // console.log("The user is logged in and data is: " + user);
                alert("Logged in successfully")
                window.location.reload();
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage)
            });
    }

    const sign_out = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            alert("Signed Out Successfully");
            window.location.reload();

        }).catch((error) => {
            // An error happened.
            console.log(error)
            alert(error);
        });

    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setStatus(true);
            }
            else {
                setStatus(false)
            }
        })
    }, [])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Deck Restoration Services – Admin Panel </title>
                <meta name="description" content="The page is intended for the use of admin of Deck Restoration Services" />
            </Helmet>
            <Header />
            <a href="tel:7736648791" className="btn phoneMobile">
                <i className="glyphicon glyphicon-earphone ico-phone"></i>
            </a>
            <br />
            {/* Service Banner Section Starts Here */}
            <section id="shb" className="service-header">
                <img src="images/service-header.JPEG XR" />
            </section>

            {(firebase.auth().currentUser == null) ? (
                <div>
                    <h1 className="text-center text-warning">Logged out</h1>

                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-success">Logged in</h1>
                    <br />
                    <button className="btn btn-danger" onClick={sign_out}>Sign Out</button>
                </div>
            )}

            {(status) ? (
                <div>
                    <div className="container admin-container">

                        <h1 className="text-inverse">Post An Article : -</h1>
                        <br />

                        <div>
                            <h3>Enter the Title of the blog : <span className="text-red">*</span></h3>
                            <input type="text" placeholder="Enter the title for the blog" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control title" aria-label="..." />
                        </div>

                        <br />

                        <h3>Select A Category <span className="text-red">*</span></h3>

                        <div className="input-group input-group-md category_select">

                            <span className="input-group-addon glyphicon glyphicon-search" id="sizing-addon2"></span>

                            <select style={{ fontSize: "15px", width: "200px" }} value={category}
                                onChange={(e) => setCategoryFunction(e)} className="form-control">
                                <option value="EXTERIOR PAINTING">EXTERIOR PAINTING</option>
                                <option value="DECK RESTORATION">DECK RESTORATION</option>
                                <option value="EXTERIOR CARPENTRY">EXTERIOR CARPENTRY</option>
                                <option value="POWER WASHING">POWER WASHING</option>
                            </select>
                        </div>
                        <br />

                        <div className="innerBlock">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <h3>Enter the first Row Details For the blog. <span className="text-red">*</span></h3>

                                        <textarea name="" cols="70" rows="10" className="form-control paraAdmin" placeholder="The first row paragraph which will be left to the first image." value={para} onChange={(e) => setPara(e.target.value)}></textarea>

                                        {/* Here the uploaded image will be here */}
                                        <div>
                                            <br />
                                            <ProgressBar animated now={progress} />

                                            <label className="form-label">Image 1</label>
                                            <input type="file" className="form-control" onChange={(e) => handleChange(e)} />
                                            <br />
                                            <button className="btn btn-primary uploadBtn" onClick={(e) => handleUpload(e)}>Upload</button>
                                            <br />
                                            <br />
                                            <div className="row">
                                                <div className="col-md-5 col-lg-5 col-sm-5 col-xs-5">
                                                    <img className="img-blog-details" title="This image will be relatively large on the top" src={ImageURL} width="400" />
                                                </div>
                                                <div className="col-md-7 col-lg-7 col-sm-7 col-xs-7">
                                                    <h4 className="ColorBloGText">{para}</h4>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        {/* Here the uploaded image will be here */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <br />
                        <hr />
                        <br />

                        <div className="innerBlock">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <h3>Enter the second Row Details For the blog. <span className="text-red">*</span></h3>

                                        <input type="text" value={para1T} onChange={(e) => setPara1T(e.target.value)} className="form-control SubRowsTitle" />
                                        <textarea name="" cols="70" rows="10" className="form-control paraAdmin" placeholder="The second row paragraph which will be right to the second image." value={para1} onChange={(e) => setPara1(e.target.value)}></textarea>

                                        {/* Here the uploaded image will be here */}
                                        <div>
                                            <br />
                                            <ProgressBar animated now={progress1} />
                                            <br />

                                            <label className="form-label">Image 2</label>
                                            <input type="file" className="form-control" onChange={(e) => handleChange1(e)} />
                                            <br />
                                            <button className="btn btn-primary uploadBtn" onClick={(e) => handleUpload1(e)}>Upload</button>
                                            <br />
                                            <br />
                                            <div className="row">
                                                <div className="col-md-5 col-lg-5 col-sm-5 col-xs-5">
                                                    <img className="img-blog-details" title="This image will be relatively small as it is 2nd on the right" src={ImageURL1} width="250" />
                                                </div>
                                                <div className="col-md-7 col-lg-7 col-sm-7 col-xs-7">
                                                    <h3 className="SubRowsTitle">{para1T}</h3>
                                                    <h4 className="ColorBloGText">{para1}</h4>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        {/* Here the uploaded image will be here */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <br />
                        <hr />
                        <br />

                        <div className="innerBlock">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                        <h3>Enter the third Row Details For the blog. <span className="text-red">*</span></h3>
                                        <input type="text" value={para2T} onChange={(e) => setPara2T(e.target.value)} className="form-control SubRowsTitle" />
                                        <textarea name="" cols="70" rows="10" className="form-control paraAdmin" placeholder="The third row paragraph which will be left to the third image." value={para2} onChange={(e) => setPara2(e.target.value)}></textarea>

                                        {/* Here the uploaded image will be here */}
                                        <div>
                                            <br />
                                            <ProgressBar animated now={progress2} />

                                            <br />

                                            <label className="form-label">Image 3</label>
                                            <input type="file" className="form-control" onChange={(e) => handleChange2(e)} />
                                            <br />
                                            <button className="btn btn-primary uploadBtn" onClick={(e) => handleUpload2(e)}>Upload</button>
                                            <br />
                                            <br />
                                            <div className="row">
                                                <div className="col-md-5 col-lg-5 col-sm-5 col-xs-5">
                                                    <img className="img-blog-details" title="This image will be relatively small as it is 2nd on the right" src={ImageURL2} width="250" />
                                                </div>
                                                <div className="col-md-7 col-lg-7 col-sm-7 col-xs-7">
                                                    <h3 className="SubRowsTitle">{para2T}</h3>
                                                    <h4 className="ColorBloGText">{para2}</h4>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                        </div>
                                        {/* Here the uploaded image will be here */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <br />
                        <hr />
                        <br />

                        <h3>Enter the paragraph text below of images i.e below top three paragraphs:- <p className="text-danger">Not Necessary</p></h3>
                        <input type="text" value={para3T} onChange={(e) => setPara3T(e.target.value)} className="form-control SubRowsTitle" />
                        <textarea name="" id="" value={para3} onChange={(text) => setPara3(text.target.value)} placeholder="This paragraph text will be the last text displayed on the blog.It will not contain any images on its left or right.Its upto you to right or not Its not mendatory.If you will leave it blank than nothing will be displayed on its place.Although it is recommended to right you thoughts as conclusion." className="form-control paraAdmin" cols="30" rows="10"></textarea>
                        <br />
                        <h3 className="SubRowsTitle">{para3T}</h3>
                        <h4 className="ColorBloGText">{para3}</h4>
                        <hr />
                        <br />

                        {(title == "" || category == "" || para == "" || para1 == "" || para2 == "" || para1T=="" || para2T=="" || ImageURL == "https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton15-1024x683.jpg" || ImageURL1 == "https://www.normandyremodeling.com/wp-content/uploads/2015/08/kensignton08-200x300.jpg" || ImageURL2 == "https://www.normandyremodeling.com/wp-content/uploads/2019/10/Auburn_12-lo-300x200.jpg") ? (
                            <div>
                                <h4 className="text-red">Please fill all the fields indicated as necessary with * sign to submit</h4>
                                <button disabled={true} className="btn btn-success btn-block">Submit</button>
                            </div>
                        ) : (
                            <div>
                                <button className="btn btn-success btn-block" onClick={sendData}>Submit</button>
                                <h4>You are ready to post the article.</h4>
                            </div>
                        )}

                        <br />
                        <div className="text-center">
                            <h1 style={{ fontWeight: "lighter" }}>You are successfully logged in</h1>
                            <button className="btn btn-danger" onClick={sign_out}>Sign Out</button>
                            <br />
                        </div>
                        <br />

                    </div>
                    <br />
                </div>
            ) : (
                <div>
                    <div>
                        <div className="text-center">
                            <img width="200px" src="https://deckrestorationservices.com/images/logo.JPEG XR" alt="Alum Tech" />
                            <br /> <br />
                            {/* <label className="form-label">Email Address (required)</label> <br/> */}
                            <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="form-control-lg adminInput" />
                            <br /><br />
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="form-control-lg adminInput" />
                            <br />
                            <br />
                            <a href="" onClick={reset_password}>Forgot Password</a>
                            <br />
                            <br />
                            <button className="btn btn-primary btn-lg" onClick={login}>Login</button>
                            <br />
                            <br />
                            <br />
                        </div>

                    </div>
                </div>
            )}


            <Footer />
        </div>
    )
}
export default Admin;