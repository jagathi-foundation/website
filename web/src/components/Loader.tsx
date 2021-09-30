import React from "react";
import Spinner from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Spinner type="BallTriangle" color="black" height={50} width={50} />
      <div className="flex items-center cursor-pointer my-8">
        <img src="logo.png" alt="Logo" className="w-11 h-11" />
        <h1 className="text-3xl px-3">Jagathi Foundation</h1>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
