import React from 'react'
import Logo from '../../images/logo-main1.png'
import {Link}  from 'react-router-dom'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '../../images/shop/mini-cart/img-1.jpg'
import min2 from '../../images/shop/mini-cart/img-2.jpg'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header header-style-3">
        <HeaderTopbar/>
        <div className="container">
            <div className="header-content">
            <div className="row flex flex-between">
                <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="logo">
                        <Link to="/home" title=""><img src={Logo} alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-8 d-lg-block d-none">
                    <nav>
                        <ul>
                            <li><Link className="active" to="/home" title="">Home</Link></li>
                            <li><Link to="/senders-fellowship" title="">Senders Fellowship</Link></li>
                            <li><Link to="/gen-twelve" title="">Gen 12 Kenya</Link></li>
                            {/* <li><Link to="/case-single" title="">House project</Link></li> */}
                            <li><Link to="/contact" title="">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2 col-sm-2 col-2">
                    <MobileMenu/>
                </div>
            </div>
               
                <div className="clearfix"></div>
            </div>
            
        </div>
    </div>
    )
}

export default Header;