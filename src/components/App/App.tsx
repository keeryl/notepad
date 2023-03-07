import { useState, useEffect } from 'react';
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

  const [ notes, setNotes ] = useState<INote[]>([{}] as INote[]);
  const [ selectedNote, setSelectedNote ] = useState<INote>({} as INote);
  useEffect(() => {
    if (localStorage.getItem('noteApp') !== null) {
      setNotes([ ...JSON.parse(localStorage.getItem('noteApp')!) ]);
      // setSelectedNote(notes[0]);
    } else {
      setNotes((prevState) => {
        return prevState.map((item, idx) => {
          item.title = '';
          item.note = '';
          item.index = idx;
          return item;
        });
      });
      // setSelectedNote(notes[0]);
    }
    return () => {
      localStorage.setItem('noteApp', JSON.stringify(notes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('noteApp', JSON.stringify(notes));
    notes.length === 0 && setSelectedNote({} as INote);
  }, [notes]);

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
      });
    });
  }

  const handleNoteAdd = () => {
    const index = notes.length;
    setNotes([ ...notes, { title: '', note: '', index: index }]);
    setSelectedNote({} as INote);
  }

  const handleDeleteNote = (noteId: number) => {
    if (selectedNote.index === noteId) {
      setSelectedNote({} as INote);
    }
    notes.splice(noteId, 1);
    const newArr = notes.map((item, idx) => {
      item.index = idx;
      return item;
    })
    setNotes([...newArr]);
  }

  const handleSelectNote = (index: number) => {
    if (selectedNote.index === index) {
      setSelectedNote({} as INote);
    } else {
      setSelectedNote(notes[index]);
    }
  }

  return (
    <div className="App">
      <Header/>
      <NotePad
        handleNoteChange={handleNoteChange}
        handleNoteTitleChange={handleNoteTitleChange}
        handleSelectNote={handleSelectNote}
        handleDeleteNote={handleDeleteNote}
        addNote={handleNoteAdd}
        notes={notes}
        selectedNote={selectedNote}
      />
      <Footer/>
    </div>
  );
}

export default App;
