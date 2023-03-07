import './NoteList.css';
import NoteItem from '../NoteItem/NoteItem';
import { INote } from '../App/App';

interface NoteListProps {
  addNote: () => void;
  handleSelectNote: (index: number) => void;
  notes: INote[];
  selectedNote: INote;
  handleDeleteNote: (index: number) => void;
}

function NoteList(props: NoteListProps) {

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
                index={note.index}
                handleSelectNote={props.handleSelectNote}
                selectedNote={props.selectedNote}
                handleDeleteNote={props.handleDeleteNote}
              />
            )
          }).reverse()
        }
      </ul>
    </aside>
  );
}

export default NoteList;
