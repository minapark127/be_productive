import React, { useState } from "react";
import { DEL, COMPLETE, UNCOMPLETE, EDIT } from "../actions";
import Svgs from "./Svgs";
import { useDispatch } from "../context";

export default ({ id, text, isCompleted }) => {
  const [editedToDo, setEditedToDo] = useState(text);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditedToDo(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    dispatch({ type: EDIT, payload: target[0].value, id });
    target[0].disabled = true;
  };

  const editHandler = (e) => {
    const { target } = e;
    switch (target.nodeName) {
      case "BUTTON":
        const input = target.previousSibling[0];
        input.disabled = false;
        input.focus();
        break;
      case "svg":
        const inputA = target.parentNode.previousSibling[0];
        inputA.disabled = false;
        inputA.focus();
        break;
      case "path":
        const inputB = target.parentNode.parentNode.previousSibling[0];
        inputB.disabled = false;
        inputB.focus();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <li key={id}>
        <form onSubmit={onSubmit}>
          <input type="text" value={editedToDo} onChange={onChange} disabled />
        </form>
        {!isCompleted ? (
          <>
            <button onClick={editHandler}>
              <Svgs.Edit />
            </button>
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
    </>
  );
};
