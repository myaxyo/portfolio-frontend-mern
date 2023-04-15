import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Jobs, AddJob, AddProject, Projects } from "../components/admin";

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const Admin = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    localStorage.getItem("selectedMenuItem") || "view-projects"
  );

  useEffect(() => {
    document.title = "Admin";
    localStorage.setItem("selectedMenuItem", selectedMenuItem);
  }, [selectedMenuItem]);

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "add-project":
        return <AddProject />;
      case "view-projects":
        return <Projects />;
      case "add-job":
        return <AddJob />;
      case "view-jobs":
        return <Jobs />;
      default:
        return <div>Content Goes Here</div>;
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider style={{ padding: "20px 0px" }}>
        <Menu
          theme="dark"
          selectedKeys={[selectedMenuItem]}
          onSelect={(item) => setSelectedMenuItem(item.key)}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="Projects">
            <Menu.Item key="view-projects">View Projects</Menu.Item>
            <Menu.Item key="add-project">Add Project</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<NotificationOutlined />} title="Jobs">
            <Menu.Item key="view-jobs">View Jobs</Menu.Item>
            <Menu.Item key="add-job">Add Job</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{}}>
          <div
            className="site-layout-content"
            style={{ background: "#fff", minHeight: 280 }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
