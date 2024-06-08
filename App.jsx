import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");

  function addNote(newNote) {
    if (newNote.title.trim() !== "" && newNote.content.trim() !== "") {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
      // Reset warning message if note is added successfully
      setWarningMessage("");
    } else {
      setWarningMessage("Cannot add an empty note.");
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {warningMessage && <p>{warningMessage}</p>}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
