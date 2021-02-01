import React from 'react'
import ms1 from '../../images/mission/home.png'
import ms2 from '../../images/mission/icon1.png'
import ms3 from '../../images/mission/location.jpg'
import ms4 from '../../images/mission/icon4.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Mission</span>
                            <h2>We Aim To Raise Sh 500,000 For The Establishment Of A Missionary Home.</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img width='60%' src={ms1} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Good House</h2>
                                    <p>A spacious 2 or 3 bedroom house enough to hold a large family</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Environment</h2>
                                    <p>A conducive and serene environment to facilitate rest and proper debriefing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img width='60%' src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Access</h2>
                                    <p>Good access to amenities like hospital and other crucial facilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Rejuvination</h2>
                                    <p>Wholesome renewal of the missionaries through best membercare practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;