import React from "react";

export default ({ title, children }) => {
  return (
    <ul>
      <h2>{title}</h2>
      {children}
    </ul>
  );
};
