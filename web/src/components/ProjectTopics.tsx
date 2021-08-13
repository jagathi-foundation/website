import React from "react";
import { Link } from "react-router-dom";
import { ProjectTopicTypeList } from "../types/HomeTypes";

interface Props {
  projectTopics: ProjectTopicTypeList;
}

const ProjectTopics: React.FC<Props> = ({ projectTopics }) => {
  return (
    <>
      <h1 className="text-center pt-12 text-3xl px-6">
        Current Project Topics
      </h1>
      <div
        className="
          grid grid-rows-1 grid-cols-1
          gap-y-10
          xl:gap-y-0
          items-center
          justify-center
          m-auto
          my-5
          place-items-center
          md:grid-cols-2 md:grid-rows-2
          lg:grid-cols-3 lg:grid-rows-2
          max-w-7xl
        "
      >
        {projectTopics.map((topic, key) => {
          return (
            <Link to={`/projects?topic`} key={key}>
              <div
                className={`
                  bg-gray-300
                  rounded-md
                  shadow-lg
                  cursor-pointer
                  max-w-xs
                  ${key === projectTopics.length - 1 && "xl:my-5 my-0"}
                `}
              >
                <img
                  src={topic.img}
                  alt={topic.name}
                  className="rounded-t-md w-full object-fit object-cente"
                />
                <h1 className="text-center pt-4 text-2xl px-3">{topic.name}</h1>
                <p className="text-center pt-2 pb-4 px-3">{topic.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="w-full text-center">
        <Link to="/projects">
          <button className="mb-10 bg-yellow-500 text-white rounded px-5 py-1 text-xl">
            See All Projects
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectTopics;
