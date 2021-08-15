import React, { useEffect, useState } from "react";
//Import for the different components on this page.
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Impact from "../components/Impact";
import ProjectTopics from "../components/ProjectTopics";
import Footer from "../components/Footer";
import Spinner from "../components/Loader";

// Content Getter
import getHomeContent from "../utils/GetHomeContent";
//Types
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";
import {
  SlideItemTypeList,
  AboutBlobContentType,
  ImpactDataType,
  ProjectTopicTypeList,
} from "../types/HomeTypes";

const Home: React.FC = () => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [carouselItems, setCarouselItems] = useState<SlideItemTypeList | null>(
    null
  );
  const [aboutBlob, setAboutBlob] = useState<AboutBlobContentType | null>(null);
  const [impact, setImpact] = useState<ImpactDataType | null>(null);
  const [projectTopics, setProjectTopics] =
    useState<ProjectTopicTypeList | null>(null);

  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Data
  useEffect(() => {
    (async () => {
      const [
        navlinkData,
        carouselData,
        aboutBlobData,
        impactData,
        projectTopicsData,
        footerData,
      ] = await getHomeContent();

      setNavLinks(navlinkData as NavLinksType);
      setCarouselItems(carouselData as SlideItemTypeList);
      setAboutBlob(aboutBlobData as AboutBlobContentType);
      setImpact(impactData as ImpactDataType);
      setProjectTopics(projectTopicsData as ProjectTopicTypeList);
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
  if (
    !navLinks ||
    !carouselItems ||
    !aboutBlob ||
    !impact ||
    !projectTopics ||
    !footerData
  ) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="Home"/>
      <Carousel slides={carouselItems} />
      <AboutHome aboutBlob={aboutBlob} />
      <Impact impact={impact} />
      <ProjectTopics projectTopics={projectTopics} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default Home;
