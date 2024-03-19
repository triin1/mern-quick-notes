import NotesList from "../../components/NotesList/NotesList";
import NewNote from "../../components/NewNote/NewNote";
import { useState } from "react";

function NotesPage() {
    const [notes, setNotes] = useState([])
    
    function addNotes(note) {
        setNotes([...notes, note])
    };

    return (
        <>
            <h1>Your notes</h1>
            <NewNote addNotes={addNotes}/>
            <h3>No notes yet!</h3>
            <NotesList notes={notes}/>
        </>
    )
};

export default NotesPage;