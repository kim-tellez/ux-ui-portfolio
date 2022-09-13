import React from "react";
import design from "../img/rm-design.png";

export default function Process() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Process</h1>
                <h2>Design Thinking</h2>
                <p className="pb-3">Throughout my work for Readingful Moments. I followed the 5 step Design Thinking Process, often jumping back and forth between steps and iterations.</p>
                <a target="_blank" rel="noreferrer" href={design}><img className="img-fluid d-flex m-auto" alt="Readingful Moments design thinking process." src={design} /></a>
            </div>
        </div>   
    );
}