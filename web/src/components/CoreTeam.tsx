import React from "react";
import { FounderType, CoreTeamListType } from "../types/AboutTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  founder: FounderType;
  coreTeam: CoreTeamListType;
}

const CoreTeam: React.FC<Props> = ({ founder, coreTeam }) => {
  return (
    <>
      <h1 className="text-4xl text-center pt-1 pb-5">Our Core Team</h1>
      <br />
      <div
        className="
        grid grid-rows-1 grid-cols-1
        gap-y-10
        xl:gap-y-10
        items-center
        justify-center
        m-auto
        place-items-center
        md:grid-cols-2 md:grid-rows-2
        lg:grid-cols-3 lg:grid-rows-2
        max-w-7xl
        people
      "
      >
        {coreTeam.map((person, key) => {
          return (
            <div
              className="bg-gray-300 mx-10 rounded-md shadow-lg cursor-pointer w-80"
              key={key}
            >
              <img
                src={cmsImg(person.image)}
                alt="W"
                className="rounded-t-md w-full object-cover object-center h-48"
              />
              <h1 className="text-center pt-4 text-2xl">{person.name}</h1>
              <p className="text-center pt-2 pb-4 px-3">{person.description}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
};

export default CoreTeam;
