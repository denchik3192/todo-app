import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteItem from '../NoteItem/NoteItem';
import { fetchWeather } from '../../redux/reducers/notesSlice';
import s from './main.module.scss';
import { selectNotes } from '../../redux/selectors/selectNotes';

function Main() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <main>
      {notes.length > 0 ? (
        Object.values(notes)?.map((note) => <NoteItem {...note} key={note.id} />)
      ) : (
        <div className={s.noNotesBlock}>
          No notes, add a new one...
          <div className={s.arrow}></div>
        </div>
      )}
    </main>
  );
}

export default Main;
