import React from "react";
import "./css/bpmusic.css";
import Header from "./bpmusic/Header";
import Background from "./bpmusic/Background";
import Process from "./bpmusic/Process";
import Research from "./bpmusic/Research";
import Brand from "./bpmusic/Brand";
import Ideation from "./bpmusic/Ideation";
import Prototype from "./bpmusic/Prototype";
import Learning from "./bpmusic/Learning";
import Done from "./bpmusic/Done";


export default function BPMusic() {
    return (
        <>
            <Header />
            <Background />
            <Process />
            <Research />
            <Brand />
            <Ideation />
            <Prototype />
            <Learning />
            <Done />
        </>
    );
}