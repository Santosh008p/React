import { useState } from 'react';
import './App.css';

function App() {
  const [addNote, setAddNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Add note function
  const handleAddNote = () => {
    if (addNote.trim() === "") return;
    const newNote = {
      id: Date.now(),
      text: addNote
    };
    setNotes([...notes, newNote]);
    setAddNote("");
  };

  // Delete note function
  const handleDelete = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  // Filtered notes based on search
  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Notes App</h1>
      </div>

      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Search note"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Add note section */}
      <div>
        <h2>Add a Note</h2>
        <input 
          type="text" 
          placeholder="Add note"
          value={addNote}
          onChange={(e) => setAddNote(e.target.value)}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>

      {/* Display notes */}
      <div>
        <h2>All Notes</h2>
        {filteredNotes.length === 0 && <p>No notes found.</p>}
        {filteredNotes.map((note) => (
          <div key={note.id} className="note-item">
            <span>{note.text}</span>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
