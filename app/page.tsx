import Header from "./components/header";
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";
import Avatar from "./common/avatar";

export default function Home() {
  return (
    <main>
      <Header/>

      <div className="flex p-6">
        <AboutMe/>
        <Avatar/>
      </div>
      <Projects/>
      <Achievements/>
    </main>
  );
}
