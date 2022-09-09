import React from "react";
import flows from "../img/rm-flows.png";
import sketches from "../img/rm-sketches.png";
import wireframes from "../img/rm-wireframes.png";
import round0 from "../img/rm-round0.png";
import round1 from "../img/rm-round1.png";
import round2 from "../img/rm-round2.png";
import round3 from "../img/rm-round3.png";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

export default function Ideation() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1>Early Ideations</h1>
                <p className="pt-4 pb-3">At this stage, I took my findings and began ideating. Using the user stories and personas, I created red route user flows for the coaching and reading experiences. Then, I used the Crazy 8s ideation technique to sketch possible solutions. With the support of my senior designer mentor, I brought my ideas together in low-fidelity wireframes that I used to test with users. </p>
                <a target="_blank" rel="noreferrer" href={flows}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Red Route User Flows" src={flows} /></a>

                <h2>Paper Sketches</h2>
                <a target="_blank" rel="noreferrer" href={sketches}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Collection of Paper Sketches" src={sketches} /></a>

                <h2>Low-Fidelity Wireframes</h2>
                <a target="_blank" rel="noreferrer" href={wireframes}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Collection of Low-Fidelity Wireframes" src={wireframes} /></a>

                <h2>Home Screen Design Challenge Slideshow</h2>
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
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={round0}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Personifying the AI Coach" src={round0} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={round1}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Personifying the AI Coach" src={round1} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={round2}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Personifying the AI Coach" src={round2} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={round3}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Personifying the AI Coach" src={round3} /></a></SwiperSlide>
                </Swiper>
            </div>
        </div>   
    );
}