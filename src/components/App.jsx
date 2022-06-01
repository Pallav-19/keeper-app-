import React from "react";
import Header from "./header";
import Footer from "./footer";
import Notes from "./Notes";
// import notes from "../notes";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id) {
    setNotes((previousValue) => {
      previousValue.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Notes
            onDelete={deleteNote}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
