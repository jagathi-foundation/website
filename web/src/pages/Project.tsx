import React, { useState, useEffect } from "react";
//Page Components
import Spinner from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProject from "../components/SingleProject";
//Page Content Getter
import getProjectContent from "../utils/GetProjectContent";
//Types
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";
import { ProjectType } from "../types/ProjectTypes";
import { RouteComponentProps } from "react-router";

const Project: React.FC<RouteComponentProps> = ({ match }) => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  const [projectData, setProjectData] = useState<ProjectType | null>(null);
  const id = (match.params as any).blob as string;
  useEffect(() => {
    (async () => {
      const [navData, footerData, projectData] = await getProjectContent(id);
      setProjectData(projectData as ProjectType);
      setNavLinks(navData as NavLinksType);
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
  }, [id]);

  if (!navLinks || !footerData || !projectData) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="Home" url={match} />
      <SingleProject project={projectData} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default Project;
