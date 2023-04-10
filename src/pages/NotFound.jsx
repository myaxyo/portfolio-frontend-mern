import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  console.log(window.location.href);
  const location = useLocation();
  const navigate = useNavigate();
  if (location.pathname.endsWith("/admin")) {
    navigate("/login");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="pb-3 text-2xl">Sorry, the page is not found.</h1>
        <a
          href="/"
          className="py-3 rounded cursor-pointer px-6 bg-green-400 text-white"
        >
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
