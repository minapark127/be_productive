import React from "react";
import { useState } from "../context";
import ToDoForm from "./ToDoForm";
import List from "./List";
import ListItems from "./ListItems";

function App() {
  const { toDos, completed } = useState();

  return (
    <>
      <h1>be productive</h1>
      <ToDoForm />
      <List title={toDos.length > 0 ? "To Dos" : ""}>
        {toDos.map((toDo) => (
          <ListItems key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>

      <List title={completed.length > 0 ? "Completed!" : ""}>
        {completed.map((complete) => (
          <ListItems
            key={complete.id}
            id={complete.id}
            text={complete.text}
            isCompleted
          />
        ))}
      </List>
    </>
  );
}

export default App;
