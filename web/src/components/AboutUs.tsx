import React from "react";
import { AboutFullContentType } from "../types/AboutTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  aboutFullContent: AboutFullContentType;
}

const AboutUs: React.FC<Props> = ({ aboutFullContent }) => {
  return (
    <>
      <h1 className="lg:text-4xl text-center pt-10 text-3xl">
        The Jagathi Foundation
      </h1>
      <img
        src={cmsImg(aboutFullContent.coverimg)}
        alt="Company"
        className="
          w-8/12
          h-56
          object-cover object-center
          mx-auto
          my-10
          rounded-md
          shadow-md
        "
      />
      <div
        className="
          flex
          justify-between
          mx-auto
          my-10
          xl:w-8/12
          w-3/4
          text-center
          lg:flex-row
          flex-col
        "
      >
        <div>
          <h1 className="text-3xl">Our Vision</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.ourvision}</p>
        </div>
        <div>
          <h1 className="text-3xl">Founding Story</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.foundingstory}</p>
        </div>
        <div>
          <h1 className="text-3xl">What We Do</h1>
          <p className="py-4 text-lg px-1">{aboutFullContent.whatwedo}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
