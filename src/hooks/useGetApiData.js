import { useState, useEffect } from "react";

const useGetApiData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data, setData];
};

export default useGetApiData;
