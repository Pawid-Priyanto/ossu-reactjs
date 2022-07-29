import React, {useState, useEffect} from 'react';
import Note from './Note'
import noteService from './services/notes'
import axios from 'axios'
const App = () => {

// const hook = ()  => {
//   console.log('useeffect')
//   axios.get('http://localhost:3001/notes').then(response => {
//     console.log('janji terpenuhi')
//     setNotes(response.data)
//   })
// }

  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  
  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  // const toggleImportanceOf = (id) => {
  //   console.log(`importace of ${id} need to be toggled`)
  //   const url = `http://localhost:3001/notes/${id}`
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = {...note, important: !note.important}

    // axios.put(url, changedNote).then(response => {
    //   setNotes(notes.map(note => note.id !== id ? note : response.data))
    // })

  //   noteService
  //   .update(id, changedNote)
  //   .then(returnedNote => {
  //     setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  //   })
  // }

  // const toggleImportanceOf = id => {
  //   const note = notes.find(n => n.id === id)
  //   const changedNote = { ...note, important: !note.important }

  //   noteService
  //     .update(id, changedNote)
  //     .then(response => {
  //       setNotes(notes.map(note => note.id !== id ? note : response.data))
  //     })
  // }
  
  // useEffect(
    // console.log('effect')
    // axios.get('http://localhost:3001/notes').then(response => {
    //   console.log('promise fulfilled')
    //   const notes = response.data;
    //   setNotes(notes)
    // })
    // hook,
    // noteService
    // .getAll()
    // .then(initialNotes => {
    //   setNotes(initialNotes)
    // }), [])

    useEffect(() => {
      noteService
        .getAll()
        .then(response => {
          setNotes(response.data)
        })
    }, [])
  

  console.log('render', notes?.length, 'notes')
  const addNote = (e) => {
    e.preventDefault()

    const noteObject ={
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5,
      id: notes.lenght + 1
    }

    axios.post('http://localhost:3001/notes', noteObject).then(
      response => {
        console.log(response)
        setNotes(notes.concat(response.data))
        setNewNote('')
      }
    )

    // noteService
    // .create(noteObject)
    // .then(returnedNote => {
    //   setNotes(notes.concat(returnedNote))
    //   setNewNote('')
    // })
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
      {/* <ul>
        {noteToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>)}      
      </ul> */}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App;