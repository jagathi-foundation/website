import React from "react";
import { CountriesListType } from "../types/ProjectTypes";
import { PillarsListType } from "../types/AboutTypes";

interface Props {
  countries: CountriesListType;
  pillars: PillarsListType;
}

const ProjectsWidget: React.FC<Props> = ({ pillars, countries }) => {
  return (
    <>
      <section className="lg:justify-between flex w-full my-4 items-center lg:flex-row flex-col justify-center">
        <div className="flex space-x-5 lg:ml-16">
          <button className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md">
            A-Z
          </button>
          <button className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md">
            Z-A
          </button>
          <button className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md">
            Newest First
          </button>
          <button className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md">
            Oldest First
          </button>
        </div>
        <div className="flex space-x-3 lg:mr-16">
          <select
            name="Pillar"
            id="pillar"
            className="border-yellow-500 border-2 cursor-pointer py-1 px-1 bg-white"
          >
            <option value="All">All Pillars</option>
            {pillars.map((pillar, ind) => (
              <option value={pillar} key={ind}>
                {pillar}
              </option>
            ))}
          </select>
          <select
            name="Country"
            id="country"
            className="border-yellow-500 border-2 cursor-pointer py-1 px-1 bg-white"
          >
            <option value="All">All Countries</option>
            {countries.map((pillar, ind) => (
              <option key={ind} value={pillar}>
                {pillar}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};

export default ProjectsWidget;
