import React, { useState } from "react";
import { Col, Row } from "antd";
import { Space, Table, Button, Input, Card, Modal, Form } from "antd";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiFilterAlt, BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const { Search } = Input;
const SetSize = () => {
  const data = [];
  for (let i = 0; i < 3; ++i) {
    let num = i+1
    data.push({
      no: num,
      sizeCode: "00"+ num,
      size: "S",
      lastEdit: "08/12/2022 19:30",
    },
    );
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
      title: "รหัสไซต์",
      dataIndex: "sizeCode",
      key: "sizeCode",
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
      width: 200,
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
  return (
    <div>
    <Card>
        <Row>
          <Col span={24}>
            <Row align="middle">
              <Col xs={24} md={6} xl={6} span={6}>
                <h3>กำหนดข้อมูลไซต์</h3>
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
        title="กำหนดข้อมูลไซต์"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical">
          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item
                label="รหัสไซต์"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="001" value={`001`} readOnly/>
              </Form.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item
                label="ชื่อไซต์"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="ชื่อไซต์" />
              </Form.Item>
            </Col>
          </Row>

          <Row align="middle">
            <Col xs={24} md={24} xl={24}>
              <Form.Item
                label="ชื่อไซต์ (อังกฤษ)"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="ชื่อไซต์ (อังกฤษ)" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default SetSize;
