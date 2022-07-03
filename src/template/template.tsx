import { Layout } from "antd";
import React from "react";
import logo from "assets/candigologo.png";
import SideMenu from "template/sidemenu";
import HeaderMenu from "template/header";
import "template/template.scss";

const { Footer, Content } = Layout;

const Template = () => (
  <Layout>
    <HeaderMenu />
    <Layout>
      <SideMenu />
      <Content>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Candi Golang Framework</p>
        </header>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export default Template;
