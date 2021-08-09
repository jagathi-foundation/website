import React, { useState } from "react";
//Import for the different components on this page.
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Impact from "../components/Impact";
import ProjectTopics from "../components/ProjectTopics";
import Footer from "../components/Footer";
import Spinner from "../components/Loader";
import {
  NavLinks,
  Slides,
  AboutBlob,
  ImpactContent,
  ProjectTopicsContent,
  SocialLinksContent,
  ContactInfoContent,
  DonateLink,
} from "../mockdata";

const Home: React.FC = () => {
  const [HomePageData] = useState({});

  if (!HomePageData) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={NavLinks} />
      <Carousel slides={Slides} />
      <AboutHome aboutBlob={AboutBlob} />
      <Impact impact={ImpactContent} />
      <ProjectTopics projectTopics={ProjectTopicsContent} />
      <Footer
        socialLinks={SocialLinksContent}
        contactInfo={ContactInfoContent}
        donateLink={DonateLink}
      />
    </>
  );
};

export default Home;
