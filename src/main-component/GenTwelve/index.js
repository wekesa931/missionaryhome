import React, { Fragment } from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Mission from '../../components/mission2'
import About from '../../components/about1'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer-senders'
import Scrollbar from '../../components/scrollbar'


const SendersFellowship = () => {
    return (
        <Fragment>
            <Header />
            <div className="wpo-breadcumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wpo-breadcumb-wrap">
                                <h2>Gen 12</h2>
                                <ul>
                                    <li><a href="/gen-twelve">Missionary Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <VedioCta/> */}
            <Mission subclass={'section-padding'} />
            <About />
            <CaseSlide />
            {/* <CounterSection/> */}
            {/* <TeamSection/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default SendersFellowship;
