import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url, headers) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { headers });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, { headers });
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, loading, error, deleteData };
}

export default useFetch;
