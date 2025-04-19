
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";
import Avatar from "./common/avatar";

export default function Home() {
  return (
    <main className="bg-red-500">
      <div className="bg-cyan-500">
        <div className="item"><AboutMe/></div>
        <div className="item"><Avatar/></div>
        <div className="item"><Projects/></div>
        <div className="item"><Achievements/></div>
      </div>
    </main>
  );
}
