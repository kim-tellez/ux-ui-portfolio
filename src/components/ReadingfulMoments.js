import React from "react";
import "./css/readingful.css";
import Header from "./readingful/Header";
import Background from "./readingful/Background";
import Process from "./readingful/Process";
import Research from "./readingful/Research";
import MVP from "./readingful/MVP";
import Ideation from "./readingful/Ideation";
import Design from "./readingful/Design";
import Prototype from "./readingful/Prototype";
import Learning from "./readingful/Learning";
import Done from "./readingful/Done";


export default function ReadingfulMoments() {
    return (
        <>
            <Header />
            <Background />
            <Process />
            <Research />
            <MVP />
            <Ideation />
            <Design />
            <Prototype />
            <Learning />
            <Done />
        </>
    );
}