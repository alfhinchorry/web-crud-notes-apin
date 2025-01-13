import { useState } from "react";

function EditNote({ note, updateNote, cancelEdit }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote({ ...note, title, content });
  };

  return (
    <form className="p-4 border rounded-md shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Edit Catatan</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Perbarui
      </button>
      <button
        type="button"
        onClick={cancelEdit}
        className="px-4 py-2 bg-gray-500 text-white rounded-md"
      >
        Batal
      </button>
    </form>
  );
}

export default EditNote;
