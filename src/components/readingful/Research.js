import React from "react";
import synth from "../img/rm-synth.png";
import synthlg from "../img/rm-synth-lg.png";


export default function Research() {
    return (
        <div className="container-fluid rm-research pt-5">
            <div className="container">
                <h1 className="pb-4">Discovery Research</h1>
                <div className="rm-whitebg">
                    <h2>User Interviews</h2>
                    <p>To better understand parents' needs and pain points in setting up a habit of reading at home, I interviewed 5 parents of elementary-school-aged children:</p>
                    <ul>
                        <li><b>Potential users were recruited and screened with a Screener Survey,</b> resulting in identifying 5 potential users to interview</li>
                        <li><b>Remote user interviews were conducted &amp; recorded via Zoom,</b> resulting in about 3 hrs of recorded interview data</li>
                        <li><b>All interviews were transcribed and coded,</b> resulting in about 30 pages of transcribed data</li>
                    </ul>
                    <h3>AFFINITY MAPPING</h3>
                    <p>First, I conducted a coding exercise on the interview transcripts (as seen in background). Then, I extracted all of my findings into Miro and performed a Thematic Analysis to organize my findings into actionable themes. Then, I created user personas based on my findings.</p>
                </div>
                <a target="_blank" rel="noreferrer" href={synthlg}><img className="img-fluid d-flex m-auto pt-2 pb-5" alt="I used Miro to visualize &amp; organize my findings into themes." src={synth} /></a>
            </div>
        </div>   
    );
}