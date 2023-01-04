import React, { useState } from "react";
import { Col, Row } from "antd";
import { Space, Table, Button, Input, Drawer, Form, Select } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import { BsFillGrid3X3GapFill, BsFilterRight } from "react-icons/bs";
import { BiFilterAlt, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import ListProduct from "../../components/ListProduct";
import GridProduct from "../../components/GridProduct";
const { Search } = Input;


const Home = () => {

  const { Option } = Select;
  const [game, setGame] = useState(false)

  const [open, setOpen] = useState(false);

  const ShowList = () => {
    setGame(!game);
    console.log(game)
  }

  const [toggle, setToggle] = useState(true)

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Row
        style={{
          marginTop: `100px`,
          marginBottom: `20px`,
        }}
      >
        <Col span={2}></Col>
        <Col span={20}>
          <Row align="middle">
            <Col xs={24} md={4} xl={4} span={4}>
              <h1>รายการสินค้า</h1>
            </Col>
            <Col xs={24} md={20} xl={20} span={20} align="end">
              <Space wrap>
                <Search
                  placeholder="ค้นหา"
                  style={{
                    width: 200,
                  }}
                  size="default"
                />

                <Button
                  icon={<DownloadOutlined />}
                  size="large"
                  type="primary"
                  ghost
                  style={{ borderColor: "#F8A656", color: "#F8A656" }}
                >
                  นำข้อมูลสินค้าเข้า
                </Button>
                <Button type="primary" icon={<PlusOutlined />} size="large">
                  กำหนดข้อมูลสินค้า
                </Button>

                <Button
                  type="primary"
                  ghost
                  purple
                  icon={<PlusOutlined />}
                  size="large"
                  style={{ borderColor: "#8744E1", color: "#8744E1" }}
                >
                  เพิ่มสินค้า
                </Button>
                <Button
                  type="link"
                  icon={
                    <BiFilterAlt
                      style={{ fontSize: `24px`, color: `#F8A656` }}
                    />
                  }
                  danger
                  size="large"
                  onClick={showDrawer}
                ></Button>
                {toggle ?
                  <Button
                  type="link"
                  danger
                  icon={<BsFillGrid3X3GapFill style={{ fontSize: `24px` }} />}
                  size="large"
                  onClick={() => setToggle(!toggle)} 
                ></Button>
                  :
                  <Button
                  type="link"
                  danger
                  icon={<BsFilterRight style={{ fontSize: `24px` }} />}
                  size="large"
                  onClick={() => setToggle(!toggle)} 
                ></Button>
                }
              
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
      {toggle ?
        <ListProduct />
        :
        <GridProduct />
      }
    
      
     
      <Drawer
        title="กรองข้อมูล"
        placement="right"
        onClose={onClose}
        open={open}
        // width={550}
        extra={
          <Space>
            <Button onClick={onClose} type="primary">
              กรอง
            </Button>
            <Button danger onClick={onClose}>
              รีเซ็ต
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="หมวดหมู่สินค้า">
                <Select defaultValue="หมวดหมู่สินค้า" style={{ width: `100%` }}>
                  <Option value="Shoes"> Shoes</Option>
                  <Option value="MenWear">Men Wear</Option>
                  <Option value="LadiesWear">Ladies Wear</Option>
                  <Option value="BoyWear">Boy Wear</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="กลุ่มสินค้ารอง">
                <Select defaultValue="กลุ่มสิค้ารอง" style={{ width: `100%` }}>
                  <Option value="ChidrenShoes">Chidren Shoes</Option>
                  <Option value="WomenShoes">Women Shoes</Option>
                  <Option value="CasualBasic">Casual Basic</Option>
                  <Option value="Younger">Younger</Option>
                  <Option value="Denim">Denim</Option>
                  <Option value="CasualKnit">Casual Knit</Option>
                  <Option value="Basic+NightWear">Basic + Night Wear</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="กลุ่มสินค้าย่อย">
                <Select
                  defaultValue="กลุ่มสินค้าย่อย"
                  style={{ width: `100%` }}
                >
                  <Option value="GirlSandals">Girl Sandals</Option>
                  <Option value="GirlStudentShoes">Girl Student Shoes</Option>
                  <Option value="BoyStudentShoes">Boy Student Shoes</Option>
                  <Option value="WomenSandals">Women Sandals</Option>
                  <Option value="Shorts">Shorts</Option>
                  <Option value="L/STop">L/S Top</Option>
                  <Option value="Pants">Pants</Option>
                  <Option value="KnitTop">Knit Top</Option>
                  <Option value="W.Top">W. Top</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="รหัสสินค้า">
                <Input placeholder="รหัสสินค้า" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="บาร์โค้ด">
                <Input placeholder="บาร์โค้ด" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="ชื่อสินค้า">
                <Input placeholder="ชื่อสินค้า" />
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="สี">
                <Select defaultValue="สี" style={{ width: `100%` }}>
                  <Option value="F0001">ฟ้า</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="ไซต์">
                <Select defaultValue="ไซต์" style={{ width: `100%` }}>
                  <Option value="0001">S</Option>
                  <Option value="0002">M</Option>
                  <Option value="0003">L</Option>
                  <Option value="0004">XL</Option>
                  <Option value="0005">2XL</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item label="หน่วยนับ">
                <Select defaultValue="หน่วยนับ" style={{ width: `100%` }}>
                  <Option value="0001">ตัว</Option>
                  <Option value="0002">คู่</Option>
                  <Option value="0003">โหล</Option>
                  <Option value="0004">แพ็ค</Option>
                  <Option value="0005">ลัง</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default Home;
