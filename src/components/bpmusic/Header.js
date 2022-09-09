import React from "react";
import header from "../img/bpm-header.png";

export default function Header() {
    return (
        <div className="container-fluid bpm-header">
            <div className="container d-flex justify-content-center">
                <img className="img-fluid" alt="BPMusic Logo and Prototype on Phones" src={header} />
            </div>
        </div>
    );
}