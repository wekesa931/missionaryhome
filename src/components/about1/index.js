import React from 'react'
import abimg from '../../images/about4.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                <span>Who we are</span>
                                <h2>Senders Fellowship Kenya</h2>
                            </div>
                            <p>
                                We are a group of like-minded individuals who have joined 
                                to create synergy through our various skills, giftings and 
                                talents to see how best we can live out our calling of 
                                <strong>Missionary sending</strong> and <strong>Missionary care</strong>.</p>
                            <p style={{ fontSize: '14px' }}>
                                <strong><em>How, then, can they call on the one they have not believed in?And 
                                how can they believe in the one of whom they have not heard?And how
                                can they hear without someone preaching to them?And how can anyone 
                                preach unless they are sent?As it is written: “How beautiful are the 
                                feet of those who bring good news!”</em></strong>
                            </p><div className='flex flex-end'><p>- Romans 10:14 - 15</p></div>
                            <div className="btns flex-between">
                                <a href="/donate" className="theme-btn get-involved-btn" onClick={ClickHandler}>Join Us</a>
                                <a href="https://forms.gle/VioWok2vGQeFfsWMA" className="theme-btn get-involved-btn blue-btn">Be a Partner</a>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;