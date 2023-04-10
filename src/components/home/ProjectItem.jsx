import React from "react";

const ProjectItem = ({ title, imgUrl, stack, link }) => {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={`data:${imgUrl.contentType};base64,${imgUrl.data}`}
        alt="project"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 dark:text-white font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.split(",").map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold dark:text-white border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
