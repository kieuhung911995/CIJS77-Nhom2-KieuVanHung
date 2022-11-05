import React from "react";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    "Hit the gym",
    "Pay bills",
    "Meet George",
    "Buy eggs",
    "a book",
    "Organize office",
  ]);
  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleAdd = () => {
    if (input === "") {
      alert("You must add something!");
    } else {
      setItems([...items, input]); //input co the lon len truoc ...items
      setInput("");
    }
  };
  const handleCheck = (ev) => {
    ev.target.classList.toggle("checked");
  };
  const handleDelete = (index) => {
    items.splice(index, 1);
    setItems([...items]);//tạo 1 object mới để react nhận diện thay đổi
  };
  return (
    <>
      <div id="myDIV" className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={input}
          onChange={handleInput}
        />
        <span className="addBtn" onClick={handleAdd}>
          Add
        </span>
      </div>
      <ul id="myUL">
        {items.map((element, index) => (
          <li onClick={handleCheck} key={index}>
            {element}
            <span className="close" onClick={() => handleDelete(index)}>
              &#9932;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
