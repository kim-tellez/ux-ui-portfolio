import React from "react";
import {Link} from 'react-router-dom';

export default function Background() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">Background</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <h3>OVERVIEW</h3>
                        <p> Vauven, a start-up that specializes in children's entertainment.</p>
                        <p className="pr-5 pb-3">Vauven began as an idea for a safe children's app when the founder struggled to find apps that engaged and inspired her toddler without also exposing him to violent or otherwise inappropriate content.</p>
                        <h3>PROBLEM</h3>
                        <p className="pr-5 pb-3">
                            Vauven was at the idea stage, with a limited timeline and budget. The founder was driven by her passion to create children's stories, and envisioned a proprietary streaming platform similar to industry giants such as Hulu or Netflix to house her original content.
                        </p>

                        <h3>SOLUTION</h3>
                        <p className="pr-5 pb-3">
                            <b>Vauven as a company, not an app.</b> I worked to reposition Vauven as a children's media company that offers child-safe digital products. I designed a responsive company website that showcases product offerings and company values.<br/><br/>
                            <b>Haven Station</b> is the first child-safe digital product that Vauven is working to bring to market. <Link to={"/ux-ui-portfolio/case-studies/haven-station"}>Learn more about my work with Haven Station.</Link> 
                        </p>
                        <a href="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIQai1EpRWdQyX1pVGwtRcu%2FReadingful-Moments-P2%3Fnode-id%3D2%253A8037%26starting-point-node-id%3D2%253A10623" target="_blank" rel="noreferrer"><button>VISIT SITE</button></a>
                    </div>
                    <div className="col-1 col-lg-1 pb-5"></div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <ul className="list-unstyled">
                            <li><h3>CLIENT</h3></li>
                            <li>Vauven<br/>(early stage start-up)</li>
                            <br />
                            <li><h3>TEAM</h3></li>
                            <li className="pb-2">Founder: Brittany Vaughn</li>
                            <li>Developer: Dakota-Cheyenne Brown</li>
                            <br />
                            <li><h3>MY ROLE</h3></li>
                            <li><b>Product Designer</b></li>
                            <li>Research</li>
                            <li>Information Architecture</li>
                            <li>Content Strategy</li>
                            <li>Branding</li>
                            <li>Visual &amp; UI Design</li>
                            <br />
                            <li><h3>TIMELINE</h3></li>
                            <li>Jun - Aug 2022</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
    );
}