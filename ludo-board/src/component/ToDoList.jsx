import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [tasks, setTasks] = useState([
    { task: "Sample Task", id: uuidv4(), completed: false },
  ]);
  let [newTask, setNewTask] = useState("");

  // Add new task
  let addNewTask = () => {
    if (newTask.trim() === "") return; // prevent empty tasks
    setTasks([...tasks, { task: newTask, id: uuidv4(), completed: false }]);
    setNewTask("");
  };

  // Update input field
  let updateTaskValue = (event) => {
    setNewTask(event.target.value);
  };

  // Handle Enter key press
  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addNewTask();
    }
  };

  // Delete task
  let deleteTask = (id) => {
    let updatedTasks = tasks.filter((e) => e.id !== id);
    setTasks(updatedTasks);
  };

  // Toggle complete
  let toggleComplete = (id) => {
    let updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        width: "420px",
        padding: "20px",
        borderRadius: "12px",
        background: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
        ✅ Tasks Todo
      </h1>

      /* Input + Button */
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          placeholder="Add a new task..."
          onChange={updateTaskValue}
          onKeyDown={handleKeyPress} // 👈 Enter key handler
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addNewTask}
          style={{
            marginLeft: "10px",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#1f6feb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1554b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1f6feb")}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((e) => (
          <li
            key={e.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #eee",
              backgroundColor: e.completed ? "#f0f0f0" : "transparent",
              borderRadius: "6px",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                textDecoration: e.completed ? "line-through" : "none",
                color: e.completed ? "#777" : "#333",
                flex: 1,
              }}
            >
              {e.task}
            </span>

            {/* Mark as Done / Undo button */}
            <button
              onClick={() => toggleComplete(e.id)}
              style={{
                marginLeft: "8px",
                padding: "6px 10px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                backgroundColor: e.completed ? "#6c757d" : "#28a745",
                color: "white",
                fontSize: "14px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(ev) =>
                (ev.target.style.backgroundColor = e.completed
                  ? "#5a6268"
                  : "#218838")
              }
              onMouseOut={(ev) =>
                (ev.target.style.backgroundColor = e.completed
                  ? "#6c757d"
                  : "#28a745")
              }
            >
              {e.completed ? "Undo" : "Done"}
            </button>

            {/* Delete button */}
            <button
              onClick={() => deleteTask(e.id)}
              style={{
                marginLeft: "8px",
                padding: "6px 10px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#d61327ff",
                color: "white",
                fontSize: "14px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(ev) =>
                (ev.target.style.backgroundColor = "#b52a37")
              }
              onMouseOut={(ev) =>
                (ev.target.style.backgroundColor = "#cf4351ff")
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Task Counter */}
      <p style={{ marginTop: "15px", textAlign: "center", color: "#555" }}>
        Total Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length}
      </p>
    </div>
  );
}
