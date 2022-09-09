import React from "react";
import header from "../img/rm-header.png";

export default function Header() {
    return (
        <div className="container-fluid rm-header">
            <div className="container d-flex justify-content-center">
                <img className="img-fluid" alt="Readingful Moments Logo and Prototype on Phones" src={header} />
            </div>
        </div>
    );
}