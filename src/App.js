import { useState } from "react";
import CreateNote from "./components/CreateNote";
import NoteList from "./components/NoteList";
import EditNote from "./components/EditNote";

function App() {
  // State untuk menyimpan catatan
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Fungsi untuk menambahkan catatan baru
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Fungsi untuk menghapus catatan
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Fungsi untuk mengedit catatan
  const editNote = (index) => {
    setEditingNote({ ...notes[index], index });
  };

  // Fungsi untuk memperbarui catatan
  const updateNote = (updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[updatedNote.index] = updatedNote;
    setNotes(updatedNotes);
    setEditingNote(null);
  };

  // Fungsi untuk membatalkan proses edit
  const cancelEdit = () => {
    setEditingNote(null);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">CRUD Notes App</h1>
      {editingNote ? (
        <EditNote
          note={editingNote}
          updateNote={updateNote}
          cancelEdit={cancelEdit}
        />
      ) : (
        <CreateNote addNote={addNote} />
      )}
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;
