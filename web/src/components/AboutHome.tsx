import React from "react";
import { Link } from "react-router-dom";
import { AboutBlobContentType } from "../types/HomeTypes";
import cmsImg from "../utils/CMSImg";

interface Props {
  aboutBlob: AboutBlobContentType;
}

const AboutHome: React.FC<Props> = ({ aboutBlob }) => {
  return (
    <section>
      <h1 className="text-3xl text-center pt-10">Our Mission</h1>
      <div className="flex justify-start w-4/5 mx-auto lg:my-5 mt-5  flex-col lg:flex-row max-w-7xl">
        <img
          src={cmsImg(aboutBlob.image)}
          alt="Jagathi"
          style={{ maxHeight: "300px" }}
          className=" lg:max-w-md object-center rounded shadow-sm"
        />
        <div className="lg:px-8 text-lg py-5 lg:py-0 text-left lg:w-auto ">
          <p>{aboutBlob.description}</p>
          <Link to="/about">
            <button className="my-5 bg-yellow-500 text-white rounded px-5 lg:py-1 py-3">
              Read More...
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
