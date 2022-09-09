import React from "react";
import header from "../img/vv-header.png";

export default function Header() {
    return (
        <div className="container-fluid vv-header">
            <div className="container d-flex justify-content-center">
                <img className="img-fluid" alt="Vauven Logo and Website on a Laptop" src={header} />
            </div>
        </div>
    );
}