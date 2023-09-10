import React, { useState } from 'react';
import s from './noteitem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../../redux/reducers/notesSlice';

const NoteItem = ({ id, note, weather, date, time }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(note);
  const dispatch = useDispatch();

  const removeNote = () => {
    dispatch(deleteNote(id));
  };
  const toggleEditNote = () => {
    dispatch(editNote({ id, editValue }));
    setIsEdit(!isEdit);
  };

  const handleEditInput = (e) => {
    setEditValue(e.target.value);
  };
  console.log('render');
  return (
    <div className={s.toDo}>
      {isEdit ? (
        <textarea onChange={handleEditInput} value={editValue} />
      ) : (
        <p className={s.note}>{note}</p>
      )}
      <div className={s.weatherBlock}>
        <img src="https://openweathermap.org/img/wn/10n@2x.png" alt="Weather Icon" />
        <div className={s.temperature}>{weather} C</div>
        <div className={s.date}>{date} </div>
        <time className={s.time}>{time} </time>
      </div>
      <div className={s.buttonsBlock}>
        <div className={s.deleteButton} onClick={removeNote}></div>
        <div className={s.editButton} onClick={toggleEditNote}></div>
      </div>
    </div>
  );
};

export default NoteItem;
