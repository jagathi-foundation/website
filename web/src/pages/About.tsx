import React from "react";
//Imports for this page.
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Pillars from "../components/Pillars";
import CoreTeam from "../components/CoreTeam";
import {
  NavLinks,
  SocialLinksContent,
  ContactInfoContent,
  DonateLink,
  AboutFull,
  PillarsList,
  CoreTeamContent,
  Founder,
} from "../mockdata";

const About: React.FC = () => {
  return (
    <>
      <Navbar navLinks={NavLinks} />
      <AboutUs aboutFullContent={AboutFull} />
      <Pillars pillars={PillarsList} />
      <CoreTeam coreTeam={CoreTeamContent} founder={Founder} />
      <Footer
        socialLinks={SocialLinksContent}
        contactInfo={ContactInfoContent}
        donateLink={DonateLink}
      />
    </>
  );
};

export default About;
