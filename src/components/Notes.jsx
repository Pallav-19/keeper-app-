import React from "react";

function Notes(props) {
  clickHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <button onClick={clickHandler}>DELETE</button>
    </div>
  );
}
export default Notes;
