import React, { useState } from 'react';
import s from './footer.module.scss';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/reducers/notesSlice';

function Footer() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setinputError] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    const length = e.target.value.length;
    if (length > 300) {
      setinputError('The length is limited to 300 characters.');
    } else {
      setinputError('');
      setInputValue(value);
    }
  };

  const getDate = () => {
    const date = new Date().toString().slice(4, 21);
    return date;
  };

  const handleSubmit = (e) => {
    const date = getDate();
    e.preventDefault();
    setInputValue('');
    dispatch(addNote({ inputValue, date }));
  };

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <label className={s.inputLabel} htmlFor="note">
          Add note...
        </label>
        {inputError && <span className={s.errorBlock}>{inputError}</span>}
        <input
          className={s.noteInput}
          value={inputValue}
          onChange={handleInput}
          type="text"
          name="note"
        />
      </form>
    </footer>
  );
}

export default Footer;
