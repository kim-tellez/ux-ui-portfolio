import React from "react";
import {Link} from 'react-router-dom';

export default function More() {
    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <h1 className="pb-4">More coming soon!</h1>
                <h3>HAVE YOU EVER HAD TO SIGN AN NDA?</h3>
                <p>Sorry there isn't more to see here yet. I'm currently working with the Vauven founder to figure out how to showcase my work without giving away trade secrets while she seeks funding. If you want to learn more about my work here, consider starting a conversation with me! I can be reached via <a target="_blank" rel="noreferrer"  href='https://www.linkedin.com/in/kimberly-tellez/'>LinkedIn</a> or email at <a href="mailto:kimberlyntellez@gmail.com">kimberlyntellez@gmail.com</a>.</p>
                <p>Otherwise, you'll find that my other case studies are much more robust. For example, <Link to={"/ux-ui-portfolio/case-studies/vauven"}>click here to learn about my other work with Vauven.</Link></p>
                <h2>In the meantime, check out the prototype!</h2>
                <div className="row pt-5">
                  <div className="mx-auto justify-content-center align-items-center">
                  <iframe src="https://marvelapp.com/prototype/80g9h73?emb=1&iosapp=false&frameless=false" allowTransparency="true" frameborder="0" className="hs-prototype" title="Haven Station Prototype"></iframe>
                  </div>
                </div>
            </div>
        </div>   
    );
}