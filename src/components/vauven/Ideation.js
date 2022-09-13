import React from "react";
import investor from "../img/vv-investor.png";
import customer from "../img/vv-customer.png";
import employee from "../img/vv-employee.png";
import sitemap from "../img/vv-sitemap.png";

export default function Ideation() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Ideation</h1>
                <h2>Proto Personas &amp; User Stories</h2>
                <p>As a team, we came together to brainstorm potential users and user stories for the Vauven website, and then went on to collaboratively build an early sitemap.</p>

                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-4 pb-5">
                            <img className="img-fluid d-flex m-auto pt-3 pb-4" alt="Potential Investors" src={investor} />
                            <div className="d-flex flex-column">
                                <div className="vv-info-header text-center pt-3">
                                    <p><b>Potential Investor</b></p>
                                </div>
                                <div className="vv-info pt-2 container pb-xl-4">
                                    <p><b>As a potential investor, I need to&hellip;</b></p>
                                    <ul>
                                        <li><p>Learn about the Vauven product &amp; values so that I can understand the full scope of the idea.</p></li>
                                        <li><p>Learn about Vauven's unique value proposition so that I can understand the competitive advantage.</p></li>
                                        <li><p>Trial the prototype so that I can validate the commercial viability of the idea.</p></li>
                                        <li><p>Learn about the team so that I can understand what roles have been hired for.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pb-5">
                            <img className="img-fluid d-flex m-auto pt-3 pb-4" alt="Potential Customers" src={customer} />
                            <div className="d-flex flex-column">
                                <div className="vv-info-header text-center pt-3">
                                    <p><b>Potential Customer</b></p>
                                </div>
                                <div className="vv-info pt-2 container">
                                    <p><b>As a potential customer, I need to&hellip;</b></p>
                                    <ul>
                                        <li><p>Learn about the Vauven product &amp; values so that I can understand if it is a good fit for my family.</p></li>
                                        <li><p>Learn about the original content so that I can determine if I want my children to engage with it.</p></li>
                                        <li><p>Learn about prices so that I can determine if purchasing is worth it and within my budget.</p></li>
                                        <li><p>Learn about the team so that I can build trust that good people are creating this.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 pb-5">
                            <img className="img-fluid d-flex m-auto pt-3 pb-4" alt="PotentialEmployees" src={employee} />
                            <div className="d-flex flex-column">
                                <div className="vv-info-header text-center pt-3">
                                    <p><b>Potential Employee</b></p>
                                </div>
                                <div className="vv-info pt-2 container">
                                    <p><b>As a potential Vauven employee, I need to&hellip;</b></p>
                                    <ul>
                                        <li><p>Learn about the Vauven product &amp; values so that I can understand the full scope of the company.</p></li>
                                        <li><p>Trial the prototype so that I can understand what I would be working on.</p></li>
                                        <li><p>Learn about the team so that I can understand what roles have been hired for.</p></li>
                                        <li><p>Contact someone in charge so that I can express my interest in joining the team.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>Sitemap Brainstorming Session</h2>
                <p>We used Miro to build an initial sitemap, and identified areas (such as the company values) that needed to be worked on. I supported the team by facilitating brainstorming sessions such as this throughout the project.</p>
                <p className="d-block d-md-none">Click image to enlarge.</p>
                <a target="_blank" rel="noreferrer" href={sitemap}><img className="img-fluid d-flex m-auto pt-2" alt="Vauven sitemap" src={sitemap} /></a>


            </div>
        </div>   
    );
}