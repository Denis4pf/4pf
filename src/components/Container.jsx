import React from "react";

export default function Container({ children, posts }) {
  return (
    <main className={`app${posts?.length > 0 && " app-content"}`}>
      {children}
    </main>
  );
}
