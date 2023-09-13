import React, { useEffect, useRef, useState } from 'react';
import s from './noteitem.module.scss';
import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../../redux/reducers/notesSlice';

const NoteItem = ({ id, note, weather, date, time, icon }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(note);
  const dispatch = useDispatch();
  const texareaRef = useRef(null);

  useEffect(() => {
    if (isEdit) texareaRef.current.focus();
  }, [isEdit]);

  const removeNote = () => {
    dispatch(deleteNote(id));
  };

  const toggleEditNote = () => {
    dispatch(editNote({ id, editValue }));
    setIsEdit(!isEdit);
  };

  const handleEditInput = (e) => {
    const { value } = e.target;
    setEditValue(value);
  };

  return (
    <div className={s.noteBlock}>
      {isEdit ? (
        <textarea ref={texareaRef} onChange={handleEditInput} value={editValue} />
      ) : (
        <div className={s.note}>{note}</div>
      )}
      <div className={s.weatherBlock}>
        <img src={iconUrl} alt="Weather Icon" />
        <div className={s.temperature}>{weather} C</div>
        <div className={s.date}>{date}</div>
        <div className={s.time}>{time}</div>
      </div>
      <div className={s.buttonsBlock}>
        <div className={s.deleteButton} onClick={removeNote}></div>
        <div className={s.editButton} onClick={toggleEditNote}></div>
      </div>
    </div>
  );
};

export default NoteItem;
