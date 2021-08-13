import React, { useEffect, useState } from "react";
//Imports for this page.
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Pillars from "../components/Pillars";
import CoreTeam from "../components/CoreTeam";
import {
  AboutFull,
  PillarsList,
  CoreTeamContent,
  Founder,
} from "../mockdata";
//Content Getter
import getAboutContent from "../utils/GetAboutContent";
import Spinner from "../components/Loader";
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

const About: React.FC = () => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Content
  useEffect(() => {
    (async () => {
      const [navlinkData, aboutFullData, pillarsData, footerData] =
        await getAboutContent();

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

  // Loader
  if (!navLinks || !footerData) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} />
      <AboutUs aboutFullContent={AboutFull} />
      <Pillars pillars={PillarsList} />
      <CoreTeam coreTeam={CoreTeamContent} founder={Founder} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default About;
