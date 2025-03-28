import React, { useState } from "react";
import { Row, Col, Button, Radio } from "antd";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaBookOpen, FaTags, FaIceCream } from "react-icons/fa";
import $ from "jquery";
import HeaderComponent from "../../src/components/HeaderComponent";
const itemStyled = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const Navbar = () => {
  const [activate, setActivate] = useState(0);
  const handleActivate = (e) => {
    setActivate(e);
    if (e == 0) {
      $(".glider").css("transform", "translateX(0%)");
    }
    if (e == 1) {
      $(".glider").css("transform", "translateX(100%)");
    }
    if (e == 2) {
      $(".glider").css("transform", "translateX(200%)");
    }
    if (e == 3) {
      $(".glider").css("transform", "translateX(300%)");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: "12px 10px",
        left:"0px"
      }}
    >
      <Radio.Group
        defaultValue="a"
        buttonStyle="outlined"
        className="radio-style"
      >
        <Radio.Button
          id="radio-1"
          value="a"
          onClick={() => handleActivate(0)}
          className="button-radio-style"
        >
          <div>
            <FaBookOpen
              style={{
                fontSize: "20px",
                color: activate === 0 ? "#444aab" : "#c5c5c5",
              }}
            />
            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: activate === 0 ? "#444aab" : "#c5c5c5",
              }}
            >
              อาหาร
            </span>
          </div>
        </Radio.Button>
        <Radio.Button
          id="radio-2"
          onClick={() => handleActivate(1)}
          value="b"
          className="button-radio-style"
        >
          <div>
            <BsFillCupHotFill
              style={{
                fontSize: "20px",
                color: activate === 1 ? "#444aab" : "#c5c5c5",
              }}
            />
            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: activate === 1 ? "#444aab" : "#c5c5c5",
              }}
            >
              เครื่องดื่ม
            </span>
          </div>
        </Radio.Button>
        <Radio.Button
          id="radio-3"
          onClick={() => handleActivate(2)}
          value="c"
          className="button-radio-style"
        >
          <div>
            <FaIceCream
              style={{
                fontSize: "20px",
                color: activate === 2 ? "#444aab" : "#c5c5c5",
              }}
            />
            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: activate === 2 ? "#444aab" : "#c5c5c5",
              }}
            >
              ของหวาน
            </span>
          </div>
        </Radio.Button>
        <Radio.Button
          id="radio-4"
          onClick={() => handleActivate(3)}
          value="d"
          className="button-radio-style"
        >
          <div>
            <FaTags
              style={{
                fontSize: "20px",
                color: activate === 3 ? "#444aab" : "#c5c5c5",
              }}
            />
            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: activate === 3 ? "#444aab" : "#c5c5c5",
              }}
            >
              สินค้า
            </span>
          </div>
        </Radio.Button>
        <span class="glider"></span>
      </Radio.Group>
      {/* <Row
        style={{
          height: "60px",
          borderRadius: "12px",
          background: "white",
          marginTop: "10px",
        }}
      >
        <Col span={6} style={itemStyled}>
          <Button
            type="link"
            onClick={() => setActivate(0)}
            style={{ lineHeight: "0.75rem", height: "100%" }}
          >
            <FaBookOpen
              style={{
                fontSize: "20px",
                color: activate === 0 ? "#444aab" : "#c5c5c5",
              }}
            />
            <span
              style={{
                display: "block",
                marginTop: "3px",
                color: activate === 0 ? "#444aab" : "#c5c5c5",
              }}
            >
              อาหาร
            </span>
          </Button>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(1)}>
          <BsFillCupHotFill
            style={{
              fontSize: "20px",
              color: activate === 1 ? "#444aab" : "#c5c5c5",
            }}
          />
          <span
            style={{
              color: activate === 1 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px",
            }}
          >
            เครื่องดื่ม
          </span>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(2)}>
          <FaIceCream
            style={{
              fontSize: "20px",
              color: activate === 2 ? "#444aab" : "#c5c5c5",
            }}
          />
          <span
            style={{
              color: activate === 2 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px",
            }}
          >
            ของหวาน
          </span>
        </Col>
        <Col span={6} style={itemStyled} onClick={() => setActivate(3)}>
          <FaTags
            style={{
              fontSize: "20px",
              color: activate === 3 ? "#444aab" : "#c5c5c5",
            }}
          />
          <span
            style={{
              color: activate === 3 ? "#444aab" : "#c5c5c5",
              display: "block",
              marginTop: "5px",
            }}
          >
            สินค้า
          </span>
        </Col>
      </Row> */}
    </div>
  );
};

const UIMenu = () => {
  return (
    <>
      <HeaderComponent />
      <div style={{ width: "100%" }} className="container"  style={{ marginTop: "74px",marginBottom:"90px" }}>
        <h2 style={{fontWeight:"bold"}}>อาหาร</h2>
        <Row gutter={[16, 16]}>
          {Array.from({ length: "6" }).map((i, idx) => (
            <Col
              xs={12}
              xl={4}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="card-menu-style" style={{ width: "100%" }}>
                <div style={{padding:"10px"}}>
                  <img
                    src="https://www.eatingwell.com/thmb/bGhAB_Vm1NUAtliDcrzixylY4SE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cucumber-vinegar-salad-bb9dbc2435374efb906353dfff2bfe7d.jpg"
                    width="100%"
                    className="img-menu"
                  />
                </div>
                <div style={{ padding: "20px 10px" }}>
                  <div>
                    <h3>ข้าวผัดกระเทียม</h3>
                  </div>
                  <div>
                    <h2 style={{fontWeight:"bold"}}>฿120</h2>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Navbar />
      </div>
    </>
  );
};

export default UIMenu;
