import React, { useState } from "react";
import { Col, Row } from "antd";
import { Space, Table, Button, Input, Card, Modal, Select } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiFilterAlt, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const { Search } = Input;
const SetProduct = () => {
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
    },
    {
      title: "หมวดหมู่สินค้า",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "กลุ่มสินค้ารอง",
      dataIndex: "seconProductGroup",
      key: "seconProductGroup",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "กลุ่มสินค้าย่อย",
      dataIndex: "subGroup",
      key: "subGroup",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
    },
    {
      title: "แก้ไขล่าสุด",
      dataIndex: "lastEdit",
      key: "lastEdit",
      sorter: (a, b) => a.age - b.age,
      showOnResponse: true,
      showOnDesktop: true,
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
            <RiDeleteBin5Line style={{ fontSize: `24px`, color: `red` }} />
          </a>
        </Space>
      ),
      showOnResponse: true,
      showOnDesktop: true,
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { Option } = Select;

  return (
    <div>
      <Card>
        <Row>
          <Col span={24}>
            <Row align="middle">
              <Col xs={24} md={6} xl={6} span={6}>
                <h3>กำหนดข้อมูล</h3>
              </Col>
              <Col xs={24} md={18} xl={18} span={18} align="end">
                <Space wrap>
                  <Search
                    placeholder="ค้นหา"
                    style={{
                      width: 200,
                    }}
                    size="default"
                  />

                  <Button
                    type="primary"
                    ghost
                    purple
                    icon={<PlusOutlined />}
                    size="large"
                    style={{ borderColor: "#8744E1", color: "#8744E1" }}
                    onClick={showModal}
                  >
                    เพิ่ม
                  </Button>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Table
              size="middle"
              columns={columns}
              tableLayout="fixed"
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              // scroll={{ x: 800 }}
              dataSource={data}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Card>

      <Modal
        title="กำหนดข้อมูล"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row align="middle">
          <Col xs={24} md={24} xl={24}>
            <Select defaultValue="หมวดสินค้า" style={{ width: `100%` }}>
              <Option value="Shoes">Shoes</Option>
              <Option value="MenWear">Men Wear</Option>
            </Select>
          </Col>
        </Row>
        <br />
        <Row align="middle">
          <Col xs={24} md={24} xl={24}>
            <Select defaultValue="หมวดสินค้ารอง" style={{ width: `100%` }}>
              <Option value="Shoes">Chidren Shoes</Option>
              <Option value="MenWear">Younger</Option>
            </Select>
          </Col>
        </Row>
        <br />
        <Row align="middle">
          <Col xs={24} md={24} xl={24}>
            <Select defaultValue="หมวดสินค้าย่อย" style={{ width: `100%` }}>
              <Option value="Shoes">Girl Sandals</Option>
              <Option value="MenWear">L/S Top</Option>
            </Select>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default SetProduct;
