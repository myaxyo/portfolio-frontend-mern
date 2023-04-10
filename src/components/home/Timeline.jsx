import React from "react";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import useFetch from "../../hooks/useFetch";

const Timeline = () => {
  const {
    data: jobs,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_API_HOST}/jobs`, {
    "key-api": `${import.meta.env.VITE_API_KEY}`,
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Sorry, We have problem with server.</div>;
  }
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 ">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {jobs.map((item) => (
          <TimelineItem
            company={item.company}
            durations={item.durations}
            type={item.type}
            title={item.title}
            details={item.details}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
