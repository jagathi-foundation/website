import React, { useEffect, useState } from "react";
//Import for the different components on this page.
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Impact from "../components/Impact";
import PillarsHome from "../components/PiilarsHome";
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
import { RouteComponentProps } from "react-router";

const Home: React.FC<RouteComponentProps> = ({ match }) => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [carouselItems, setCarouselItems] = useState<SlideItemTypeList | null>(
    null
  );
  const [aboutBlob, setAboutBlob] = useState<AboutBlobContentType | null>(null);
  const [impact, setImpact] = useState<ImpactDataType | null>(null);
  const [pillars, setPillars] = useState<ProjectTopicTypeList | null>(null);

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
        pillarsData,
        footerData,
      ] = await getHomeContent();

      setNavLinks(navlinkData as NavLinksType);
      setCarouselItems(carouselData as SlideItemTypeList);
      setAboutBlob(aboutBlobData as AboutBlobContentType);
      setImpact(impactData as ImpactDataType);
      setPillars(pillarsData as ProjectTopicTypeList);
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
    !pillars ||
    !footerData
  ) {
    return <Spinner />;
  }

  return (
    <>
      {/* <div id="curtain" className="absolute top-0 right-0 flex flex-row z-10 w-screen h-screen m-0 p-0" >
        <img alt="curtain" src="images/curtain1.jpg" className="w-2/4 h-screen"/>
        <img alt="curtain" src="images/curtain2.jpg" className="w-2/4 h-screen"/>
        <h1 className="text-8xl text-blue-400 absolute text-center align-middle">Welcome to Jagathi Foundation</h1>
      </div> */}
      <Navbar navLinks={navLinks} page="Home" url={match} />
      <Carousel slides={carouselItems} />
      <AboutHome aboutBlob={aboutBlob} />
      <Impact impact={impact} />
      <PillarsHome pillars={pillars} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default Home;
