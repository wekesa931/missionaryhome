import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-2.png'
import Newsletter from '../Newsletter'
import n1 from '../../images/footer/img-1.jpg'
import n2 from '../../images/footer/img-2.jpg'
import './style.css'

const Footer = (props) => {

    return (
        <footer className="wpo-site-footer">
            <section className="wpo-news-letter-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
                            <div className="wpo-newsletter">
                                <h3>Want to be part of us?</h3>
                                <div className="flex flex-around wpo-newsletter-form">
                                    <a style={{ width: '40%'}} href="/contact" className="theme-btn get-involved-btn">Join Us</a>
                                    <a style={{ width: '40%', border: '1px solid white'}} href="/contact" className="theme-btn get-involved-btn blue-btn">Be a Partner</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; Senders Fellowship. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;