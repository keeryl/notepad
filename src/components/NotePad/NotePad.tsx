import './NotePad.css';
import WorkSheet from '../WorkSheet/WorkSheet';
import NoteList from '../NoteList/NoteList';
import { INote } from '../App/App';

interface NotePadProps {
  handleNoteChange: (value: string, noteId: number) => void;
  handleNoteTitleChange: (value: string, noteId: number) => void;
  handleSelectNote: (index: number) => void;
  handleDeleteNote: (index: number) => void;
  addNote: () => void;
  notes: INote[];
  selectedNote: INote;
}

function NotePad(props: NotePadProps) {
  return (
    <main className="notePad">
      <NoteList
        addNote={props.addNote}
        notes={props.notes}
        selectedNote={props.selectedNote}
        handleSelectNote={props.handleSelectNote}
        handleDeleteNote={props.handleDeleteNote}
      />
      <WorkSheet
        handleNoteChange={props.handleNoteChange}
        handleNoteTitleChange={props.handleNoteTitleChange}
        selectedNote={props.selectedNote}
      />
    </main>
  );
}

export default NotePad;
