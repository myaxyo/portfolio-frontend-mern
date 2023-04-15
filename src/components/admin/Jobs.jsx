import React, { useEffect, useState } from "react";
import { List } from "antd";
import {
  EditFilled,
  DeleteFilled,
  NotificationFilled,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import useFetch from "../../hooks/useFetch";
import { setJobs, deleteItem } from "../../store/jobSlice";
import EditJobModal from "./EditJobModal";

const Jobs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [job, setJob] = useState({});
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const { deleteData } = useFetch(`${import.meta.env.VITE_API_HOST}/jobs`, {
    "key-api": `${import.meta.env.VITE_API_KEY}`,
  });

  const handleDelete = async (id) => {
    await deleteData(id);
    dispatch(deleteItem(id));
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/jobs`, {
      headers: {
        "key-api": `${import.meta.env.VITE_API_KEY}`,
      },
    });
    const data = await response.json();
    dispatch(setJobs(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        style={{ overflow: "auto", padding: "30px", maxHeight: "100vh" }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={jobs}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <EditFilled
                style={{ cursor: "pointer", ontSize: "26px", color: "#08c" }}
                key="list-vertical-star-o"
                onClick={() => {
                  setIsModalVisible(true);
                  setJob(item);
                }}
              />,
              <DeleteFilled
                onClick={() => handleDelete(item._id)}
                style={{ cursor: "pointer", ontSize: "26px", color: "red" }}
                key="list-vertical-like-o"
              />,
            ]}
            extra={<h1></h1>}
          >
            <List.Item.Meta
              avatar={
                <NotificationFilled
                  style={{ fontSize: "26px", color: "#08c" }}
                />
              }
              title={
                <div>
                  <h4>
                    {item.title}{" "}
                    <span className="text-stone-500 pl-3 text-sm font-light">
                      {item.type}
                    </span>
                  </h4>
                </div>
              }
              description={`${item.company} in ${item.location}`}
            />
            {item.details}
            <EditJobModal
              visible={isModalVisible}
              onCancel={() => setIsModalVisible(false)}
              job={job}
              onJobUpdated={() => {
                setIsModalVisible(false);
                fetchData();
              }}
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default Jobs;
