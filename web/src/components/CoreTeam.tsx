import React from "react";
import { FounderType, CoreTeamListType } from "../types/AboutTypes";

interface Props {
  founder: FounderType;
  coreTeam: CoreTeamListType;
}

const CoreTeam: React.FC<Props> = ({ founder, coreTeam }) => {
  return (
    <>
      <h1 className="text-4xl text-center pt-5">Our Core Team</h1>
      <div
        className="
          flex
          justify-center
          w-4/5
          mx-auto
          my-10
          max-w-5xl
          lg:flex-row
          flex-col
          items-center
          lg:text-left
          text-center
        "
      >
        <img
          src={founder.img}
          alt="Founder"
          className="
            max-w-md
            w-48
            h-48
            rounded-full
            object-cover object-center
            shadow-md
          "
        />
        <div className="px-8 text-xl pt-11 lg:py-0">
          <h1 className="text-3xl">{founder.name} - Founder</h1>
          <p className="pt-5">{founder.desc}</p>
        </div>
      </div>
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
              className="bg-gray-300 mx-10 rounded-md shadow-lg cursor-pointer max-w-xs"
              key={key}
            >
              <img
                src={person.img}
                alt="W"
                className="rounded-t-md w-full object-fit object-center"
              />
              <h1 className="text-center pt-4 text-2xl">{person.name}</h1>
              <p className="text-center pt-2 pb-4 px-3">{person.desc}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default CoreTeam;
