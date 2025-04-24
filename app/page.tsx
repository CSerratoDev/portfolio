
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";

export default function Home() {
  return (
    <main>
        <div><AboutMe/></div>
        <div><Projects/></div>
        <div><Achievements/></div>
    </main>
  );
}
