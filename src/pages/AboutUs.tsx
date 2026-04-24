// import React from 'react'
import GetInTouch from "../layout/AboutUs/GetInTouch";
import AboutLayout from "../layout/AboutUs/AboutLayout";
import Cities from "../layout/Cities";
import FounderLayout from "../layout/AboutUs/FounderLayout";
import TeamSection from "../layout/TeamSection";

const AboutUs = () => {
  console.log("Render");
  return (
    <>
      <AboutLayout />
      <Cities />
      <FounderLayout />
      <GetInTouch />
      <TeamSection />
    </>
  );
};

export default AboutUs;
