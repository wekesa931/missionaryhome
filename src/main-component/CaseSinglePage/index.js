import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import CaseSingle from '../../components/CaseSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CaseSinglePage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'House Project'} info={'We Aim To Raise Sh 500,000 For The Establishment Of A Missionary Home.'}/> 
            <CaseSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePage;
