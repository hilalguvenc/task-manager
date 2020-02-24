import React, { useState } from "react";
import backarrow from "../style/backarrow.png";

function NewTaskPopup(props) {
  const [todo, setTodo] = useState("");
  const onClick = () => {
    props.onAdd(todo);
    props.onClose();
  };
  return (
    <div className="newtask-container">
      <div className="back-container" onClick={props.onClose}>
        <img className="back-arrow" src={backarrow} />
      </div>
      <form>
        <label className="content-done">What is to be done?</label>
        <input type="text" onChange={e => setTodo(e.target.value)} />
      </form>
      <button  className="done-btn" onClick={onClick}>
        <img className="done"
          src={`https://image.flaticon.com/icons/svg/2089/2089711.svg`}
        />
      </button>
    </div>
  );
}
export default NewTaskPopup;
