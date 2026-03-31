// import React from "react";
import AboutLayout from "./AboutLayout";
import Cities from "../Cities";
import FounderLayout from "../FounderLayout";
import GetInTouch from "./GetInTouch";
import TeamSection from "../TeamSection";

const AboutPage = () => {
  return (
    <div className="container">
      <AboutLayout />
      <Cities />
      <FounderLayout />
      <GetInTouch />
      <TeamSection/>
    </div>
  );
};

export default AboutPage;
