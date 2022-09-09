import React from 'react';
import {Link} from 'react-router-dom';
import corn from "./img/corn.png";

export default function Footer() {
    return (
        <footer className="page-footer pt-5 pb-5">
            <div className="container-fluid text-center">
                <Link to={"/"}><img className="img-fluid pb-3" alt="Site Logo" src={corn} /></Link>
                <h2>Let's work together!</h2>
                <a href="mailto:kimberlyntellez@gmail.com">email: kimberlyntellez@gmail.com</a>
            </div>
        </footer>
    );
}