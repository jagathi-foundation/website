import React from "react";
import { Link } from "react-router-dom";
import { ProjectsType } from "../types/ProjectTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  projects: ProjectsType;
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.length === 0 && <h1 className="text-center text-2xl mt-10 text-yellow-600">No Projects Found!</h1>}
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
          max-w-5xl 
          my-7
          projects
        "
      > 
        {projects.length > 0 &&
          projects.map((project, ind) => {
            return (
              <Link
                className="bg-gray-300 border-yellow-500 mx-10 rounded-md shadow-lg cursor-pointer max-w-xs border-2"
                key={ind}
                to={`/projects/${project.name.toLowerCase().replace(" ", "-").replace(".", "")}`}
              >
                <img
                  src={cmsImg(project.image)}
                  alt="W"
                  className="rounded-t-md w-256 h-144"
                  style={{ minHeight: "144px" }}
                />
                <h1 className="text-center pt-4 text-2xl">{project.name}</h1>
                <p className="text-center pt-2 pb-4 px-3">
                  {project.description}
                </p>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ProjectList;
