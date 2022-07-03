import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BuildOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        bottom: 0,
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <BuildOutlined />
          <span className="nav-text">TaskQue</span>
        </Menu.Item>
        <Menu.Item key="2">
          <BuildOutlined />
          <span className="nav-text">Kafka Consumer</span>
        </Menu.Item>
        <Menu.Item key="3">
          <BuildOutlined />
          <span className="nav-text">Redis Subscriber</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BuildOutlined />
          <span className="nav-text">PostgreSQL Listener</span>
        </Menu.Item>
        <Menu.Item key="5">
          <BuildOutlined />
          <span className="nav-text">REST</span>
        </Menu.Item>
        <Menu.Item key="6">
          <BuildOutlined />
          <span className="nav-text">GraphQL</span>
        </Menu.Item>
        <Menu.Item key="7">
          <BuildOutlined />
          <span className="nav-text">GRPC</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
