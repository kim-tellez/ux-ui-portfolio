import React from "react";

export default function Background() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Background</h1>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-7">
                        <h3>OVERVIEW</h3>
                        <p>BPMusic, the music app with a heart.</p>
                        <p className="pb-3">BPMusic is a streaming platform that lets you create playlists based on beats per minute, making it the perfect music app to use while working out. 
                            The company's business strategy was to first build a user base by offering a free product and then evolve the feature set so they could monetize on a premium (paid) product. 
                            At this point, the product has been well received and has a healthy user base of free users. They now need to design an experience that will allow users to subscribe and pay a monthly fee.
                        </p>
                        
                        <h3>PROBLEM</h3>
                        <p className="pb-3">
                            The existing flow does not have prominent calls to action throughout the free experience that gives users the opportunity — or a compelling reason — to subscribe.
                        </p>

                        <h3>SOLUTION</h3>
                        <p className="pb-3">
                            What if you were rewarded for staying active? Many of our customers already use our app while working out, so we'll use gamification to meet them where they are at. 
                        </p>
                        <div className="d-flex d-lg-inline justify-content-center"><a href="https://www.figma.com/proto/WEpG05MfDtxRz5Vbl3XiK2/BPMusic---Capstone-2?node-id=110%3A332&scaling=scale-down&page-id=110%3A311&starting-point-node-id=110%3A594" target="_blank" rel="noreferrer"><button>PROTOTYPE</button></a></div>
                    </div>
                    <div className="pt-5 pt-lg-0 col-12 col-md-3">
                        <ul className="list-unstyled">
                            <li><h3>ROLE</h3></li>
                            <li><b>Product Designer</b></li>
                            <li>UX Research</li>
                            <li>Interaction</li>
                            <li>Visual design</li>
                            <li>Prototyping &amp; Testing</li>
                            <br />
                            <li><h3>TIMELINE</h3></li>
                            <li>Apr - Jun 2022</li>
                            <br />
                            <li><h3>TOOLS</h3></li>
                            <li>Paper &amp; Pens</li>
                            <li>Figma</li>
                            <li>Miro</li>
                            <li>Pop! by Marvel</li>
                            <li>Google Suite</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>   
    );
}