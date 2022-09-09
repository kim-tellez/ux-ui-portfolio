import React from "react";
import {Link} from 'react-router-dom';

export default function Background() {
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <h1 className="pb-4">Background</h1>
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <h3>OVERVIEW</h3>
                        <p className="pr-5">Haven Station, an app you can trust.</p>
                        <p  className="pr-5 pb-3">Haven Station is the first child-safe digital product that Vauven (a children's entertainment start-up) is working to bring to market. <Link to={"/ux-ui-portfolio/case-studies/vauven"}>Learn more about my work with Vauven.</Link> 
                        </p>
                        
                        <h3>PROBLEM</h3>
                        <p  className="pr-5 pb-3">
                        The founder was driven by her passion to create children's stories, and envisioned a proprietary streaming platform similar to industry giants such as Hulu or Netflix to house those stories. However, unlike these industry giants, Haven Station will only host original content, and has 5 shows to start out with.
                        </p>

                        <h3>SOLUTION</h3>
                        <p className="pr-5 pb-3">
                        An all-in-one entertainment platform that offers original shows, games, activities and VR and AR experiences. The app centers around Haven Station's original characters, and the added features are designed to keep kids engaged in the character's stories. This comprehensive experience keeps Haven Station competitive in a market with few child-safe alternatives that offer this diversity of in-app experiences.
                        </p>
                        <a href="https://marvelapp.com/prototype/80g9h73?emb=1&iosapp=false&frameless=false" target="_blank" rel="noreferrer"><button>PROTOTYPE</button></a>
                    </div>
                    <div className="col-1 col-lg-1 pb-5"></div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <ul className="list-unstyled">
                            <li><h3>CLIENT</h3></li>
                            <li>Vauven<br/>(early stage start-up)</li>
                            <br />
                            <li><h3>TEAM</h3></li>
                            <li className="pb-2">Founder: Brittany Vaughn</li>
                            <li>Original Content Team:</li>
                            <li>Illustrators</li>
                            <li>Animators</li>
                            <li>Voice Actors</li>
                            <br />
                            <li><h3>MY ROLE</h3></li>
                            <li><b>Product Designer</b></li>
                            <li>Research</li>
                            <li>Interaction</li>
                            <li>Branding</li>
                            <li>Visual &amp; UI Design</li>
                            <li>Prototyping</li>
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