import React, { useState } from 'react';
import { CANCEL,DELETE,EDIT } from '../constants/constant';
const Notecard = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    onEdit({
      ...note,
      title: editedTitle,
      content: editedContent,
    });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            rows={3}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={handleSave}
            className="mr-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            {CANCEL}
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold">{note.title}</h3>
          <p className="mt-2 whitespace-pre-wrap">{note.content}</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              {EDIT}
            </button>
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              {DELETE}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Notecard;
