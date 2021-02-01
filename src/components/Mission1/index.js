import React from 'react'
import ms1 from '../../images/mission/home.png'
import ms2 from '../../images/money.jpg'
import ms3 from '../../images/logistic.jpg'
import ms4 from '../../images/care.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Mission</span>
                            <h2>Impacting Nations With The Gospel By Partnering With Missionaries.</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Vision</span>
                            <h2>To raise resources for Kingdom advancement and provide moral and prayer support to those who go.</h2>
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
                                    <h2>Misionary Care</h2>
                                    <p>Offering Wholesome care to the missionaries during their rest period.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-6">
                                    <img width='80%' src={ms3} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Logistic Support</h2>
                                    <p>Helping out with logistics support when a need arises.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-7">
                                    <img width='60%' src={ms2} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Financial Support</h2>
                                    <p>Mobilisation of funds and resources to support the missionaries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-8">
                                    <img width='60%' src={ms4} alt=""/>
                                </div>
                                <div className="wpo-mission-content">
                                    <h2>Debriefing</h2>
                                    <p>Taking time to listen to the missionaries and being involved in their lives.</p>
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