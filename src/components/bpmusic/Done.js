import React from "react";
import rm from "../img/rm-header.png";
import {Link} from 'react-router-dom';

export default function Done() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Done here?</h1>
                <h3 className="pb-4">NEXT CASE STUDY</h3>
                <div className="container hm-card">
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex align-items-end rm-header">
                            <Link className="text-decoration-none" to={"/ux-ui-portfolio/case-studies/readingful-moments"}><img className="img-fluid" alt="Readingful Moments Logo and Prototype on Phones" src={rm} /></Link>
                        </div>
                        <div className="col-12 pt-2 pt-lg-0 col-lg-7 pl-4 flex-row">
                            <h1 className="pt-2 pb-3 pb-lg-2">Readingful Moments</h1>
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