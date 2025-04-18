import Header from "./components/header";
import React from "react";
import AboutMe from "./profile/AboutMe";
import Achievements from "./profile/Achievements";
import Projects from "./profile/Projects";
import Avatar from "./common/avatar";
import Technology from "./common/technology";

export default function Home() {
  return (
    <main>
      <Header/>
      <AboutMe/>
      <Avatar/>
      <section className="justify-center flex">
      <Technology/>
      </section>
      <Projects/>
      <Achievements/>
    </main>
  );
}
