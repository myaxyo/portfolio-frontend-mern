import React from "react";
import ProjectItem from "./ProjectItem";
import useFetch from "../../hooks/useFetch";

const Portfolio = () => {
  const {
    data: projects,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_API_HOST}/projects`, {
    "key-api": `${import.meta.env.VITE_API_KEY}`,
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length === 0 ? (
          <div className="text-center">
            Sorry, there is no project for now :(
          </div>
        ) : (
          projects.map((project) => (
            <ProjectItem
              key={project._id}
              title={project.title}
              stack={project.stack}
              link={project.link}
              imgUrl={project.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Portfolio;
