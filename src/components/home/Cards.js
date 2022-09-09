import React from "react";
import rm from "../img/rm-header.png";
import bpm from "../img/bpm-header.png";
import vv from "../img/vv-header.png";
import hs from "../img/hs-header.png";
import {Link} from 'react-router-dom';


export default function Cards() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h2>Case Studies</h2><br/>
                <div className="container hm-card">
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex align-items-end vv-header">
                            <Link to={"/ux-ui-portfolio/case-studies/vauven"}><img className="img-fluid" alt="Vauven Logo and Website on a Laptop" src={vv} /></Link>
                        </div>
                        <div className="col-12 col-lg-7 pl-4">
                            <h1 className="pt-2 pb-2">Vauven</h1>
                            <h3 className="pb-3">START-UP COMPANY WEBSITE &amp; BRAND DESIGN</h3>
                            <p className="pb-2">How might we showcase company products while building a brand that inspires trust?</p>
                            <p className="hm-items">UX Research | Information Architecture | Content Strategy | Branding | UI Design</p>
                            <p className="d-flex justify-content-end pb-1 pr-2"><Link to={"/ux-ui-portfolio/case-studies/vauven"}>View case study</Link></p>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="container hm-card">
                    <div className="row">
                        <div className="col-12 col-lg-5 hs-header">
                            <Link to={"/ux-ui-portfolio/case-studies/haven-station"}><img className="img-fluid" alt="Haven Station Logo and Prototype on Phones" src={hs} /></Link>
                        </div>
                        <div className="col-12 col-lg-7 pl-4">
                            <h1 className="pt-2 pb-2">Haven Station</h1>
                            <h3 className="pb-3">START-UP MVP CHILDREN'S MULTI-MEDIA APP PROOF OF CONCEPT</h3>
                            <p className="pb-2">How might we disrupt the children's app market?</p>
                            <p className="hm-items">UX Research | Interaction | Branding | Visual &amp; UI Design | Prototyping</p>
                            <p className="d-flex justify-content-end pb-1 pr-2"><Link to={"/ux-ui-portfolio/case-studies/haven-station"}>View case study</Link></p>
                        </div>
                    </div>
                </div>
                <br/><br/>
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
                <br/><br/>
                <div className="container hm-card">
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex align-items-end rm-header">
                            <Link className="text-decoration-none" to={"/ux-ui-portfolio/case-studies/readingful-moments"}><img className="img-fluid" alt="Readingful Moments Logo and Prototype on Phones" src={rm} /></Link>
                        </div>
                        <div className="col-12 col-lg-7 pl-4 flex-row">
                            <h1 className="pt-2 pb-2">Readingful Moments</h1>
                            <h3 className="pb-3">MOBILE APP THAT USES AI TO HELP BUILD READING HABITS WITH KIDS</h3>
                            <p className="pb-2">How might we make it easier for parents to be intentional about reading with their kids?</p>
                            <p className="hm-items">User Interviews | Interaction | Visual &amp; UI Design | Prototyping | User Testing</p>
                            <p className="d-flex justify-content-end pb-1 pr-2"><Link to={"/ux-ui-portfolio/case-studies/readingful-moments"}>View case study</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}