import React from "react";
import { CountriesListType } from "../types/ProjectTypes";
import { PillarsListType } from "../types/AboutTypes";

interface Props {
  countries: CountriesListType;
  pillars: PillarsListType;
  projectPillarFilter: string;
  setProjectPillarFilter: React.Dispatch<React.SetStateAction<string>>;
  countryFilter: string;
  setCountryFilter: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectsWidget: React.FC<Props> = ({
  pillars,
  countries,
  projectPillarFilter,
  setProjectPillarFilter,
  countryFilter,
  setCountryFilter,
  setSort,
}) => {
  return (
    <div style={{marginTop: "4.1rem"}}>
      <section className="lg:justify-between flex w-full my-4 items-center lg:flex-row flex-col justify-center">
        <div className="flex space-x-5 lg:ml-16">
          <button
            className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md"
            onClick={() => setSort("AZ")}
          >
            A-Z
          </button>
          <button
            className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md"
            onClick={() => setSort("ZA")}
          >
            Z-A
          </button>
          <button
            className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md"
            onClick={() => setSort("New")}
          >
            Newest First
          </button>
          <button
            className="my-5 bg-yellow-500 text-white rounded px-5 py-1 hover:bg-yellow-600 shadow-md"
            onClick={() => setSort("Old")}
          >
            Oldest First
          </button>
        </div>
        <div className="flex space-x-3 lg:mr-16">
          <select
            name="Pillar"
            id="pillar"
            className="border-yellow-500 border-2 cursor-pointer py-1 px-1 bg-white"
            onChange={(e: any) => {
              setProjectPillarFilter(e.target.value);
            }}
            value={projectPillarFilter}
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
            value={countryFilter}
            onChange={(e: any) => {
              setCountryFilter(e.target.value);
            }}
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
    </div>
  );
};

export default ProjectsWidget;
