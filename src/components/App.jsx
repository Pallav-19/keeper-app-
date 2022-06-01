import React from "react";
import Header from "./header";
import Footer from "./footer";
import Notes from "./Notes";
import notes from "../notes";
function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => {
        return (
          <Notes key={note.key} title={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
