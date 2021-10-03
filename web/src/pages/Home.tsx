import React, { useEffect, useState } from "react";
//Import for the different components on this page.
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Impact from "../components/Impact";
import PillarsHome from "../components/PiilarsHome";
import Footer from "../components/Footer";
import Spinner from "../components/Loader";
import CurtainRevealBox from "react-curtain-reveal";

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
  const [opened, setOpened] = useState(false);

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

  //When launch is done, change the courosel
  return (
    <>
      {opened || (localStorage as any).open === "true" ? (
        <>
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
      ) : (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <CurtainRevealBox
            onReveal={() => {
              (localStorage as any).open = "true";
              setTimeout(() => {
                setOpened(true);
              }, 5000);
            }}
            styleConfig={{
              curtain: {
                borderRadius: 0,
                zIndex: "0",
              },
              leftPanel: {
                background:
                  "url('https://th.bing.com/th/id/R.b090a29f7eb76f10aa78ac389c28307b?rik=mFnktnKV5x%2flQQ&pid=ImgRaw&r=0')",
                backgroundPosition: "center",
                backgroundRepeat: "norepeat",
                backgroundSize: "cover",
              },
              rightPanel: {
                background:
                  "url('https://th.bing.com/th/id/R.b090a29f7eb76f10aa78ac389c28307b?rik=mFnktnKV5x%2flQQ&pid=ImgRaw&r=0') ",
                backgroundPosition: "center",
                backgroundRepeat: "norepeat",
                backgroundSize: "cover",
              },
              content: {
                backgroundColor: "#fcfcf4",
              },
            }}
            animationConfig={{
              variant: "ease-in-out",
              speed: 5,
            }}
          >
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
          </CurtainRevealBox>
          {/* <div id="welcome">
            <h1
              className="absolute top-20 left-20   text-blue-500 pointer-events-none"
              style={{
                fontSize: "8rem",
                visibility: !opened ? "visible" : "hidden",
              }}
            >
              Jagathi Foundation Welcomes You!
            </h1>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Home;
