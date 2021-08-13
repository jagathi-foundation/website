import React, { useEffect, useState } from "react";
//Import for the different components on this page.
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Impact from "../components/Impact";
import ProjectTopics from "../components/ProjectTopics";
import Footer from "../components/Footer";
import Spinner from "../components/Loader";
import {
  ProjectTopicsContent,
  SocialLinksContent,
  ContactInfoContent,
  DonateLink,
} from "../mockdata";
// Content Getters
import getHomeContent from "../utils/GetHomeContent";
//Types
import { NavLinksType } from "../types/NavFooterTypes";
import {
  SlideItemTypeList,
  AboutBlobContentType,
  ImpactDataType,
} from "../types/HomeTypes";

const Home: React.FC = () => {
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [carouselItems, setCarouselItems] = useState<SlideItemTypeList | null>(
    null
  );
  const [aboutBlob, setAboutBlob] = useState<AboutBlobContentType | null>(null);
  const [impact, setImpact] = useState<ImpactDataType | null>(null);

  useEffect(() => {
    (async () => {
      const [navlinkData, carouselData, aboutBlobData, impactData] = await getHomeContent();

      setNavLinks(navlinkData as NavLinksType);
      setCarouselItems(carouselData as SlideItemTypeList);
      setAboutBlob(aboutBlobData as AboutBlobContentType);
      setImpact(impactData as ImpactDataType)
    })();
  }, []);

  if (!navLinks || !carouselItems || !aboutBlob) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} />
      <Carousel slides={carouselItems} />
      <AboutHome aboutBlob={aboutBlob} />
      <Impact impact={{ servedpeople: 1, volunteers: 2, workhours: 3 }} />
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
