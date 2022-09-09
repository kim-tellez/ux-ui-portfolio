import React from "react";
import home from "../img/vv-home.png";
import story from "../img/vv-story.png";
import team from "../img/vv-team.png";
import wireframes from "../img/vv-wireframes.png";
import wireframeslg from "../img/vv-wireframes-lg.png";
import style from "../img/vv-style.png";

export default function Design() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Design</h1>
                <h2>Digital Sketches</h2>
                <p>At this stage, it was time for me to take all of the data gathered during the research and ideation stages to come up with solution sketches for the Vauven website. Below you'll find a break-down of the final sketches I presented to the team.</p>
                <div className="container">
                    <div className="row vv-sketches pt-5 pb-5 d-flex justify-content-between">
                            <div className="col-4 pl-5 flex-column">
                                <div className="text-center">
                                    <h3 className="pl-5">HOME PAGE</h3><br/>
                                    <a target="_blank" rel="noreferrer" href={home}><img className="img-fluid" alt="Vauven home page sketches." src={home} /></a>
                                </div>
                            </div>

                            <div className="col-8 pr-5">
                                <div className="row flex-column">

                                    <div className="col-auto pb-5">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="text-center">
                                                    <h3 className="pl-5">ABOUT &gt; OUR STORY</h3><br/>
                                                    <a target="_blank" rel="noreferrer" href={story}><img className="img-fluid" alt="Vauven our story page sketches." src={story} /></a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="text-center">
                                                    <h3 className="pl-5">ABOUT &gt; OUR TEAM</h3><br/>
                                                    <a target="_blank" rel="noreferrer" href={team}><img className="img-fluid" alt="Vauven our team page sketches." src={team} /></a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-auto vv-sketches-info">
                                        <div className="row">
                                            <div className="col-auto pt-4 col-md-6">
                                                <h3 className="text-center">HOME PAGE</h3><br/>
                                                    <ul>
                                                        <li className="lia"><p>Top navigation with a prominent CTA for the prototype</p></li>
                                                        <li className="lib"><p>Hero section showcasing the app</p></li>
                                                        <li className="lic"><p>Feature section with icons</p></li>
                                                        <li className="lid"><p>Introduce brand-new original characters</p></li>
                                                        <li className="lie"><p>Showcase episodes from original shows</p></li>
                                                        <li className="lif"><p>Section to detail other offerings</p></li>
                                                        <li className="lig"><p>Section for other technical info</p></li>
                                                        <li className="lih"><p>Footer with social media icons</p></li>
                                                    </ul>
                                            </div>
                                            <div className="col-auto pt-4 col-md-6">
                                                <h3 className="text-center">ABOUT &gt; OUR STORY</h3><br/>
                                                <ul>
                                                    <li className="lia"><p>Narrative section about founder's story</p></li>
                                                    <li className="lib"><p>Company mission statement</p></li>
                                                    <li className="lic"><p>Company values with icons</p></li>
                                                    <li className="lid"><p>Company journey/timeline with icons</p></li>
                                                </ul><br/>
                                                <h3 className="text-center">ABOUT &gt; OUR TEAM</h3><br/>
                                                <ul>
                                                    <li className="lia"><p>Team member photos, roles, and bios</p></li>
                                                    <li className="lib"><p>Join the team section</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                <h2 className="pt-5">Content Mapping with Mid-Fi Wireframes</h2>
                <p>The next step was to work on the site copy and finalize the list of images that would be needed for the website. I used Google Docs to keep the site copy organized, and used mid-fidelity wireframes to give the team progress updates. Below you'll find an example of this step from the Our Story page.</p>
                <a target="_blank" rel="noreferrer" href={wireframeslg}><img className="img-fluid d-flex m-auto pt-5 pb-5" alt="Vauven mid-fi wireframes." src={wireframes} /></a>

                <h2>Logo, Favicon, &amp; Style Guide</h2>
                <p>I pitched three different mood boards to the founder, and we finalized the company colors of Tiffany Blue and Coral. I then designed a logo and created a Style Guide which was handed off to the developer and which I used to finalize the high fidelity mock-ups of the site. In the interest of saving time and money, Vauven uses open source fonts and icons from Material Design.</p>
                <img className="img-fluid d-flex m-auto pt-2" alt="Vauven styles and logos." src={style} />
            </div>
        </div>   
    );
}