function NoteList({ notes, deleteNote, editNote }) {
    return (
      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md">
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p>{note.content}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => editNote(index)}
                className="px-2 py-1 bg-yellow-500 text-white rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(index)}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default NoteList;
  