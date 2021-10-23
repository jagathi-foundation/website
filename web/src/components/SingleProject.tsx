import React from "react";
import { ProjectType } from "../types/ProjectTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  project: ProjectType;
}

const SingleProject: React.FC<Props> = ({ project }) => {
  return (
    <div style={{ marginTop: "10.6rem" }}>
      <section className="flex flex-col justify-center text-center">
        <h1
          className="text-center text-4xl text-yellow-500 pb-10"
          style={{ textTransform: "capitalize" }}
        >
          {project.name}
        </h1>
        <img
          className="object-center max-w-xl pb-10 mx-auto"
          src={cmsImg(project.image)}
          alt="project description"
        ></img>
        <h2 className="text-justify text-xl pb-10 lg:mx-80 mx-48">
          {project!.description}
        </h2>
      </section>
    </div>
  );
};

export default SingleProject;
