import React, { useReducer, useState } from "react";
import reducer, { ADD, DEL, initialState, COMPLETE } from "./reducer";

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
      {state.toDos.length > 0 && (
        <ul>
          <h2>To Dos</h2>
          {state.toDos.map((toDo) => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              {/* delete button */}
              <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
              {/* compete button */}
              <button
                onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-checks"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M7 12l5 5l10 -10" />
                  <path d="M2 12l5 5m5 -5l5 -5" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {state.completed.length > 0 && (
        <ul>
          <h2>Completed!</h2>
          {state.completed.map((complete) => (
            <li key={complete.id}>
              <span>{complete.text}</span>
              {/* delete button */}
              <button
                onClick={() => dispatch({ type: DEL, payload: complete.id })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
              {/* back button */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-back-up"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
