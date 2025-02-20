import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { activeContentType } from "../atoms";
import { BE_URL } from "../config";

export const useContent = () => {
  const activeType = useRecoilValue(activeContentType);
  const [content, setContent] = useState([]);
  const [username,setUser] = useState("")
  const token = localStorage.getItem("token");

  async function getData() {
    try {
      const response = await axios.get(
        `${BE_URL}/api/v1/content/${activeType}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUser(response.data.contents[0].userId.username)

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

  return {content,username};
};
