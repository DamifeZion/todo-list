import { useState } from "react";
import "./App.css";

import { DailyTask, AddNew } from "./page/export";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { emojis } from "./page/EmojiData";
import { v4 as uuidv4 } from "uuid";

const emojiRegExp = new RegExp(
  `[${emojis.join("").replace(/[^\w\s]/g, "\\$&")}]`,
  "g"
);

function App() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    task: "",
    date: "",
    emoji: "",
  });

  function handleTask(e) {
    setInputValues({ ...inputValues, task: e.target.value });
  }

  function handleDate(e) {
    setInputValues({ ...inputValues, date: e.target.value });
  }

  function handleEmoji(e) {
    setInputValues({ ...inputValues, emoji: e.target.value });

    if (inputValues.emoji.length > 1) {
      setInputValues({ ...inputValues, emoji: "" });
    }
  }

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      task: inputValues.task,
      date: inputValues.date,
      emoji: inputValues.emoji,
    };

    setTodos([...todos, newTodo]);
    navigate("/");
  }

  function deleteItem(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <section className="flex flex-col">
      <Routes>
        <Route path="/" element={<DailyTask todos={todos} />} />

        <Route
          path="/add-task"
          element={
            <AddNew
              taskValue={inputValues.task}
              dateValue={inputValues.date}
              emojiValue={inputValues.emoji}
              handleTask={handleTask}
              handleDate={handleDate}
              handleEmoji={handleEmoji}
              handleSubmit={handleSubmit}
              handleDelete={deleteItem}
            />
          }
        />
      </Routes>
    </section>
  );
}

export default App;
