import { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const AddProject = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("stack", values.stack);
      formData.append("url", values.url);
      formData.append("image", values.image[0].originFileObj);

      const response = await axios.post(
        `${import.meta.env.VITE_API_HOST}/projects`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "key-api": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      if (response.status === 200) {
        message.success("Project added successfully");
        form.resetFields();
      } else {
        message.error("Failed to add project");
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      style={{ overflow: "auto", padding: "30px", maxHeight: "100vh" }}
      form={form}
      name="addProject"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Stack"
        name="stack"
        rules={[{ required: true, message: "Please enter a stack" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[{ required: true, message: "Please select an image" }]}
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
      >
        <Upload beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Select Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="URL"
        name="url"
        rules={[{ required: true, message: "Please enter a URL" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          className="element-selector"
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Add Project
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProject;
