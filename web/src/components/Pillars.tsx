import React from "react";
import { PillarsListType } from "../types/AboutTypes";

interface Props {
  pillars: PillarsListType;
}

//Might change from 3 to 4
const Pillars: React.FC<Props> = ({ pillars }) => {
  return (
    <>
      <h1 className="text-4xl text-center">Our Pillars</h1>
      <div className="w-full bg-gray-300 my-10">
        <div
          className="
            flex
            justify-between
            items-center
            mx-auto
            max-w-6xl
            lg:flex-row
            flex-col
            text-center
          "
        >
          {pillars.map((pillar, key) => {
            return (
              <div className={`pb-5 lg:pt-5 pt-3`} key={key}>
                <span
                  className="iconify text-center w-10 m-auto my-3 text-5xl"
                  data-icon="mdi:pillar"
                  data-inline="false"
                ></span>
                <h1 className="text-3xl text-yellow-800">{pillar}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pillars;
