import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './noteinput.scss';
import { addNote } from '../../redux/reducers/notesSlice';

const NoteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(inputValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.inputLabel} htmlFor="note">
        Add note...
      </label>
      <input
        className={s.noteInput}
        value={inputValue}
        onChange={inputHandler}
        type="text"
        name="note"
      />
    </form>
  );
};

export default NoteInput;
