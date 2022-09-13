import React from "react";
import flows from "../img/bpm-flows.png";
import wireframes from "../img/bpm-wireframes.png";
import wireframeslg from "../img/bpm-wireframes-lg.png";

export default function Ideation() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Early Ideations</h1>
                <h2>Premium Offerings User Flows</h2><br/>
                <p className="d-block d-md-none">Click image to enlarge.</p>
                <a target="_blank" rel="noreferrer" href={flows}><img className="img-fluid d-flex m-auto pb-5" alt="BP Music user flows" src={flows} /></a>
                <h2 className="pt-5">Low-Fidelity Wireframes</h2>
                <p className="d-block d-md-none">Click image to enlarge.</p>
                <a target="_blank" rel="noreferrer" href={wireframeslg}><img className="img-fluid d-flex m-auto pt-3 pb-5" alt="BP Music low fidelity wireframes" src={wireframes} /></a>
            </div>
        </div>   
    );
}