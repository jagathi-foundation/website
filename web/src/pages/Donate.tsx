import React, { useEffect, useState } from "react";
//Import for the different components on this page.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Loader";
import DonateWidget from "../components/DonateWidget";
// Content Getter
import getDonateContent from "../utils/GetDonateContent";
//Types
import {
  NavLinksType,
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";
import { RouteComponentProps } from "react-router";
import { DonateInformationType, SponsorsType } from "../types/DonateTypes";

const Donate: React.FC<RouteComponentProps> = ({ match }) => {
  //State
  const [navLinks, setNavLinks] = useState<NavLinksType | null>(null);
  const [donateInfo, setDonateInfo] = useState<DonateInformationType | null>(
    null
  );
  const [sponsors, setSponsors] = useState<SponsorsType | null>(null);
  const [footerData, setFooterData] = useState<{
    socials: SocialLinksType;
    contact: ContactInformationType;
    bank: BankAddressType;
  } | null>(null);

  //Get Data
  useEffect(() => {
    (async () => {
      const [navlinkData, donateData, sponsorsData, footerData] =
        await getDonateContent();

      setNavLinks(navlinkData as NavLinksType);
      setDonateInfo(donateData);
      setSponsors(sponsorsData);
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
  if (!navLinks || !footerData || !sponsors || !donateInfo) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar navLinks={navLinks} page="Donate" url={match} />
      <DonateWidget sponsors={sponsors} donateInformation={donateInfo} />
      <Footer
        socialLinks={footerData.socials}
        contactInfo={footerData.contact}
        donateLink={footerData.bank}
      />
    </>
  );
};

export default Donate;
