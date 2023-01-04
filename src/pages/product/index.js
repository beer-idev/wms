import React, { useState } from "react";
import { Col, Row } from "antd";
import { Space, Table, Button, Input } from "antd";
import SetColor from "../../components/setColor";
import SetProduct from "../../components/setProduct";
import SetSize from "../../components/setSize";
import SetUnit from "../../components/setUnit";
const Product = () => {
  return (
    <div>
      <Row
        style={{
          marginTop: `50px`,
          marginBottom: `20px`,
        }}
      >
        <Col span={2}></Col>
        <Col span={20}>
          <Row align="middle">
            <Col xs={24} md={6} xl={6}>
              <h1>กำหนดข้อมูลสินค้า</h1>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>

      <Row>
        <Col xs={24} md={2} xl={2}></Col>
        <Col xs={24} md={20} xl={20}>
          <Row style={{marginBottom: `20px`}}>
         
            <Col xs={24} md={12} xl={12}>
            
              <SetProduct />
            </Col>
            <Col md={1} xl={1}/>
            <Col xs={24} md={11} xl={11}>
              <SetUnit />
            </Col>
           
          </Row>
        </Col>
        <Col xs={24} md={2} xl={2}></Col>
      </Row>

      <Row>
        <Col xs={24} md={2} xl={2}></Col>
        <Col xs={24} md={20} xl={20}>
          <Row style={{marginBottom: `20px`}}>
         
            <Col xs={24} md={12} xl={12}>
            
              <SetColor />
            </Col>
            <Col md={1} xl={1}/>
            <Col xs={24} md={11} xl={11}>
              <SetSize />
            </Col>
           
          </Row>
        </Col>
        <Col xs={24} md={2} xl={2}></Col>
      </Row>
    </div>
  );
};

export default Product;
