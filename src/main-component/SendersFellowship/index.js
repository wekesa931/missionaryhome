import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Mission from '../../components/Mission1'
import About from '../../components/about1'
import CaseSlide from '../../components/case'
import CounterSection from '../../components/counter'
import TeamSection from '../../components/team'
import Footer from '../../components/footer-senders'
import Scrollbar from '../../components/scrollbar'


const SendersFellowship =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Senders Fellowship'} info={'Raise resources and mobilize believers in the marketplace to take part in froniter missions.'}/> 
            {/* <VedioCta/> */}
            <Mission subclass={'section-padding'}/>
            <About/>
            <CaseSlide/>
            {/* <CounterSection/> */}
            {/* <TeamSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SendersFellowship;
