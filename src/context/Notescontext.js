import React ,{useContext,useState,createContext,useEffect} from "react";

//create the context 
const NotesContext = createContext();

//create the provider class
export const NotesProvider = ({children})=>{
    const [notes,setNotes] = useState(()=>{
        //load n then save
        const saved = localStorage.getItem('notes');
        return saved?JSON.parse(saved) : [];
    });

    //save notes to localstorage whenver they change
    useEffect(()=>{
        localStorage.setItem('notes',JSON.stringify(notes));
    },[notes]);

    //add
    const addNote = (note)=>{
        setNotes([...notes,note]);
    }

    //delete
    const deleteNote = (id)=>{
        setNotes(notes.filter(note=>note.id!==id))
    }

    //edit
    const editNote = (updateNote)=>{
        setNotes(notes.map(note=>note.id===updateNote.id?updateNote:note));
    }

    return(
        <NotesContext.Provider value={{notes,addNote,editNote,deleteNote}}>
            {children}
        </NotesContext.Provider>
    )
}
//exporting
export const useNotes = () => useContext(NotesContext);
