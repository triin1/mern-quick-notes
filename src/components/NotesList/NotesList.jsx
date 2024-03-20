const NotesList = ({ notes }) => {

    return (
        <div>
            {notes.map((note) =>
                <div key={note._id}>
                    <p>{new Date(note.createdAt).toLocaleString()}</p>
                    <p>{note.text}</p>
                    
                </div>
            )}
        </div>
    )
};

export default NotesList;