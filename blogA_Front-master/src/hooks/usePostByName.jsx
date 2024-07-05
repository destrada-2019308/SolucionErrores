import { useState, useEffect } from "react";
                              //le falto el api
import { getPostByName } from "../services/index.js";

export const usePostByName = (name) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPostByName(name);
      if (!response.error) {
        setPost(response.data.postInfo);
      } else {
        console.log(response.e);
      }
    };
    fetchPost();
  }, [name]);

  return {
    post,
    isFetching: !post,
  };
};
