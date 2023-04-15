import React from "react";
import { Form, Input, Button, Select, message } from "antd";

import useAdd from "../../hooks/useAdd";

const { Option } = Select;

const AddJobForm = () => {
  const { addNew, loading } = useAdd();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    addNew(values, message, form, "jobs");
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{ overflow: "auto", padding: "30px", maxHeight: "100vh" }}
    >
      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Please select a job type" }]}
      >
        <Select>
          <Option value="full-time">Full-time</Option>
          <Option value="part-time">Part-time</Option>
          <Option value="contract">Contract</Option>
          <Option value="temporary">Temporary</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Durations"
        name="durations"
        rules={[{ required: true, message: "Please select a job duration" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a job title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Company"
        name="company"
        rules={[{ required: true, message: "Please enter a company name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: "Please enter a job location" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Details"
        name="details"
        rules={[{ required: true, message: "Please enter job details" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddJobForm;
