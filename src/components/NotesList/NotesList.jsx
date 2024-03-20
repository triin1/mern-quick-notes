import "./NotesList.css"

const NotesList = ({ notes, deleteNote }) => { 
    return (
        <div className="notes-block">
            {notes.map((note) =>
                <div key={note._id} className="notes">
                    <p>{new Date(note.createdAt).toLocaleString()}</p>
                    <p className="text">{note.text}</p>
                    <button onClick={ () => deleteNote(note._id) } className="delete-button">Delete</button>
                </div>
            )};
        </div>
    )
};

export default NotesList;