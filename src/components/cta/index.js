import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const CtaSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-cta-area ${props.ctaclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wpo-cta-text">
                            <h2>You Can Become Part Of The Project</h2>
                            <p>
                                Missionary Care has for a long time been overlooked 
                                yet it is a vital role in the missionary call given 
                                to us by our savior Jesus. We may not have been called
                                into active missionary work in the field but we have been
                                given the responsibility of holding the rope for those who
                                go through missionary care
                            </p>
                            <p><strong>Get Involved Today!</strong></p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now</Link>
                                <Link onClick={ClickHandler}to="/contact" className="theme-btn-s2">Join Us Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;