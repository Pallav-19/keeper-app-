import React from "react";

function CreateArea(props) {
  const [notes, setNotes] = React.useState({
    title: "",
    content: "",
  });
  function changeHandler(event) {
    const { name, value } = event.target;

    setNotes((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(notes);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={changeHandler}
          value={notes.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={changeHandler}
          name="content"
          value={notes.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
