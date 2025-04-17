import Header from "./components/header";
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Achievements/>
    </main>
  );
}
