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
      }}
    >
      <Spinner type="TailSpin" color="orange" height={50} width={50} />
    </div>
  );
};

export default Loader;
