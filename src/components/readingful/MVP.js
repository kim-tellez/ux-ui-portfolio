import React from "react";
import persona1 from "../img/rm-persona1.png";
import persona2 from "../img/rm-persona2.png";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';

export default function MVP() {
    return (
        <div className="container-fluid">
            <div className="container">
                <h2>User Personas</h2>
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
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={persona1}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Persona 1, Jackie &amp; Jaime!" src={persona1} /></a></SwiperSlide>
                    <SwiperSlide><a target="_blank" rel="noreferrer" href={persona2}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Persona 2, Suzanne &amp; Tena!" src={persona2} /></a></SwiperSlide>
                </Swiper>

                <h2>Actionable Insights</h2>
                <div className="row d-flex justify-content-center pt-2 pl-2">
                    <fieldset className="col-auto col-md-6 rm-insights">
                        <legend><h3>INSIGHTS</h3></legend>
                        <ul>
                            <li><p>Parents are very busy, and often find it difficult to feel present during times spent with their children. They find themselves defaulting to turning on the TV during free time.</p></li>
                            <li><p>Parents tend to categorize activities as 'stressful', 'fun', and 'relaxing'. Because reading is seen as school-related, it isn't something that parents turn to when looking to do something 'fun' or 'relaxing' with their kids.</p></li>
                        </ul>
                    </fieldset>
                    <div className="col-1 pb-5"></div>
                    <fieldset className="col-auto col-md-5 rm-hmw">
                        <legend><h3>HOW MIGHT WE?</h3></legend>
                        <ul>
                            <li><p>How might we make it easier for parents to be intentional about fitting reading with their children into their busy days?</p></li>
                            <li><p>How might we reframe reading as something beyond just a school activity?</p></li>
                        </ul>
                    </fieldset>
                </div>

            </div>
        </div>   
    );
}