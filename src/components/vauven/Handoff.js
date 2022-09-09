import React from "react";
import web from "../img/vv-web.png";
import mobile from "../img/vv-mobile.png";

export default function Handoff() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Handoff &amp; Partnering<br className="d-block d-md-none"/><br className="d-block d-md-none"/> with the Developer</h1>
                <p>By early August, I had implemented the style guide and finalized the copy for the site and was ready to hand-off the style guide, an organized digital library of images, and high-fidelity wireframes to the developer. Leading up to the August 26th deadline, I partnered with the developer to create the responsive company website by having check-ins throughout the development stage to answer questions and ensure that the design was implemented as intended. Below you’ll find cropped images of the final designs for both web and mobile.</p>

                <div className="row pb-5">
                    <div className="col-auto col-md-6">
                        <h3>Web</h3>
                        <a target="_blank" rel="noreferrer" href={web}><img className="img-fluid d-flex m-auto pt-2" alt="Web view of Vauven website." src={web} /></a>
                    </div>
                    <div className="col-auto col-md-6">
                        <h3>Mobile</h3>
                        <a target="_blank" rel="noreferrer" href={mobile}><img className="img-fluid d-flex m-auto pt-2" alt="Mobile view of Vauven website." src={mobile} /></a>
                    </div>

                </div>
                <h3 className="pt-5">We're live!</h3>
                <p className="pb-1">As planned, the website went live on August 26th, 2022. Click the button below to visit the website.</p>
                <a href="https://www.vauven.com" target="_blank" rel="noreferrer"><button>Visit Site</button></a>
            </div>
        </div>   
    );
}