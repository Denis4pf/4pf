import React from "react";

// components
import Loader from "../../Loader";
import Container from "../../containers/Container";
import { Link } from "react-router-dom";

//css
import "../../../styles/post.css";

function PostViewLayout({ postData }) {
  return (
    <Container>
      <div className="post">
        <div className="title-container">
          <h3 className="title-post">{postData.title}</h3>
          <img
            src={`https://picsum.photos/id/${postData.id}/200/200`}
            alt="User Profile"
            className="user-post"
          />
        </div>
        <article className="section-post">
          <p>{postData.body}</p>
        </article>
      </div>
      <Link to="/" className="link-goback">
        <i className="fa fa-arrow-left fa-margin-r"></i>
        Regresar
      </Link>
    </Container>
  );
}

export default function PostView({ postData, isLoading }) {
  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <PostViewLayout postData={postData} />
  );
}
