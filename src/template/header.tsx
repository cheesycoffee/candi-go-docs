import React from "react";
import { Layout, Menu, Affix } from "antd";
import logo from "assets/logowhite.png";

const { Header } = Layout;

const HeaderMenu = () => {
  return (
    <Affix offsetTop={0}>
      <Header>
        <nav className="menuBar">
          <a href="candi.com">
            <img src={logo} className="logo" alt="logo" /> Candi
          </a>
        </nav>
      </Header>
    </Affix>
  );
};

export default HeaderMenu;
