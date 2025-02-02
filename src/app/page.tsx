import AboutSection from "@/components/AboutSection";
import Footer from "@/components/footer";
import HomeSection from "@/components/HomeSection";
import MyProjects from "@/components/MyProjects";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/Skills";
import React from "react";
// import Navbar from "@/components/Navbar";
// import HomeSection from "@/components/HomeSection";
// import AboutMe from "@/components/AboutMe";
// import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";

const Portfolio = () => {
  return (
    <div className="">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Portfolio;