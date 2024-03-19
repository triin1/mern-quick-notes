const NotesList = ({ notes }) => {
   
    return (
        <div>
            {notes.map((note, index) =>
                <p key={index}>{note}</p>
            )}
        </div>
    )
};

export default NotesList;