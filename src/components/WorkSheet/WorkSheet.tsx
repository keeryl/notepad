import { useEffect } from 'react';
import './WorkSheet.css';
import { INote } from '../App/App';

interface WorkSheetProps {
  handleNoteChange: (value: string, noteId: number) => void;
  handleNoteTitleChange: (value: string, noteId: number) => void;
  noteValue: string;
  selectedNote: INote;
}

function WorkSheet(props: WorkSheetProps) {

  useEffect(() => {
    console.log('props.selectedNote', Object.keys(props.selectedNote).length);
  }, [props.selectedNote]);

  return (
    <article className="workSheet">
      {
       Object.keys(props.selectedNote).length !== 0 ?
       <>
        <input
        className="workSheet__title"
        value={props.selectedNote.title}
        placeholder="Введите заголовок"
        maxLength={50}
        onChange={(e) => props.handleNoteTitleChange(e.target.value, props.selectedNote.index)}
        />
        <textarea
          value={props.selectedNote.note}
          placeholder="Напишите заметку"
          autoFocus={true}
          className="workSheet__note"
          spellCheck="true"
          onChange={(e) => props.handleNoteChange(e.target.value, props.selectedNote.index)}
        />
       </>
      :
       <p>Выберите заметку</p>
      }
    </article>
  );
}

export default WorkSheet;
