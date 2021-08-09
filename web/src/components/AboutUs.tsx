import React from "react";
import { AboutFullContentType } from "../types/AboutTypes";

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
        src={aboutFullContent.img}
        alt="Company"
        className="
          w-10/12
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
          xl:w-10/12
          w-3/4
          text-center
          lg:flex-row
          flex-col
        "
      >
        {aboutFullContent.descs.map((contentItem, key) => {
          return (
            <div key={key}>
              <h1 className="text-3xl">{contentItem.name}</h1>
              <p className="py-4 text-lg px-1">
                {contentItem.desc}
              </p>
            </div>
          );
        })} 
      </div>
    </>
  );
};

export default AboutUs;
