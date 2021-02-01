import React from 'react'
import './style.css'

const PageTitle = (props) => {
    return(
        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><a href="/senders-fellowship">{props.info}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;