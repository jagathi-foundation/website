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
            <span
              className="iconify text-center w-10 m-auto my-3 text-5xl text-yellow-800"
              data-inline="false"
              data-icon="akar-icons:heart"
            ></span>
            <h1 className="lg:text-2xl text-xl">
              <sup className="lg:text-xl text-lg text-yellow-800 px-1">
                {impact.servedpeople}
              </sup>
              People Served
            </h1>
          </div>
          <div className="py-5 lg:px-10 px-6">
            <span
              className="iconify text-center m-auto my-3 text-5xl text-yellow-800"
              data-icon="bi:person"
              data-inline="false"
            ></span>
            <h1 className="lg:text-2xl text-xl">
              <sup className="lg:text-xl text-lg text-yellow-800 px-1">
                {impact.volunteers}
              </sup>
              Volunteers
            </h1>
          </div>
          <div className="py-5 lg:px-10 px-6">
            <span
              className="iconify text-center text-5xl m-auto my-3 text-yellow-800"
              data-inline="false"
              data-icon="ant-design:field-time-outlined"
            ></span>
            <h1 className="lg:text-2xl text-xl">
              <sup className="lg:text-xl text-lg text-yellow-800 px-1">
                {impact.workhours}
              </sup>
              Work Hours
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
