import React, { useEffect } from "react";
import { Modal, Form, Input, Select } from "antd";
import axios from "axios";

const { Option } = Select;

const EditJobModal = ({ visible, onCancel, job, onJobUpdated }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const updatedJob = await axios.put(
        `${import.meta.env.VITE_API_HOST}/jobs/${job._id}`,
        values,
        {
          headers: {
            "key-api": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      onJobUpdated(updatedJob.data);
      onCancel();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (form) {
      form.setFieldsValue({
        type: job.type,
        durations: job.durations,
        title: job.title,
        company: job.company,
        location: job.location,
        details: job.details,
      });
    }
  }, [job, form]);

  return (
    <Modal
      forceRender
      open={visible}
      title="Edit Job"
      onCancel={onCancel}
      onOk={() => form.submit()}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="type" label="Type">
          <Select placeholder="Select a type">
            <Option value="full-time">Full Time</Option>
            <Option value="part-time">Part Time</Option>
            <Option value="contract">Contract</Option>
            <Option value="temporary">Temporary</Option>
          </Select>
        </Form.Item>
        <Form.Item name="durations" label="Duration">
          <Input placeholder="Enter the job duration" />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <Input placeholder="Enter a job title" />
        </Form.Item>
        <Form.Item name="company" label="Company">
          <Input placeholder="Enter the company name" />
        </Form.Item>
        <Form.Item name="location" label="Location">
          <Input placeholder="Enter the job location" />
        </Form.Item>
        <Form.Item name="details" label="Details">
          <Input.TextArea placeholder="Enter job details" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditJobModal;
