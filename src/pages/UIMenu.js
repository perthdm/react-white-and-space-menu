import React, { useState } from "react";
import { Row, Col, Button, Radio } from "antd";
import { BsFillCupHotFill } from "react-icons/bs";
import { FaBookOpen, FaTags, FaIceCream } from "react-icons/fa";
import $ from 'jquery';

const itemStyled = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const Navbar = () => {
  const [activate, setActivate] = useState(0);
  const handleActivate = (e) => {
    setActivate(e)
    if(e == 0){
      $('.glider').css('transform', 'translateX(0%)');
    }
    if(e == 1){
      $('.glider').css('transform', 'translateX(100%)');
    }
    if(e == 2){
      $('.glider').css('transform', 'translateX(200%)');
    }
    if(e == 3){
      $('.glider').css('transform', 'translateX(300%)');
    }
  };
  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: "12px 10px",
      }}
    >
      <Radio.Group
        defaultValue="a"
        buttonStyle="outlined"
        className="radio-style"
        style={{ width: "100%", borderRadius: "12px", background: "white",height:"70px",overflow:"hidden" }}
      >
        {console.log(activate)}
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
              minHeight: "180px",
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
