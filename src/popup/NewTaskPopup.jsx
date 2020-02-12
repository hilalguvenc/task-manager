import React, { useState } from "react";
import backarrow from "../style/backarrow.png";
import { Link } from "react-router-dom";
import CalendarPopup from "../popup/CalendarPopup";

function NewTaskPopup(props) {
    const [todo, setTodo] = useState("");
    const onClick = () => {
        props.onAdd(todo);
        props.onClose();
    }
  return (
    <div className="newtask-container">
      <div className="back-container" onClick={props.onClose}>
        <img className="back-arrow" src={backarrow} />
      </div>
      <form>
        <label className="content-done">What is to be done?</label>
        <input type="text" onChange={e => setTodo(e.target.value)} />
      </form>
      <button onClick={onClick}>
        <img className="done" src={`https://img.icons8.com/nolan/64/ok.png`} />
      </button>
    </div>
  );
}
export default NewTaskPopup;
