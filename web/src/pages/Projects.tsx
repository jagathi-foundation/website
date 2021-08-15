import React, { useState, useEffect } from "react";
//Imports for the page
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import ProjectsWidget from "../components/ProjectsWidget";
import Spinner from "../components/Loader";
import Paginator from "../components/Paginator";
//Content Getter
import getProjectsContent from "../utils/GetProjectsContent";
//Types
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";
import { PillarsListType } from "../types/AboutTypes";
import { CountriesListType, ProjectsType } from "../types/ProjectTypes";

const Projects: React.FC = () => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [pillars, setPillars] = useState<PillarsListType | null>(null);
  const [projectCountries, setProjectCountries] =
    useState<CountriesListType | null>(null);
  const [projects, setProjects] = useState<ProjectsType | null>(null);
  const [footersData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Content
  useEffect(() => {
    (async () => {
      const [
        navlinkData,
        pillarsData,
        projectCountriesData,
        projectsData,
        footerData,
      ] = await getProjectsContent();

      setNavLinks(navlinkData as NavLinksType);
      setPillars(
        pillarsData.map((pillar: any) => pillar.name) as PillarsListType
      );
      setProjectCountries(
        projectCountriesData.map(
          (country: any) => country.name
        ) as CountriesListType
      );
      setProjects(projectsData as ProjectsType);
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

  if (!navLinks || !footersData || !pillars || !projectCountries || !projects) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="Projects" />
      <main className="container m-auto">
        <h1 className="text-4xl text-center pt-10">Our Projects</h1>
        <ProjectsWidget countries={projectCountries} pillars={pillars} />
        <ProjectList projects={projects} />
        <Paginator />
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
