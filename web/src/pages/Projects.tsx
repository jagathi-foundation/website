import React from "react";
//Imports for the page
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import ProjectsWidget from "../components/ProjectsWidget";
import { ProjectsContent } from "../mockdata";
import {
  NavLinks,
  SocialLinksContent,
  ContactInfoContent,
  DonateLink,
  CountriesContent,
} from "../mockdata";

const Projects: React.FC = () => {
  return (
    <>
      <Navbar navLinks={NavLinks} />
      <main className="container m-auto">
        <h1 className="text-4xl text-center pt-10">Our Projects</h1>
        <ProjectsWidget countries={CountriesContent} pillars={["ff"]} />
        <ProjectList projects={ProjectsContent} />
        <br />
      </main>
      <Footer
        socialLinks={SocialLinksContent}
        contactInfo={ContactInfoContent}
        donateLink={DonateLink}
      />
    </>
  );
};

export default Projects;
