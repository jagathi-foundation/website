import React from "react";
import { Link } from "react-router-dom";
import { AboutBlobContentType } from "../types/HomeTypes";

interface Props {
    aboutBlob: AboutBlobContentType
}

const AboutHome: React.FC<Props> = ({aboutBlob}) => {
  return (
    <>
      <h1 className="text-3xl text-center pt-10">Who Are We?</h1>
      <div className="flex justify-center w-4/5 mx-auto lg:my-5 mt-5 max-w-5xl flex-col lg:flex-row">
        <img
          src={aboutBlob.img}
          alt="Jagathi"
          style={{ maxHeight: "200px" }}
          className="w-96 lg:max-w-md object-cover object-center m-auto rounded"
        />
        <div className="lg:px-8 xl:text-xl text-lg text-center lg:text-left m-auto mx-3 lg:w-auto my-7">
          <p>
            {aboutBlob.desc}
          </p>
          <Link to="/about">
            <button className="my-5 bg-yellow-500 text-white rounded px-5 lg:py-1 py-3">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
