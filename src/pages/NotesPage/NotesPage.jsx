import NotesList from "../../components/NotesList/NotesList";
import NewNote from "../../components/NewNote/NewNote";
import { useEffect, useState } from "react";
import * as notesAPI from '../../utilities/notes-api';

function NotesPage() {
    const [notes, setNotes] = useState([])
    
    async function addNotes(note) {
        const addNote = await notesAPI.createNote(note);
        setNotes([...notes, addNote])
    };

    async function deleteNote(id) {
        await notesAPI.deleteNote(id);
        const updatedNotes = notes.filter((note) => note._id !== id);
        setNotes(updatedNotes);
    }

    useEffect(() => {
        async function fetchData() {
            const notes = await notesAPI.getAll();
            setNotes(notes)
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Your notes</h1>
            <NewNote addNotes={addNotes}/>
            {(notes.length === 0) ? <h3>No notes yet!</h3> : <NotesList notes={ notes } deleteNote={ deleteNote } />}
        </>
    )
};

export default NotesPage;