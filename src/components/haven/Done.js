import React from "react";
import vv from "../img/vv-header.png";
import {Link} from 'react-router-dom';

export default function Done() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Done here?</h1>
                <h3 className="pb-4">NEXT CASE STUDY</h3>
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
            </div>
        </div>   
    );
}