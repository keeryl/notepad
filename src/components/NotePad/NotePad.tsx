import './NotePad.css';
import WorkSheet from '../WorkSheet/WorkSheet';
import NoteList from '../NoteList/NoteList';
import { INote } from '../App/App';

interface NotePadProps {
  handleNoteChange: (value: string, noteId: number) => void;
  handleNoteTitleChange: (value: string, noteId: number) => void;
  handleSelectNote: (index: number) => void;
  noteValue: string;
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
      />
      <WorkSheet
        handleNoteChange={props.handleNoteChange}
        handleNoteTitleChange={props.handleNoteTitleChange}
        noteValue={props.noteValue}
        selectedNote={props.selectedNote}
      />
    </main>
  );
}

export default NotePad;
