import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);

  function Add() {
    let mytasks = [...tasks];
    mytasks.push({ text: inputTask, id: uuidv4() });
    setTasks(mytasks);
    setInputTask("");
  }

  function deleteItem(id) {
    let filterTasks = tasks.filter((item) => item.id !== id);
    setTasks(filterTasks);
  }

  function edit() {
    let editedTasks = tasks.map((item) => {
      if (item.id === selectedId) {
        return { ...item, text: editValue };
      } else {
        return item;
      }
    });
    setTasks(editedTasks);
    setShowEditInput(false);
    setEditValue("");
    setSelectedId(null);
  }

  return (
    <div className="list">
      <input
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={Add}>Add</button>

      {tasks.map((item) => (
        <div key={item.id}>
          {showEditInput && selectedId === item.id ? (
            <div>
              <input
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                placeholder="Edit task"
              />
              <button onClick={edit}>Save</button>
            </div>
          ) : (
            <p>{item.text}</p>
          )}

          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <button
            onClick={() => {
              setShowEditInput(true);
              setEditValue(item.text);
              setSelectedId(item.id);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
