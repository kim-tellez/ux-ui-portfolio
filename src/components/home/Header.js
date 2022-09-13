import React from "react";
import slsm from "../img/home-sl-sm.png";
import lfsm from "../img/home-lf-sm.png";
import kimsm from "../img/home-kim-sm.png";
import uism from "../img/home-ui-sm.png";
import sllg from "../img/home-sl-lg.png";
import lflg from "../img/home-lf-lg.png";
import kimlg from "../img/home-kim-lg.png";
import uilg from "../img/home-ui-lg.png";

export default function Header() {
    function mouseInSl(e) {
        e.currentTarget.src = sllg;
        document.getElementById('kim').src = kimsm;
        document.getElementById('kim').style.bottom = "3px";
        document.getElementById('kim').style.zIndex = "2";
    }

    function mouseOutSl(e) {
        e.currentTarget.src = slsm;
        document.getElementById('kim').src = kimlg;
        document.getElementById('kim').style.bottom = "";
        document.getElementById('kim').style.zIndex = "";
    }

    function mouseInLf(e) {
        e.currentTarget.src = lflg
        document.getElementById('kim').src = kimsm;
        document.getElementById('kim').style.bottom = "3px";
        document.getElementById('kim').style.zIndex = "2";
    }

    function mouseOutLf(e) {
        e.currentTarget.src = lfsm;
        document.getElementById('kim').src = kimlg;
        document.getElementById('kim').style.bottom = "";
        document.getElementById('kim').style.zIndex = "";
    }

    function mouseInUi(e) {
        e.currentTarget.src = uilg;
        document.getElementById('kim').src = kimsm;
        document.getElementById('kim').style.bottom = "3px";
        document.getElementById('kim').style.zIndex = "4";
    }
    function mouseOutUi(e) {
        e.currentTarget.src = uism;
        document.getElementById('kim').src = kimlg;
        document.getElementById('kim').style.bottom = "";
        document.getElementById('kim').style.zIndex = "";
    }
        

    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 justify-content-center m-auto pt-5 d-none d-lg-flex">
                        <div><img  alt="Servent Leader" className="img-fluid hm-sl" src={slsm} onMouseOver={e => mouseInSl(e)} onMouseOut={e => mouseOutSl(e)} /></div>
                        <div><img alt="Learning Facilitator" className="img-fluid hm-lf" src={lfsm} onMouseOver={e => mouseInLf(e)} onMouseOut={e => mouseOutLf(e)} /></div>
                        <div><img alt="They/Them" id="kim" className="img-fluid hm-kim" src={kimlg} /></div>
                        <div><img  alt="UX/UI Designer" className="img-fluid hm-ui" src={uism} onMouseOver={e => mouseInUi(e)} onMouseOut={e => mouseOutUi(e)} /></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center pb-5 d-block d-lg-none">
                        <div><img alt="They/Them" className="img-fluid" src={kimlg} /></div>
                    </div>
                    <div className="col-12">
                        <h1 className="text-decoration-none pb-4">Hi, I'm Kim. &#128075;</h1>
                        <p>I'm a UX/UI designer who has been using design thinking in the service of others for the past 10 years. I started by running a <a href="https://www.globalcitizenyear.org/author/kimberly-nerea-tellez/" target="_blank" rel="noreferrer">community design project in Ecuador</a>, went on to work in education non-profits <a href="https://www.cce.org/thought-leadership/blog/post/cce-rhode-island-proficiency-personalized" target="_blank" rel="noreferrer">facilitating workshops for students and educators</a> across the United States and Guatemala, and have most recently found my passion in more traditional uses for design thinking: &#10024;digital product design&#10024;.</p>
                        <h3>WONDERING WHY I USE THE &#127805; AS MY LOGO?</h3>
                        <p>Maize is not a naturally occurring plant, instead it exists by design. I take pride in my ancestral lineage to the group of folks that took design thinking to the next level, working across hundreds of generations to produce the “pixel perfect” kernels (corny, I know &#128513;).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}