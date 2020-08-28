import React from 'react';
import {DefaultNav} from '../components/Nav/Nav';
import {Header} from '../components/Header/Header';
import {Info} from '../components/Info/Info';
import {NoBorderCard} from '../components/Cards/NoBorderCard';
import {Footer} from '../components/Footer/Footer'

export const LandingPage = () => {

    return(
        <div>
            <DefaultNav/>
            <Header/>
            <Info/>
            <div className="section-c">
                <div className="container">
                    <NoBorderCard title="Learning Paths" content="Tired of searching around the web for the best way to learn a web3 technology quickly? Your search stops here"/>
                    <NoBorderCard title="360 Learning" content="We combine reading, videos and hands-on-labs to give you an all rounded experience right from our platform"/>
                    <NoBorderCard title="5+ Frameworks" content="We curate learning paths for some of the lesser known frameworks after hours of hunting"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}