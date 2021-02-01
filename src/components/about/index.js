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
                                <span>Call for partnership</span>
                                <h2>Wan't to get involved?</h2>
                            </div>
                            <p>One day Elisha went to Shunem. And a well-to-do woman was there, who urged him to stay for a meal. 
                                So whenever he came by, he stopped there to eat. She said to her husband, “I know that this 
                                man who often comes our way is a holy man of God. 
                                <strong>Let’s make a small room on the roof and 
                                put in it a bed and a table, a chair and a lamp for him. Then he can stay there whenever he comes to us</strong>.”
                            </p>
                            <p>In this fund drive we target to raise <strong>Ksh. 507,000</strong> to rent and fully furnish a 2 bedroom apartment inclusive of 2 months rent and deposit.</p>
                            <p>The fund drive will be running from December 2020 to March 2021 with a tea party on <strong>7th March 2021.</strong></p>
                            <p>You are welcome to give <strong>cash donations</strong> or give a <strong>household item.</strong></p>
                            <div className="btns flex-between">
                                <a href="/donate" className="theme-btn get-involved-btn" onClick={ClickHandler}>Donate Now</a>
                                <a href="https://forms.gle/VioWok2vGQeFfsWMA" className="theme-btn get-involved-btn blue-btn">Make a pledge</a>
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