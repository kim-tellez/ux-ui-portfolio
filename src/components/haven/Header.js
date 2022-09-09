import React from "react";
import header from "../img/hs-header.png";

export default function Header() {
    return (
        <div className="container-fluid hs-header">
            <div className="container d-flex justify-content-center">
                <img className="img-fluid" alt="Haven Station Logo and Prototype on Phones" src={header} />
            </div>
        </div>
    );
}