import './NoteItem.css';
import { INote } from '../App/App';

interface NoteItemProps {
  title: string;
  note: string;
  index: number;
  handleSelectNote: (index: number) => void;
  selectedNote: INote;
  handleDeleteNote: (index: number) => void;
}

function NoteItem(props: NoteItemProps) {

  const selected = props.selectedNote.index === props.index;

  return (
    <li
      className={`noteItem ${selected ? 'noteItem_selected' : ''}`}
      onClick={() => props.handleSelectNote(props.index)}
    >
      <div className="noteItem__wrapper">
        <h3 className="noteItem__title">{props.title}</h3>
        <button
          className="noteItem__deleteBtn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            props.handleDeleteNote(props.index)
          }}
        >
          удалить
        </button>
      </div>
      <p className="noteItem__title">{props.note}</p>
    </li>
  );
}

export default NoteItem;
