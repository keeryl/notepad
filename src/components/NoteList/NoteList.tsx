import { useEffect } from 'react';
import './NoteList.css';
import NoteItem from '../NoteItem/NoteItem';
import { INote } from '../App/App';


interface NoteListProps {
  addNote: () => void;
  handleSelectNote: (index: number) => void;
  notes: INote[];
  selectedNote: INote;
}

function NoteList(props: NoteListProps) {

  useEffect(() => {

  }, [props.notes]);

  return (
    <aside className="noteList">
      <button
        className="noteList__addBtn"
        type="button"
        onClick={() => props.addNote()}
      >
        Добавить заметку
      </button>
      <ul>
        {
          props.notes.map((note, idx) => {
            return (
              <NoteItem
                key={idx}
                title={note.title}
                note={note.note}
                index={idx}
                handleSelectNote={props.handleSelectNote}
                selectedNote={props.selectedNote}
              />
            )
          })
        }
      </ul>
    </aside>
  );
}

export default NoteList;
