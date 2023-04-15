import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const [path, setPath] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === `/${import.meta.env.VITE_ADMIN_PATH}`) {
      setPath(!path);
    }
  }, []);
  useEffect(() => {
    document.title = "Not Found";
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="pb-3 text-2xl">
          {path && !path
            ? "Sorry, the page is not found."
            : "Please login first."}
        </h1>
        {path && !path ? (
          <a
            href="/"
            className="py-3 rounded cursor-pointer px-6 bg-green-400 text-white"
          >
            Back home
          </a>
        ) : (
          <a
            href="/login"
            className="py-3 rounded cursor-pointer px-6 bg-green-400 text-white"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default NotFound;
