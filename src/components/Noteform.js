import React, { useState } from 'react';
import { useNotes } from '../context/Notescontext';
import { ADD_NOTE } from '../constants/constant';

const Noteform = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Please fill in both fields');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    addNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md max-w-md mx-auto">
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        rows={4}
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {ADD_NOTE}
      </button>
    </form>
  );
};

export default Noteform;
