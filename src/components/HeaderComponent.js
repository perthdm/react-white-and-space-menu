import React, { useState } from "react";
import { Layout, Row, Col, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import logo from "src/assets/image/logo.jpg";

const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <>
      <Header className="header-style" style={{ padding: 0, background: "white" }}>
        <Row>
          <Col flex="80px" style={{ textAlign: "center" }}>
            <img src={logo} className="logo-style"/>
          </Col>
          <Col flex="auto" style={{ textAlign: "center" }}>
            <h3>White and Space</h3>
          </Col>
          <Col flex="50px" style={{ textAlign: "center" }}>
            <Button
              size="large"
              type="primary"
              icon={<ShoppingOutlined />}
            />
          </Col>
        </Row>
      </Header>
    </>
  );
};
export default HeaderComponent;
