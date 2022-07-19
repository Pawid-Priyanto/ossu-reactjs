import React, {useState} from 'react';
import Note from './Note'
const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  const addNote = (e) => {
    e.preventDefault()

    const noteObject ={
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5,
      id: notes.lenght + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  return(
    <div>
      <h3>Notes</h3>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note}/>)}      
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App;