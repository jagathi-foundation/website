import React from "react";
import { ImpactDataType } from "../types/HomeTypes";

interface Props {
  impact: ImpactDataType;
}

const Impact: React.FC<Props> = ({ impact }) => {
  return (
    <>
      <h1 className="text-center text-3xl pb-8">Our Impact</h1>
      <div className="w-full bg-gray-300">
        <div className="flex justify-between items-center m-auto max-w-7xl md:flex-row flex-col">
          <div className="pb-5 pt-3 lg:pt-5 lg:px-10 px-6">
          <span className="iconify  text-center m-auto my-3 text-3xl text-yellow-800" data-icon="grommet-icons:projects"></span>
            <h1 className="lg:text-2xl text-xl text-yellow-600 px-1 text-center">
            {impact.projectcount}
            </h1>
            <h1 className="lg:text-2xl text-xl">
              Projects
            </h1>
          </div>
          <div className="py-5 lg:px-10 px-6 lg:pl-28">
            <span
              className="iconify text-center m-auto my-3 text-4xl text-yellow-800"
              data-icon="fluent:people-audience-24-filled"
              data-inline="false"
            ></span>
            <h1 className="lg:text-2xl text-xl text-yellow-600 px-1 text-center">
            {impact.volunteers}
            </h1>
            <h1 className="lg:text-2xl text-xl">
              Volunteers
            </h1>
          </div>
          <div className="py-5 lg:px-10 px-6">
            <span
              className="iconify text-center text-4xl m-auto my-3 text-yellow-800"
              data-inline="false"
              data-icon="ant-design:field-time-outlined"
            ></span>
            <h1 className="lg:text-2xl text-xl text-yellow-600 px-1 text-center">
              {impact.volunteerhours}
            </h1>
            <h1 className="lg:text-2xl text-xl">
              Volunteer Hours
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
