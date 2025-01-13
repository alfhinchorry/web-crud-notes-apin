import { useState } from "react";

function CreateNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="p-4 border rounded-md shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold">Tambah Catatan Baru</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul Catatan"
        className="w-full p-2 border rounded-md"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Isi Catatan"
        className="w-full p-2 border rounded-md"
        required
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Tambah Catatan
      </button>
    </form>
  );
}

export default CreateNote;
