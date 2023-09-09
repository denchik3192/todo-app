import React from 'react';
import s from './noteitem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/reducers/notesSlice';

const NoteItem = ({ id, content }) => {
  const dispatch = useDispatch();

  const removeNote = () => {
    dispatch(deleteNote(id));
  };

  return (
    <div className={s.toDo}>
      <div className={s.note}>{content}</div>
      <div className={s.weatherBlock}>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon" />
        <div className={s.temperature}>16 C</div>
        <div className={s.date}>2 Nov 2025 </div>
        <time className={s.time}>15:16 </time>
      </div>
      <div className={s.buttonsBlock}>
        <div className={s.deleteButton} onClick={removeNote}></div>
        <div className={s.editButton}></div>
      </div>
    </div>
  );
};

export default NoteItem;
