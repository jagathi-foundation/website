import React, { useEffect, useState } from "react";
//Imports for this page.
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import CoreTeam from "../components/CoreTeam";
//Content Getter
import getAboutContent from "../utils/GetAboutContent";
//Loader
import Spinner from "../components/Loader";
import { RouteComponentProps } from "react-router";
//Types
import {
  AboutFullContentType,
  FounderType,
  CoreTeamListType,
} from "../types/AboutTypes";
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

const About: React.FC<RouteComponentProps> = ({ match }) => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [aboutFull, setAboutFull] = useState<AboutFullContentType | null>(null);
  const [founder, setFounder] = useState<FounderType | null>(null);
  const [coreTeam, setCoreTeam] = useState<CoreTeamListType | null>(null);
  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Content
  useEffect(() => {
    (async () => {
      const [
        navlinkData,
        aboutFullData,
        founderData,
        coreTeamData,
        footerData,
      ] = await getAboutContent();

      setNavLinks(navlinkData as NavLinksType);
      setAboutFull(aboutFullData as AboutFullContentType);
      setFounder(founderData as FounderType);
      setCoreTeam(coreTeamData as CoreTeamListType);
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

  // Loader
  if (!navLinks || !footerData || !aboutFull || !founder || !coreTeam) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="About" url={match} />
      <AboutUs aboutFullContent={aboutFull} />

      <CoreTeam coreTeam={coreTeam} founder={founder} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default About;
