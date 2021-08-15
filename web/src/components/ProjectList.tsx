import React from "react";
import { ProjectsType } from "../types/ProjectTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  projects: ProjectsType;
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
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
          my-10
          projects
        "
    >
      {projects.map((project, ind) => {
        return (
          <div
            className="bg-gray-300 mx-10 rounded-md shadow-lg cursor-pointer max-w-xs"
            key={ind}
          >
            <img
              src={cmsImg(project.image)}
              alt="W"
              className="rounded-t-md w-full object-fit object-center"
            />
            <h1 className="text-center pt-4 text-2xl">{project.name}</h1>
            <p className="text-center pt-2 pb-4 px-3">{project.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
