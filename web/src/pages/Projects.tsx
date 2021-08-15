import React, { useState, useEffect } from "react";
//Imports for the page
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import ProjectsWidget from "../components/ProjectsWidget";
import Spinner from "../components/Loader";
//Content Getter
import getProjectsContent from "../utils/GetProjectsContent";
import { ProjectsContent } from "../mockdata";
import { CountriesContent } from "../mockdata";
//Types
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

const Projects: React.FC = () => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [footersData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Content
  useEffect(() => {
    (async () => {
      const [navlinkData, footerData] = await getProjectsContent();

      setNavLinks(navlinkData as NavLinksType);
      setFooterData({
        bank: footerData.bankaddressURL,
        contact: { email: footerData.email, location: footerData.location },
        socials: {
          twitter: footerData.twitterURL,
          facebook: footerData.facebookURL,
          instagram: footerData.instagramURL,
          youtube: footerData.youtubeURL,
        },
      });
    })();
  }, []);

  if (!navLinks || !footersData) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="Projects" />
      <main className="container m-auto">
        <h1 className="text-4xl text-center pt-10">Our Projects</h1>
        <ProjectsWidget countries={CountriesContent} pillars={["ff"]} />
        <ProjectList projects={ProjectsContent} />
        <br />
      </main>
      <Footer
        socialLinks={footersData.socials}
        contactInfo={footersData.contact}
        donateLink={footersData.bank}
      />
    </>
  );
};

export default Projects;
