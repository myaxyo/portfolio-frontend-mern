import { Avatar, List, Space } from "antd";
import React, { useEffect, useState } from "react";
import { EditFilled, DeleteFilled, ProjectFilled } from "@ant-design/icons";
import useFetch from "../../hooks/useFetch";
import { deleteItem, setProjects } from "../../store/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import EditProjectModal from "./EditProjectModal";

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { deleteData } = useFetch(`${import.meta.env.VITE_API_HOST}/projects`, {
    "key-api": `${import.meta.env.VITE_API_KEY}`,
  });
  const handleDelete = async (id) => {
    await deleteData(id);
    dispatch(deleteItem(id));
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/projects`, {
      headers: {
        "key-api": `${import.meta.env.VITE_API_KEY}`,
      },
    });
    const data = await response.json();
    dispatch(setProjects(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <List
      itemLayout="vertical"
      size="large"
      style={{ overflow: "auto", padding: "30px", maxHeight: "100vh" }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={projects}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <EditFilled
              style={{ cursor: "pointer", ontSize: "26px", color: "#08c" }}
              key="list-vertical-star-o"
              onClick={() => setIsModalVisible(true)}
            />,
            <DeleteFilled
              style={{ cursor: "pointer", ontSize: "26px", color: "red" }}
              key="list-vertical-like-o"
              onClick={() => handleDelete(item._id)}
            />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={`data:${item.image.contentType};base64,${item.image.data}`}
            />
          }
        >
          <List.Item.Meta
            avatar={
              <ProjectFilled style={{ fontSize: "26px", color: "#08c" }} />
            }
            title={<a href={item.href}>{item.title}</a>}
            description={item.url}
          />
          {item.stack}
          <EditProjectModal
            project={item}
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            onUpdate={() => {
              setIsModalVisible(false);
              fetchData();
            }}
          />
        </List.Item>
      )}
    />
  );
};
export default Projects;
