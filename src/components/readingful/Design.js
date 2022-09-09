import React from "react";
import logos from "../img/rm-logos.png";
import screens from "../img/rm-screens.png";

export default function Design() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1>Visual &amp; UI Design</h1><br/>
                <h2>Creating a Logo</h2>
                <p>One of the most memorable elements of the Readingful Moments design is the mascot and logo. I was inspired by my early designs, which to me looked like a little robot holding a book. I got to sketching, seeking feedback, and iterating until I arrived at the final design.</p>

                <a target="_blank" rel="noreferrer" href={logos}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Collection of logo ideas" src={logos} /></a><br/>

                <h2>Creating &amp; Implementing the Style Guide</h2>
                <p>To remain consistent throughout the design, I created a <a href="https://drive.google.com/file/d/1bSEbsoShn7oIwyQOy0totxRf8Ne4KnVT/view?usp=sharing" target="_blank" rel="noreferrer">Style Guide</a> that denotes the Colors, Fonts, Iconography, UI Elements, and Imagery that are used in the high-fidelity mock-ups and prototypes.</p>
                <h3>High-Fidelity Screens</h3>
                <a target="_blank" rel="noreferrer" href={screens}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Collection of high-fidelity screens" src={screens} /></a>
            </div>
        </div>   
    );
}