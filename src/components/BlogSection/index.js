import React from 'react'
import blog1 from '../../images/blog/img-22.jpg'
import blog2 from '../../images/blog/img-11.jpg'
import blog3 from '../../images/blog/img-33.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Blog</span>
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog1} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Nov 24, 2020</span>
                                <h2><Link onClick={ClickHandler} to="/">Missionary Care</Link></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog2} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Dec 02, 2020</span>
                                <h2><Link onClick={ClickHandler} to="/"> Serving As Senders</Link></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog3} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Jan 24, 2021</span>
                                <h2><Link onClick={ClickHandler} to="/">I'm A Missionary</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;