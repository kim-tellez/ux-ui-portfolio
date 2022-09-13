import React from "react";
import {Link} from 'react-router-dom';
import pbs from "../img/vv-pbs.png";
import kidoodle from "../img/vv-kidoodle.png";
import kidomi from "../img/vv-kidomi.png";
import happykids from "../img/vv-happykids.png";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

export default function Research() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Discovery Research</h1>
                <h2>Secondary Research</h2>
                <p>The original idea for Vauven was rooted in the founder's own experience, so I dedicated this part of the research phase to gather data about how other parents feel about their children's internet/media usage.</p>
                <p>Note: At the onset of this work, there was no distinction between Vauven (the start-up) and Haven Station (the app), so there is overlap between the research I conducted for both of these projects. <Link to={"/ux-ui-portfolio/case-studies/haven-station"}>Click here to learn more about my work with Haven Station.</Link></p>
                <div className="row pt-3 justify-content-between">
                    <div className="col-12 col-lg-4 pb-5">
                        <div className="d-flex flex-column">
                            <div className="vv-info-header pt-2 pb-2 container">
                                <span><b>Assumption #1</b><br/>
                                    Parents feel that popular kid's apps are unsafe.</span>
                            </div>
                            <div className="vv-info pt-2 container">
                                <p className="mb-0"><b>Findings</b></p>
                                One of the most popular apps used by kids is YouTube. A Pew Research Center Study showed:
                                    <ul>
                                        <li><b>80%</b> of parents say their child 11 or younger watches videos on YouTube</li>
                                        <li><b>73%</b> of parents are concerned about inappropriate content in videos</li>
                                        <li><b>68%</b> of parents are concerned about inappropriate content in ads</li>
                                        <li><b>65%</b> of parents are concerned about video recommendations</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pb-5">
                        <div className="d-flex flex-column">
                            <div className="vv-info-header pt-2 pb-2 container">
                                <span><b>Assumption #2</b><br/>
                                Parents want reassurance from kids apps.</span>
                            </div>
                            <div className="vv-info pt-2 container pb-lg-5">
                                <p className="mb-0"><b>Findings</b></p>
                                    A research study showed that more than 90% of parents believe it is their responsibility to protect children from inappropriate online content
                                    <ul className="pb-lg-5">
                                        <li>Only 38% believe that technology companies have “a lot” of responsibility in safeguarding children</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 pb-5">
                        <div className="d-flex flex-column">
                            <div className="vv-info-header pt-2 pb-2 container">
                                <span><b>Assumption #3</b><br/>
                                There aren't any child-safe options available.</span>
                            </div>
                            <div className="vv-info pt-2 pb-lg-4 container">
                                <p className="mb-0"><b>Findings</b></p>
                                The kidSAFE Seal Program is an independent safety certification service and seal-of-approval program designed exclusively for children-friendly websites and technologies, including online game sites, educational services, virtual worlds, social networks, mobile apps, tablet devices, connected toys, and other similar online and interactive services.
                                    <ul>
                                        <li>Sample products: Happy Kids TV, Kidoodle</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Competitive Research</h2>
                <p>When I started looking at potential Vauven competitors, I found that it was standard practice among competitors to have a website that showcases and markets their products. Vauven being a start-up, my hypothesis was that the benefits of a company website (in addition to an MVP app prototype) would be multi-fold: </p>
                <ul>
                    <li>Having a single source of truth for what Vauven is and what it's doing</li>
                    <li>Having a space to showcase and market Vauven products</li>
                    <li>Having a resource to use while pitching the idea to potential investors and potential customers</li>
                </ul>
                <p>At this point, I advised that the project be divided into two streams of work, 1) the Vauven website and 2) the MVP mobile app prototype, Haven Station. <Link to={"/ux-ui-portfolio/case-studies/haven-station"}>Click here to learn more about my work with Haven Station.</Link></p>
                <p>I then spent time analyzing competitor websites along metrics that were decided on with the founder. Below you'll find a set of slides that summarize my findings.</p>

                <h3>COMPETITIVE ANALYSIS</h3>
                <p>Swipe left and right to view slides. Click slides to enlarge.</p>
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
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={pbs}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="PBS Analysis" src={pbs} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={kidoodle}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Kidoodle Analysis" src={kidoodle} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={kidomi}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Kidomi Analysis" src={kidomi} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={happykids}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="HappyKids Analysis" src={happykids} /></a></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}