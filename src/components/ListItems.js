import React from "react";
import { DEL, COMPLETE, UNCOMPLETE } from "../actions";
import Svgs from "./Svgs";
import { useDispatch } from "../context";

export default ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      {!isCompleted ? (
        <>
          <button onClick={() => dispatch({ type: DEL, payload: id })}>
            <Svgs.Delete />
          </button>
          <button onClick={() => dispatch({ type: COMPLETE, payload: id })}>
            <Svgs.Check />
          </button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch({ type: UNCOMPLETE, payload: id })}>
            <Svgs.Back />
          </button>
        </>
      )}
    </li>
  );
};
