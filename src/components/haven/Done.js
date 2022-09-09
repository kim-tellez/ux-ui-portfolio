import React from "react";
import bpm from "../img/bpm-header.png";
import {Link} from 'react-router-dom';

export default function Done() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Done here?</h1>
                <h3 className="pb-4">NEXT CASE STUDY</h3>
                <div className="container hm-card">
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex align-items-end bpm-header">
                            <Link to={"/ux-ui-portfolio/case-studies/bpmusic"}><img className="img-fluid" alt="BPMusic Logo and Prototype on Phones" src={bpm} /></Link>
                        </div>
                        <div className="col-12 col-lg-7 pl-4">
                            <h1 className="pt-2 pb-2">BPMusic</h1>
                            <h3 className="pb-3">MOBILE APP THAT GAMIFIES YOUR MUSIC EXPERIENCE</h3>
                            <p className="pb-2">How might we build community at the intersection of music, fitness, and charity?</p>
                            <p className="hm-items">UX Research | Interaction | Visual &amp; UI Design | Prototyping | User Testing</p>
                            <p className="d-flex justify-content-end pb-1 pr-2"><Link to={"/ux-ui-portfolio/case-studies/bpmusic"}>View case study</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );
}