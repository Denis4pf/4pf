import React, { useState, useEffect } from "react";

// utils
import { API_REQUEST } from "../config/config";

//componentes
import PostView from './PostView';

export default function PostContainer(props) {
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    API_REQUEST.getAsync(`posts/${id}`)
      .then((response) => response.json())
      .then((data) => { 
        setPostData(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <PostView {...{isLoading, postData}}/>
  );
}
