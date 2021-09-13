import React from "react";
import {
  SocialLinksType,
  ContactInformationType,
  BankAddressType,
} from "../types/NavFooterTypes";

interface Props {
  socialLinks: SocialLinksType;
  contactInfo: ContactInformationType;
  donateLink: BankAddressType;
}

const Footer: React.FC<Props> = ({ socialLinks, contactInfo, donateLink }) => {
  const navg = (url: string) => {
    return () => {
      window.location.href = url;
    };
  };

  return (
    <footer className="w-full bg-black text-center text-white">
      <div className="flex justify-center lg:py-5 lg:flex-row flex-col pt-2 items-center">
        <div
          className="
              text-center
              px-5
              items-center
              justify-center
              m-auto
              lg:m-0 lg:py-0
              py-4
            "
        >
          <h1>Socials</h1>
          <div className="flex mt-2">
            <img
              src="images/twit.png"
              alt="tw"
              className="w-12 h-8 lg:mx-2 mx-1 cursor-pointer"
              onClick={navg(socialLinks.twitter)}
            />
            <div onClick={navg(socialLinks.facebook)}>
              <span
                className="iconify iconify text-3xl lg:mx-2 w-12 h-8 mx-1 cursor-pointer"
                data-inline="false"
                data-icon="logos:facebook"
              ></span>
            </div>
            <div onClick={navg(socialLinks.youtube)}>
              <span
                className="iconify text-3xl lg:mx-2 w-12 h-8 mx-1 cursor-pointer"
                data-inline="false"
                data-icon="logos:youtube-icon"
              ></span>
            </div>
            <img
              src="images/logos_instagram-icon.png"
              alt="insta"
              className="w-9 h-9 lg:mx-2 mx-1 cursor-pointer"
              onClick={navg(socialLinks.instagram)}
            />
          </div>
        </div>
        <div className="text-center lg:px-5 lg:m-0 m-auto py-4 lg:py-0">
          <h1>Get In Touch</h1>
          <h3
            className="md:flex cursor-pointer"
            onClick={navg("mailto:" + contactInfo.email)}
          >
            <span className="px-3">📧</span> {contactInfo.email}
          </h3>
          <h3 className="lg:flex">
            <span className="px-3">🏠</span>
            {contactInfo.location}
          </h3>
        </div>
        <div className="text-center px-5 lg:py-0 py-4">
          <h1>Donate</h1>
          <a href={donateLink}>
            <p>
              To donate, click{" "}
              <span className="text-yellow-500 cursor-pointer">here</span> and
              help.
            </p>
          </a>
        </div>
      </div>
      <div className="border-t-2 border-yellow-600 w-5/12 m-auto py-3 lg:pb-3 pb-6 text-lg">
        {new Date().getFullYear()} © All Rights Reserved by Jagathi Foundation.
        Created By{" "}
        <a href="https://bharadwaj.duggaraju.com" className="text-yellow-500">
          Bharadwaj Duggaraju
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
