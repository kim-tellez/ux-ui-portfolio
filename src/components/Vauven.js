import React from "react";
import "./css/vauven.css";
import Header from "./vauven/Header";
import Background from "./vauven/Background";
import Process from "./vauven/Process";
import Research from "./vauven/Research";
import Ideation from "./vauven/Ideation";
import Design from "./vauven/Design";
import Handoff from "./vauven/Handoff";
import Learning from "./vauven/Learning";
import Done from "./vauven/Done";


export default function Vauven() {
    return (
        <>
            <Header />
            <Background />
            <Process />
            <Research />
            <Ideation />
            <Design />
            <Handoff />
            <Learning />
            <Done />
        </>
    );
}