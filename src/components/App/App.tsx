import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import NotePad from '../NotePad/NotePad';
import Footer from '../Footer/Footer';

export interface INote {
  title: string;
  note: string;
  index: number;
}

function App() {

  const [ noteValue, setNoteValue ] = useState(``);
  const [ notes, setNotes ] = useState<INote[]>([{}] as INote[]);
  const [ selectedNote, setSelectedNote ] = useState<INote>({} as INote);
  useEffect(() => {
    // if (!localStorage.getItem('noteApp')) {
    //   setNotes([{ title: '', note: '' }]);
    // } else {
    //   console.log(localStorage.getItem('noteApp'))
    //   // setNotes(JSON.parse(localStorage.getItem('noteApp')));
    // }
    // return () => {
    //   localStorage.setItem('noteApp', JSON.parse(notes));
    // }
    // setNotes([{ title: 'Title', note: 'Text' }]);
    // setNotes([{ title: 'Title', note: 'Text', index: 0 }]);
    setNotes((prevState) => {
      return prevState.map((item, idx) => {
        item.index = idx;
        item.title = '';
        item.note = '';
        return item;
      })
    });
    setSelectedNote(notes[0]);
  }, []);

  useEffect(() => {
    console.log('selectedNote', selectedNote)
  }, [selectedNote])

  const handleNoteChange = (value: string, noteId: number) => {
    setNotes((prevState) => {
      return prevState.map((item, idx) => {
        if (idx === noteId) {
          item.note = value;
          return item;
        } else {
          return item;
        }
      })
    });
  }

  const handleNoteTitleChange = (value: string, noteId: number) => {
    setNotes((prevState) => {
      return prevState.map((item, idx) => {
        if (idx === noteId) {
          item.title = value;
          return item;
        } else {
          return item;
        }
      })
    });
  }

  const handleNoteAdd = () => {
    setNotes([ ...notes, { title: '', note: '', index: notes.length }]);
  }

  const handleSelectNote = (index: number) => {
    setSelectedNote(notes[index]);
  }

  return (
    <div className="App">
      <Header/>
      <NotePad
        handleNoteChange={handleNoteChange}
        handleNoteTitleChange={handleNoteTitleChange}
        handleSelectNote={handleSelectNote}
        noteValue={noteValue}
        addNote={handleNoteAdd}
        notes={notes}
        selectedNote={selectedNote}
      />
      <Footer/>
    </div>
  );
}

export default App;
