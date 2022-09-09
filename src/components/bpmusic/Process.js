import React from "react";
import design from "../img/bpm-diamond.png";
import designlg from "../img/bpm-diamond-lg.png";

export default function Process() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Process</h1>
                <h2>UX Double Diamond</h2>
                <p>Inspired by the double diamond, my process is an adapted version that includes a debrief/reflection phase.</p>
                <p>Early on, it was particularly important for me to break down the design brief to understand the client's different needs. This led to my design work influencing the product offerings, brand design, UX design, and interface design as opposed to limiting my scope to just the UX/UI of the premium plan user flows.</p>
                <p className="pb-3">Click image to enlarge.</p>
                <a target="_blank" rel="noreferrer" href={designlg}><img className="img-fluid" alt="BP Music design thinking process." src={design} /></a>
            </div>
        </div>   
    );
}