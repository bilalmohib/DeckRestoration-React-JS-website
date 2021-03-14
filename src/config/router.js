import React from "react"
import { BrowserRouter as Router, Route  } from "react-router-dom";

import Home from '../Components/Home';
import ServicesPage from "../Components/ServicesPage";
import AboutUsPage from "../Components/AboutUsPage"; 
import GalleryPage from "../Components/GalleryPage"; 
import ContactUs from "../Components/ContactUsPage";
import BlogPage from "../Components/BlogPage";
import BlogDetails from "../Components/BlogDetails";
import BlogCategory from "../Components/BlogCategory";
import Admin from "../Components/Admin";

class AppRouter extends React.Component {
    render() {
        return (


            <Router>
                <Route exact path="/" component={Home} />
                 <Route exact path="/services" component={ServicesPage} />
                <Route exact path="/about" component={AboutUsPage} />
                <Route exact path="/gallery" component={GalleryPage} />
                <Route exact path="/contact" component={ContactUs} /> 
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/detail" component={BlogDetails} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/category" component={BlogCategory} />
                
            </Router>

        )
    }
}
export default AppRouter;