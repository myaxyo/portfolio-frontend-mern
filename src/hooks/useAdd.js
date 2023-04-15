import { useState } from "react";
import axios from "axios";

const useAdd = () => {
  const [loading, setLoading] = useState(false);

  const addNew = async (values, message, form, slur) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_HOST}/${slur}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            "key-api": `${import.meta.env.VITE_API_KEY}`,
          },
        }
      );
      if (response.status === 200) {
        message.success("Job added successfully");
        form.resetFields();
        return response.data;
      } else {
        message.error("Failed to add job");
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to add job");
    } finally {
      setLoading(false);
    }
  };

  return { addNew, loading };
};

export default useAdd;
