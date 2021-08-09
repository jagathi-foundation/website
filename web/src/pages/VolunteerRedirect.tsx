import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const VolunteerRedirect: React.FC = () => {
  useEffect(() => {
    const redirect = setTimeout(
      () =>
        (window.location.href =
          "https://docs.google.com/forms/d/e/1FAIpQLSdl5uUTEoJkEigqC27qbqM9Jxbr1UKYdtXWwHk-C0PzK5Y8fA/formResponse"),
      2000
    );

    return () => {
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div className="font-main flex justify-center align-center mt-5">
      Redirecting to Volunteer Form.{" "}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdl5uUTEoJkEigqC27qbqM9Jxbr1UKYdtXWwHk-C0PzK5Y8fA/formResponse"
        className="text-blue-400 redirect mx-2"
        target="_blank"
        rel="noreferrer"
      >
        Click here if you are not redirected after four seconds.
      </a>{" "}
      |{" "}
      <Link to="/" className="text-blue-400 ml-2">
        Cancel
      </Link>
    </div>
  );
};

export default VolunteerRedirect;
