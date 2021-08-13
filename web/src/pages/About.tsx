import React, { useEffect, useState } from "react";
//Imports for this page.
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Pillars from "../components/Pillars";
import CoreTeam from "../components/CoreTeam";
import { CoreTeamContent } from "../mockdata";
//Content Getter
import getAboutContent from "../utils/GetAboutContent";
//Loader
import Spinner from "../components/Loader";
//Types
import {
  AboutFullContentType,
  PillarsListType,
  FounderType,
} from "../types/AboutTypes";
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

const About: React.FC = () => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [aboutFull, setAboutFull] = useState<AboutFullContentType | null>(null);
  const [pillars, setPillars] = useState<PillarsListType | null>(null);
  const [founder, setFounder] = useState<FounderType | null>(null);
  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Content
  useEffect(() => {
    (async () => {
      const [navlinkData, aboutFullData, pillarsData, founderData, footerData] =
        await getAboutContent();

      setNavLinks(navlinkData as NavLinksType);
      setAboutFull(aboutFullData as AboutFullContentType);
      setPillars(
        pillarsData.map((pillar: any) => pillar.name) as PillarsListType
      );
      setFounder(founderData as FounderType);
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
  if (!navLinks || !footerData || !aboutFull || !pillars || !founder) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} />
      <AboutUs aboutFullContent={aboutFull} />
      <Pillars pillars={pillars} />
      <CoreTeam coreTeam={CoreTeamContent} founder={founder} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default About;
