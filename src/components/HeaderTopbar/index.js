import React from 'react'
import {Link}  from 'react-router-dom'
import './style.css'

const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+113271550</li>
                                <li><i className="fi flaticon-envelope"></i> senders.fellowship@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                {/* <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li> */}
                                <li className='padding-none border-none'><Link className="theme-btn" to="/donate">Donate Now</Link></li>
                                <li className='ml-10 padding-none border-none'><a className="theme-btn blue-btn" href="https://forms.gle/VioWok2vGQeFfsWMA">Make a pledge</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;