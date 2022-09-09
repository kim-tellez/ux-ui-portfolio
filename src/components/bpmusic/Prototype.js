import React from "react";
import signin from "../img/bpm-signin.png";
import rewards1 from "../img/bpm-rewards1.png";
import notifications from "../img/bpm-notifications.png";
import upgrade1 from "../img/bpm-upgrade1.png";
import heart from "../img/bpm-heart.png";
import rewards2 from "../img/bpm-rewards2.png";
import upgrade2 from "../img/bpm-upgrade2.png";
import hifi from "../img/bpm-highfidelity.png";
import phone from "../img/bpm-phone.gif";


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

export default function Prototype() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Prototyping &amp; Testing</h1>
                <h2>Moderated, Remote Usability Test</h2>
                <p>At this stage I was ready to test the low-fidelity wireframes that I created during the ideation phase. Below, I highlight some of the major usability issues I found in this round of testing. Click on the links to access the <a href="https://docs.google.com/document/d/1JNknz3LQ64vKg1kxEv0yaZrf4EG-d3lDyHPhsZqZeSo/edit?usp=sharing" target="_blank" rel="noreferrer">Script</a> I used and the <a href="https://docs.google.com/document/d/13F91tCptjs8Ot0cjTbNRSvvy4YqL1JowCUj5XLkzYz8/edit?usp=sharing" target="_blank" rel="noreferrer">Full Report</a> of findings and recommendations.</p>
                <p className="pb-3">Swipe left and right to view slides. Click slides to enlarge.</p>
                <div className="bpm-signin">
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={signin}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Sign-in Flow" src={signin} /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={rewards1}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Rewards &amp; Heart Points Flow" src={rewards1} /></a>
                        </SwiperSlide>
                        <SwiperSlide><a target="_blank" rel="noreferrer" href={notifications}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="In-app Notifications Flow" src={notifications} /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={upgrade1}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Upgrade Flow" src={upgrade1} /></a>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <h3 className="pt-5">ALL REVISED SCREENS IN HIGH FIDELITY</h3>
                <a target="_blank" rel="noreferrer" href={hifi}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="BP Music high fidelity screens" src={hifi} /></a>

                <h2>Final Moderated, Remote Usability Test</h2>
                <p>This final round of testing was an opportunity to validate my design solutions to the usability issues that were uncovered in the previous round. While my designs solved some of the major issues, I uncovered new problems and further refined the final design based on user feedback. Click on the links to access the <a href="https://docs.google.com/document/d/1X51RNQOMd118lCWL-caodDvABsEu0ganufTNmIpzaiw/edit?usp=sharing" target="_blank" rel="noreferrer">Script</a> I used and the <a href="https://docs.google.com/document/d/1zhER4_v_91Rsvlh6W7xCzJ-qVc05bnxFHPVQ_cbHqy4/edit?usp=sharing" target="_blank" rel="noreferrer">Full Report.</a></p>
                <p className="pb-3">Swipe left and right to view slides. Click slides to enlarge.</p>
                <div className="bpm-signin">
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={heart}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Heart-Points Flow" src={heart} /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={rewards2}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Rewards Flow" src={rewards2} /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a target="_blank" rel="noreferrer" href={upgrade2}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Upgrade Flow" src={upgrade2} /></a>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <h2 className="pt-5">Final Prototype</h2>
                <p>Below you'll find a GIF showing how the final product is meant to be used. Click on the link to access the <a href="https://www.figma.com/proto/WEpG05MfDtxRz5Vbl3XiK2/BPMusic---Capstone-2?node-id=110%3A332&scaling=scale-down&page-id=110%3A311&starting-point-node-id=110%3A594" target="_blank" rel="noreferrer">Prototype.</a></p>
                <div className="d-flex justify-content-center pb-5">
                    <a href="https://www.figma.com/proto/WEpG05MfDtxRz5Vbl3XiK2/BPMusic---Capstone-2?node-id=110%3A332&scaling=scale-down&page-id=110%3A311&starting-point-node-id=110%3A594" target="_blank" rel="noreferrer" className="btn active button mt-3 pb-5 bpm-phone">
                        <img className="img-fluid pb-5" alt="Click for an Interactive Prototype" src={phone} /><br/>
                        <button>PROTOTYPE</button>
                    </a>
                </div>
                <div className="row pt-5">
                    <fieldset className="col-auto bpm-recs">
                        <legend><h3>RECOMMENDATIONS FOR FUTURE ITERATIONS</h3></legend>
                        <p>At this stage, I did not continue testing the design. However, I was able to validate previous design choices, and compile a list of priorities for future iterations:</p><br/>
                        <ul>
                            <li className="lia"><p>We need to test and/or gather user data on the new Upgrades screen copy and content</p></li>
                            <li className="lib"><p>We need to test and/or gather user data on the new Heart Points screen copy and content</p></li>
                            <li className="lic"><p>Once we have more data on how our users accrue heart points vis a vis PAI, we'll be able to determine if 1 heart point per 100 PAI is a good metric. At this stage, this needs more testing and user research.</p></li>
                        </ul>
                    </fieldset>
                </div>
            </div>
        </div>   
    );
}