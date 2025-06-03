import React from 'react';
import { useNotes } from '../context/Notescontext'
import Notecard from './Notecard';
import { NO_NOTES_AVAILABLE } from '../constants/constant';
const Notelist = () => {
  const { notes, deleteNote, editNote } = useNotes();

  if (notes.length === 0) {
    return <p className="text-center mt-4">{NO_NOTES_AVAILABLE}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-6 space-y-4">
      {notes.map(note => (
        <Notecard
          key={note.id}
          note={note}
          onDelete={() => deleteNote(note.id)}
          onEdit={editNote}
        />
      ))}
    </div>
  );
};

export default Notelist;
