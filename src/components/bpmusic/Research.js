import React from "react";
import user from "../img/bpm-user.png";
import student from "../img/bpm-student.png";
import buddy from "../img/bpm-buddy.png";
import family from "../img/bpm-family.png";
import analysis from "../img/bpm-analysis.png";


export default function Research() {
    return (
        <div className="container-fluid pb-5">
            <div className="container">
                <h1 className="pb-4">Discovery Research</h1>
                <h2>User Survey</h2>
                <p>Using Google Forms, I surveyed potential users to get better insight into their attitudes toward our product.</p><br/>
                <div className="row">
                    <div className="col-6 pl-5">
                        <img className="img-fluid d-flex m-auto pt-4 pb-3" alt="User Profile" src={user} /><br/>
                        <h3 className="pl-3">User Profile</h3>
                        <ul>
                            <li>18 - 25 years old</li>
                            <li>Very tech-savvy</li>
                            <li>Very budget-conscious</li>
                            <li>Music is a very important part of their lives</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <span><b className="bpm-big">85%</b> are willing to take action to remove ads</span><br/>
                        <span><b className="bpm-big">55%</b> wish they could reach fitness goals and remove ads for free</span><br/>
                        <span><b className="bpm-big">55%</b> said yes to paying $4.99 to remove ads</span><br/>
                        <span><b className="bpm-big">33%</b> wish they could donate $5 to charity to remove ads</span><br /><br/>
                        <p>Other <b>premium plans</b> our users expect to see:</p>
                        <div className="row">
                            <div className="col-auto"><img className="img-fluid" alt="student logo" src={student} />&nbsp; Student Plan</div>
                            <div className="col-auto"><img className="img-fluid" alt="buddy logo" src={buddy} /> Buddy Plan</div>
                            <div className="col-auto"><img className="img-fluid" alt="family logo" src={family} /> Family Plan</div>
                        </div><br/>
                        <p><b>New features</b> users would most like to see:</p>
                        <p><span className="bpm-bigger">Dynamic Playlists:</span> music automatically adjusts to your heart rate.
                        <br/><span className="bpm-bigger">Charity Donations:</span> donate without incurring additional costs.</p>
                    </div>
                </div>

                <h2 className="pt-4">Competitive Analysis</h2>
                <p>*The column on the far right outlines my recommendations based on both the primary and secondary research that was conducted.</p>
                <p className="d-lg-none d-block">Click table to enlarge</p>
                <span className="d-lg-block d-none pt-3">&nbsp;</span>
                <a target="_blank" rel="noreferrer" href={analysis}><img className="img-fluid d-flex m-auto" alt="BP Music competitive analysis" src={analysis} /></a>
            </div>
        </div>
    );
}