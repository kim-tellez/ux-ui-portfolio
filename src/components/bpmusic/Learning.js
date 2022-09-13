import React from "react";

export default function Learning() {
    return (
        <div className="container-fluid pt-5 pb-lg-5">
            <div className="container">
                <h1 className="pb-4">Learnings</h1>
                <ul>
                    <li><b>Understanding the problem in a holistic manner gets you halfway there.</b> On the surface, the client brief asked for user flows that introduced and promoted premium subscriptions. As the product designer, it was on me to tease out the nuances of all that this entailed: from providing recommendations on what the premium features and plans should be, to designing a rewards system, to making brand recommendations, to creating a cohesive visual language that speaks to that brand&hellip; and then packaging that all together in the UX and UI of the product.</li><br/>
                    <li><b>User insights always challenge your assumptions (so always seek user insights!).</b> One of my biggest assumptions early on in the research phase of this project was that users would jump at the prospect of charity donations being a part of their music streaming experience. I had almost decided that the first tier of premium subscriptions (BPM+) should be promoted as a $5 charity donation (who wouldn't like that?!). Then, I analyzed the survey data and found that users preferred the idea of paying $4.99 for a subscription and then having the option for a charity donation as a premium feature&hellip; so I went with that instead. </li><br/>
                    <li><b>It's okay to fail, just fail fast and come back with something better.</b> I made rookie mistakes in the design at the low-fidelity level. I put up a paywall way too early, and had a premium subscription offer screen show up way too often. I learned this quickly during the first round of testing, and was able to see significant improvement in usability in the next round of testing. That's something that I've come to love about the design process: continuous improvement is tangible through each iteration.</li>
                </ul>
            </div>
        </div>   
    );
}