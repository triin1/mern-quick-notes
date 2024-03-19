import { useState } from "react";

const NewNote = ({ addNotes }) => {
    const [newNote, setNewNote] = useState("")
    
    const _handleChange = (event) => {
        setNewNote(event.target.value)
    }
    
    const _handleSubmit = (event) => {
        event.preventDefault();
        addNotes(newNote);
        setNewNote("");
    };  

    return (  
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={_handleSubmit}>
                    <label>Insert note text:</label>
                        <input value={newNote} onChange={_handleChange} required />
                    <button type="submit">ADD NOTE</button>
                </form>
            </div>
      </div>
    )
};

export default NewNote;