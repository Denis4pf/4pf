import React from "react";

export default function Post(props) {
  const { id } = props.match.params;
  return (
    <div>
      <h4>{id}</h4>
    </div>
  );
}
