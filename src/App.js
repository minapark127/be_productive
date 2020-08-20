import React, { useReducer, useState } from "react";

const initialState = {
  toDos: [],
};

const ADD = "add";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { toDos: [...state.toDos, { text: action.payload }] };
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
    setNewToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>be productive</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add a task"
          onChange={onChange}
          value={newToDo}
        />
        <input type="button" value="add" onClick={onSubmit} />
      </form>
      {state.toDos.length > 0 ? (
        <ul>
          <h2>To Dos</h2>
          {state.toDos.map((toDo, index) => (
            <li key={index}>{toDo.text}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default App;
