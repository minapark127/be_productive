import React from "react";
import { useState } from "../context";

export default () => {
  const { toDos, completed } = useState();
  const percent = Math.floor(
    (completed.length / (toDos.length + completed.length)) * 100
  );

  return (
    <>
      {!isNaN(percent) && (
        <>
          <label htmlFor="progress">
            <span role="img" aria-label="Waxing Gibbous Moon">
              🌔
            </span>
          </label>
          <progress id="progress" max="100" value={percent}></progress>
          <span role="img" aria-label="full moon">
            🌕
          </span>
          <div>{toDos.length} more to go!</div>
        </>
      )}
    </>
  );
};
