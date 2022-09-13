import React from "react";
import pain1 from "../img/rm-pain1.png";
import revision from "../img/rm-revision.png";
import pain2 from "../img/rm-pain2.png";
import phone from "../img/rm-phone.gif";

export default function Prototype() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1>Prototyping &amp; Testing</h1><br/>
                <h2>Moderated, Remote Usability Test</h2>
                <p>Below, I highlight some of the major usability issues I found in this round of testing. Click on the links to access the <a href="https://docs.google.com/document/d/1yC13rhrioJ5NxdD39MC-yaishkHVDbUHmbN7DgC615A/edit?usp=sharing" target="_blank" rel="noreferrer">Script</a> I used and the <a href="https://docs.google.com/document/d/1Vzdg9V9imKSRhY0q9mgSS3evLLG32u9N-r9cbhEh7Kw/edit?usp=sharing" target="_blank" rel="noreferrer">Full Report</a> of findings and recommendations.</p>
                <div className="row m-auto pt-2 pl-2 pb-5 justify-content-between">
                    <fieldset className="col-auto col-lg-5 rm-pain">
                        <legend><h3>PAIN POINTS</h3></legend>
                        <a target="_blank" rel="noreferrer" href={pain1}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Usability Test Pain Points" src={pain1} /></a>
                        <ul>
                            <li className="lia"><p>Users did not immediately understand how the progress indicators work and were confused about their relationship to the "Tip".</p></li>
                            <li className="lib">
                                <span>Goals page had many issues:</span>
                                <ul>
                                    <li>Goals descriptions were not clear</li>
                                    <li>Badges under goal descriptions were very confusing</li>
                                    <li>Users were expecting to be able to track their reading in more straight-forward ways, such as in the All-Time Statistics section</li>
                                </ul>
                            </li><br/>
                            <li className="lic">
                                <span>Reading interface is confusing:</span>
                                <ul>
                                    <li>Once in a story, users struggled to exit</li>
                                    <li>Sound icon was interpreted as an audiobook (the intention was for the sound icon is to turn story sound effects on/off)</li>
                                </ul>
                            </li>
                        </ul>
                    </fieldset>
                    <div className="col-1 pb-5"></div>
                    <fieldset className="col-auto col-lg-5 rm-revision">
                        <legend><h3>REVISIONS</h3></legend>
                        <a target="_blank" rel="noreferrer" href={revision}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Revisions after testing" src={revision} /></a>
                        <ul>
                            <li className="lia"><p>Removed the confusing numbers from progress indicators, and replaced them with an icon for the goal it belongs to. Added a star to indicate the final goal, and a caption with a progress update.</p></li>
                            <li className="lib"><p>Badges removed, goal descriptors updated with simplified copy. Below the progress indicators (not pictured), I added a Reading Log and more dashboard elements.</p></li>
                            <li className="lic">
                                <span>Added top and bottom navigation to the reading interface, including:</span>
                                <ul>
                                    <li>An exit button, and a button to open up the menu in the top nav</li>
                                    <li>Arrows to indicate how to switch between pages</li>
                                    <li>A new icon with a musical note to indicate sound effects</li>
                                </ul>
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <h2>Final Moderated, Remote Usability Test</h2>
                <p>This final round of testing was an opportunity to validate my design solutions to the usability issues that were uncovered in the previous round. I also uncovered uncritical problem spaces that can serve as a starting place to explore future development. Click on the links to access the <a href="https://docs.google.com/document/d/1iG443y5ZmAu1i_1lcbS6cd73nlTC2t16tc-u77T57m8/edit?usp=sharing" target="_blank" rel="noreferrer">Script</a> I used and the <a href="https://docs.google.com/document/d/1NW57XwFYq5nHVYpp4310kWnVorKqPHDeLxZDWCtCocA/edit?usp=sharing" target="_blank" rel="noreferrer">Full Report.</a></p>
                <div className="row m-auto pt-2 pl-2 pb-5 justify-content-between">
                    <fieldset className="col-auto col-lg-5 rm-pain">
                        <legend><h3>PAIN POINTS</h3></legend>
                        <a target="_blank" rel="noreferrer" href={pain2}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="Usability Test Pain Points" src={pain2} /></a>
                        <ul>
                            <li className="lia"><p>While users felt that the information under the progress indicators was helpful, it took too long to stop and read.</p></li>
                            <li className="lib">
                                <span>When asked how they would improve reading recommendations, all users went to the Home page and clicked on the Profile icon, expecting this to be under "Settings":</span>
                                <ul>
                                    <li>In some cases, users were already in the Explore page, scrolled past the banner containing info on how to improve reading recommendations, and went to the Home page instead.</li>
                                    <li>0 users clicked on the Link Apps button or read the copy on the banner</li>
                                </ul>
                            </li><br />
                            <li className="lic"><p>4 out of the 5 participants expected there to be a children's version/profile.</p></li>
                        </ul>
                    </fieldset>
                    <div className="col-1 pb-5"></div>
                    <fieldset className="col-auto col-lg-5 rm-recs">
                        <legend><h3>RECOMMENDATIONS FOR FUTURE ITERATIONS</h3></legend>
                        <p>At this stage, I did not go back to implement any major changes to the design. However, I was able to validate previous design choices, and compile a list of priorities for future iterations:</p>
                        <ul>
                            <li className="lia"><p>Find solutions to visually convey the information under Weekly Progress so that long copy is not needed.</p></li>
                            <li className="lib"><p>Remove the banner and Link Apps button from the Explore page, and keep that under Settings/Profile.</p></li>
                            <li className="lic">
                                <span>When asked how they would improve reading recommendations, all users went to the Home page and clicked on the Profile icon, expecting this to be under "Settings":</span>
                                <ul>
                                    <li>Design a simplified version of the app for children's profiles, where they can access reading material and their own goals.</li>
                                </ul>
                            </li>
                        </ul>
                        <p>Additional findings:</p>
                        <ul>
                            <li className="lid"><p>User testing shows that the Readingful Moments mascot is a favorite element among users, and they want to see more of the mascot throughout the app.</p></li>
                            <li className="lie"><p>"Quick Reads" section could be expanded to include more story categories (other than "Fun Stories" and "Bedtime Stories").</p></li>
                        </ul>
                    </fieldset>
                </div>
                <h2>Final Prototype</h2>
                <p>Below you'll find a GIF showing how the final product is meant to be used. Click on the link to access the <a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer">Prototype.</a></p>
                <div className="d-flex justify-content-center">
                    <a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer" className="btn active button mt-3 pb-5 rm-phone">
                        <img className="img-fluid pb-5" alt="Click for an Interactive Prototype" src={phone} /><br/>
                    </a>
                </div>
                <div className="d-flex justify-content-center"><a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer"><button>PROTOTYPE</button></a></div>

            </div>
        </div>   
    );
}