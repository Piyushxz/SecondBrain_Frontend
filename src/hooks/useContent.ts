import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { activeContentType } from "../atoms";

export const useContent = () => {
  const activeType = useRecoilValue(activeContentType);
  const [content, setContent] = useState([]);
  const token = localStorage.getItem("token");

  async function getData() {
    try {
      const response = await axios.get(
        `http://localhost:3003/api/v1/content/${activeType}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (JSON.stringify(response.data.contents) !== JSON.stringify(content)) {
        setContent(response.data.contents);
      }
    } catch (error) {
      console.error("Failed to fetch content:", error);
    }
  }

  useEffect(() => {
    getData();

    const intervalId = setInterval(getData, 5000);

    return () => clearInterval(intervalId);
  }, [activeType]);

  return content;
};
