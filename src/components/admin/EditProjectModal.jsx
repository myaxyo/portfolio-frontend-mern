import { useState } from "react";
import { Form, Input, Button, Upload, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const EditProjectModal = ({ project, onUpdate, visible, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("stack", values.stack);
      formData.append("url", values.url);
      if (values.image) {
        formData.append("image", values.image[0].originFileObj);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API_HOST}/projects/${project._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "key-api": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("Project updated successfully");
        onUpdate(response.data);
        form.resetFields();
      } else {
        console.log("response", response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={visible}
      title="Edit Project"
      onCancel={onCancel}
      footer={null}
    >
      <Form
        style={{ overflow: "auto", padding: "30px", maxHeight: "100vh" }}
        form={form}
        name="editProject"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          title: project.title,
          stack: project.stack,
          url: project.url,
        }}
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
            Update Project
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProjectModal;
