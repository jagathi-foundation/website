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
import { RouteComponentProps } from 'react-router';

const Projects: React.FC<RouteComponentProps> = ({match}) => {
  //Topic String
  const pillarV = new URLSearchParams(window.location.search).get("topic");
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
  const [projectPillarFilter, setProjectPillarFilter] = useState<string>(
    pillarV ?? "All"
  );
  const [countryFilter, setCountryFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("none");
  const [paginator, setPaginator] = useState<number>(1);

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

  const widgetProps = {
    projectPillarFilter,
    setProjectPillarFilter,
  };

  let filteredProjects: ProjectsType = [];

  if (projectPillarFilter === "All") {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter(
      (project) =>
        (project as any).pillars
          .map((p: any) => p.name)
          .includes(projectPillarFilter) && project
    );
  }

  if (countryFilter !== "All") {
    filteredProjects = filteredProjects.filter(
      (project) =>
        (project as any).project_countries
          .map((p: any) => p.name)
          .includes(countryFilter) && project
    );
  }

  if (sort === "AZ") {
    filteredProjects = filteredProjects.sort((bef, now) => {
      const sortedNames = [bef.name, now.name].sort();

      if (sortedNames[0] === bef.name) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  if (sort === "ZA") {
    filteredProjects = filteredProjects.sort((bef, now) => {
      const sortedNames = [bef.name, now.name].sort();

      if (sortedNames[0] === bef.name) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  if (sort === "New") {
    filteredProjects = filteredProjects.sort((bef, now) => {
      const befDate = new Date(bef.projectstart);
      const nowDate = new Date(now.projectstart);

      if (befDate > nowDate) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  if (sort === "Old") {
    filteredProjects = filteredProjects.sort((bef, now) => {
      const befDate = new Date(bef.projectstart);
      const nowDate = new Date(now.projectstart);

      if (befDate > nowDate) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  const filteredProjectsUnP = filteredProjects

  console.log(filteredProjectsUnP.length)

  filteredProjects = filteredProjects.slice(0, 9 * paginator);

  return (
    <>
      <Navbar navLinks={navLinks} page="Projects" url={match}/>
      <main className="container m-auto">
        <h1 className="text-4xl text-center pt-10">Our Projects</h1>
        <ProjectsWidget
          countries={projectCountries}
          pillars={pillars}
          {...widgetProps}
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
          setSort={setSort}
        />
        <ProjectList projects={filteredProjects} />
        <Paginator
          len={filteredProjectsUnP.length}
          plen={paginator}
          setPlen={setPaginator}
        />
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
