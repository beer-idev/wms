import React, { useState } from "react";
import { Col, Row } from "antd";
import { Space, Table, Button, Input, Card } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import { BsFillGrid3X3GapFill, BsFilterRight } from "react-icons/bs";
import { BiFilterAlt, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
const { Meta } = Card;
const { Search } = Input;
const Grid = () => {
  const data = [];
  for (let i = 0; i < 20; ++i) {
    data.push({
      no: i + 1,
      picture:
        "https://image.makewebeasy.net/makeweb/0/qK3H38D9m/DefaultData/Gildan_Ultra_Cotton_Pocket_Tee_Black.png",
      productCode: "000718955",
      barcode: "1402010760779",
      productName: "เสื้อแขนสั้นพิมพ์ฟอร์ย",
      category: "Ladies Wear",
      seconProductGroup: "Casual Basic",
      subGroup: "Y T-Shirt",
      color: "ส้ม",
      size: "S",
      unit: "ตัว",
      lastEdit: "08/12/2022 19:30",
    });
  }

  const columns = [
    {
      title: "ลำดับที่",
      dataIndex: "no",
      key: "no",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 100,
    },
    {
      title: "รูปภาพ",
      dataIndex: "picture",
      render: (text) => <img src={text} style={{ width: `60px` }} />,
      key: "picture",
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "รหัสสินค้า",
      dataIndex: "productCode",
      key: "productCode",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "บาร์โค้ด",
      dataIndex: "barcode",
      key: "barcode",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "ชื่อสินค้า",
      dataIndex: "productName",
      key: "productName",
      filterSearch: true,
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 200,
    },
    {
      title: "หมวดหมู่",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "กลุ่มสินค้ารอง",
      dataIndex: "seconProductGroup",
      key: "seconProductGroup",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 200,
    },
    {
      title: "กลุ่มสินค้าย่อย",
      dataIndex: "subGroup",
      key: "subGroup",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 200,
    },
    {
      title: "สี",
      dataIndex: "color",
      key: "color",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "ไซต์",
      dataIndex: "size",
      key: "size",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "หน่วยนับ",
      dataIndex: "unit",
      key: "unit",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "แก้ไขล่าสุด",
      dataIndex: "lastEdit",
      key: "lastEdit",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
    {
      title: "Action",
      key: "action",
      //   fixed: 'right',
      render: (_, record) => (
        <Space size="middle">
          <a>
            <BiEdit style={{ fontSize: `24px`, color: `#F8A656` }} />
          </a>
          <a>
            {" "}
            <RiDeleteBin5Line style={{ fontSize: `24px`, color: `red` }} />
          </a>
        </Space>
      ),
      showOnResponse: true,
      showOnDesktop: true,
      width: 150,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const [selectionType, setSelectionType] = useState("checkbox");
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
                ></Button>
                <Button
                  type="link"
                  danger
                  icon={<BsFilterRight style={{ fontSize: `24px` }} />}
                  size="large"
                ></Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>

      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Row>
            <Col span={6}>
            <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="เสื้อแขนยาวฟอร์ย"
              description={[
                <div>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    รหัสสินค้า: 0071985622
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    สี: ส้ม
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `20px` }}>
                    ไซต์: S
                  </p>
                </div>,
              ]}
            />
            <div align="center">
              <img
                alt="example"
                src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png"
                style={{ width: "200px", height: "70px" }}
              />
            </div>
          </Card>
            </Col>
            <Col span={6}>
            <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="เสื้อแขนยาวฟอร์ย"
              description={[
                <div>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    รหัสสินค้า: 0071985622
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    สี: ส้ม
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `20px` }}>
                    ไซต์: S
                  </p>
                </div>,
              ]}
            />
            <div align="center">
              <img
                alt="example"
                src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png"
                style={{ width: "200px", height: "70px" }}
              />
            </div>
          </Card>
            </Col>
            <Col span={6}>
            <Card
            hoverable
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="เสื้อแขนยาวฟอร์ย"
              description={[
                <div>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    รหัสสินค้า: 0071985622
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                    สี: ส้ม
                  </p>
                  <p style={{ marginTop: `0px`, marginBottom: `20px` }}>
                    ไซต์: S
                  </p>
                </div>,
              ]}
            />
            <div align="center">
              <img
                alt="example"
                src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png"
                style={{ width: "200px", height: "70px" }}
              />
            </div>
          </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta
                  title="เสื้อแขนยาวฟอร์ย"
                  description={[
                    <div>
                      <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                        รหัสสินค้า: 0071985622
                      </p>
                      <p style={{ marginTop: `0px`, marginBottom: `0px` }}>
                        สี: ส้ม
                      </p>
                      <p style={{ marginTop: `0px`, marginBottom: `20px` }}>
                        ไซต์: S
                      </p>
                    </div>,
                  ]}
                />
                <div align="center">
                  <img
                    alt="example"
                    src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png"
                    style={{ width: "200px", height: "70px" }}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  );
};

export default Grid;
