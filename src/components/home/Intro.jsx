import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 dark:text-white font-bold">
        Mo
      </h1>
      <p className="text-base md:text-7x1 mb-1 md:mb-3  font-bold">
        React & NodeJS Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Hi there, I'm Muhammadjon Yakhyoev (Mo), an experienced React and NodeJS
        developer. I've built various web applications including personal
        projects like
        <a
          href="http://easydispatch.me"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
          target="_blank"
        >
          {" "}
          www.easydispatch.me{" "}
        </a>{" "}
        and professional projects at the bank where I worked. I specialize in
        building responsive UIs with AntDesign and TailwindCSS, implementing
        state management with Redux, back-end development using ExpressJS, and
        utilizing databases like MongoDB and PostgreSQL. If you need an
        experienced developer to bring your ideas to life, let's chat!
      </p>
    </div>
  );
};

export default Intro;
