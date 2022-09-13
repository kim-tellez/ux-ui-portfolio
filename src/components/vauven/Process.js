import React from "react";
import process from "../img/vv-process.png";

export default function Process() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Process</h1>
                <p className="pb-md-3">With a small team and limited time and funding, time-boxing work and sticking to the process was crucial for reaching the late August deadline. This allowed enough time for the founder to gear up for applications and funding opportunities for the fall and beyond.</p>
                <p className="pb-sm-3 d-block d-md-none">Click image to enlarge.</p>
                <a target="_blank" rel="noreferrer" href={process}><img className="img-fluid d-flex m-auto" alt="Vauven creation process." src={process} /></a>
            </div>
        </div>   
    );
}