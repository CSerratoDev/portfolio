
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";
import Avatar from "./common/avatar";

export default function Home() {
  return (
    <main>
        <div><AboutMe/></div>
        <div><Projects/></div>
        <div><Achievements/></div>
    </main>
  );
}
