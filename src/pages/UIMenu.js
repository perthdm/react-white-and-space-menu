import React, { useState } from "react";
import { Row, Col } from "antd";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaBookOpen, FaTags, FaIceCream } from "react-icons/fa";

const itemStyled = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

const Navbar = () => {
  const [activate, setActivate] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: "12px 10px"
      }}
    >
      <Row
        style={{
          height: "60px",
          borderRadius: "12px",
          background: "white"
        }}
      >
        <Col span={6} style={itemStyled} onClick={() => setActivate(0)}>
          <FaBookOpen
            style={{
              fontSize: "20px",
              color: activate === 0 ? "#444aab" : "#c5c5c5"
            }}
          />
          <span
            style={{
              display: "block",
              marginTop: "3px",
              color: activate === 0 ? "#444aab" : "#c5c5c5"
            }}
          >
            อาหาร
          </span>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(1)}>
          <BsFillCupHotFill
            style={{
              fontSize: "20px",
              color: activate === 1 ? "#444aab" : "#c5c5c5"
            }}
          />
          <span
            style={{
              color: activate === 1 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px"
            }}
          >
            เครื่องดื่ม
          </span>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(2)}>
          <FaIceCream
            style={{
              fontSize: "20px",
              color: activate === 2 ? "#444aab" : "#c5c5c5"
            }}
          />
          <span
            style={{
              color: activate === 2 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px"
            }}
          >
            ของหวาน
          </span>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(3)}>
          <FaTags
            style={{
              fontSize: "20px",
              color: activate === 3 ? "#444aab" : "#c5c5c5"
            }}
          />
          <span
            style={{
              color: activate === 3 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px"
            }}
          >
            สินค้า
          </span>
        </Col>
      </Row>
    </div>
  );
};

const UIMenu = () => {
  return (
    <div style={{ width: "100%" }} className="container">
      <Row gutter={[8, 8]} style={{ paddingTop: "15px" }}>
        {Array.from({ length: "6" }).map((i, idx) => (
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "180px"
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2021/03/15/17/56/food-6097593_960_720.png"
              width={140}
              height={120}
            />
            <h4 style={{ marginTop: "10px", color: "white", fontSize: "16px" }}>
              ข้าวผัดกระเทียม-{idx + 1}
            </h4>
          </Col>
        ))}
      </Row>
      <Navbar />
    </div>
  );
};

export default UIMenu;
