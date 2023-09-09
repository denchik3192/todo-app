import React from 'react';
import s from './noteinput.scss';

const NoteInput = () => {
  return (
    <form>
      <label>
        Add note...
        <input id={s.noteInput} type="text" name="note" />
      </label>
    </form>
  );
};

export default NoteInput;
