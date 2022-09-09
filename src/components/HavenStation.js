import React from "react";
import "./css/haven.css";
import Header from "./haven/Header";
import Background from "./haven/Background";
import More from "./haven/More";
import Done from "./haven/Done";


export default function HavenStation() {
    return (
        <>
            <Header />
            <Background />
            <More />
            <Done />
        </>
    );
}