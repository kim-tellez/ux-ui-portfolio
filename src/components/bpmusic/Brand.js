import React from "react";
import niche from "../img/bpm-niche.png";
import style from "../img/bpm-style.png";

export default function Brand() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Brand Recommendations</h1>
                <h2>Creating a Niche</h2>
                <p className="pb-3">During this new phase of BPMusic, we need to tap into the power of community. Music and exercise both have the potential to energize, connect, and heal. At BPMusic, we catalyze that potential to offer a music streaming experience like no other at the intersection of music, fitness, and charity.</p>
                <a target="_blank" rel="noreferrer" href={niche}><img className="img-fluid d-flex m-auto pb-5" alt="BP Music venn diagram." src={niche} /></a>

                <h2 className="pt-5">Updating the Logo &amp; Style Guide</h2>
                <p>To remain consistent throughout the re-vamped design, I created a <a href="/" target="_blank" rel="noreferrer">Quick Style Guide</a> that denotes the Colors, Fonts, Iconography, UI Elements, and Imagery that are used in the high-fidelity mock-ups and prototypes.</p><br />
                <a target="_blank" rel="noreferrer" href={style}><img className="img-fluid d-flex m-auto" alt="BP Music style guide." src={style} /></a>
            </div>
        </div>   
    );
}