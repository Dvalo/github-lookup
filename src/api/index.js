import { useState, useEffect } from "react";
import axios from "axios";

export default function fetchData(apiUrl) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        if (response["data"]) {
          setData(response.data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [apiUrl]);

  return {
    data,
    error,
    loading
  };
}
