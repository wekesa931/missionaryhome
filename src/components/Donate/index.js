import React from 'react'

import mpesa from '../../images/mpesa.png'
import pmt1 from '../../images/checkout/img-1.png'
import pmt2 from '../../images/checkout/img-2.png'
import pmt3 from '../../images/checkout/img-3.png'
import pmt4 from '../../images/checkout/img-4.png'

const Donate = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <div onSubmit={SubmitHandler} action="#">
                            <div className="wpo-donations-amount">
                                <img width='17%' src={mpesa} alt="mpesa-logo"/>
                                <span className='flex flex-baseline'><p>Number: &nbsp; &nbsp; </p><h2>+113271550</h2></span>
                                <h2>Or</h2>
                                <h2 style={{ marginBottom: '10px'}}>Donate a Household Item</h2>
                                <span className='flex flex-baseline'><p>call &nbsp; </p><h2>+113271550</h2> &nbsp;for Directions on donations</span>
                                <span className='flex flex-baseline'><h2>Want to make a pledge? &nbsp;</h2><a href="https://forms.gle/bKBz8pcF6EsqmLNA6">Make a pledge</a></span>
                                
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;