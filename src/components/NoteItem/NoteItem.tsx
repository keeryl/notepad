import './NoteItem.css';
import { INote } from '../App/App';

function NoteItem(props: INote) {
  return (
    <li className="noteItem">
      <div className="noteItem__wrapper">
        <h3 className="noteItem__title">{props.title}</h3>
        <button className="noteItem__deleteBtn" type="button">удалить</button>
      </div>
      <p className="noteItem__title">{props.note}</p>
    </li>
  );
}

export default NoteItem;
