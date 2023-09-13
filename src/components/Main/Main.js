import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteItem from '../NoteItem/NoteItem';
import { addNotes } from '../../redux/reducers/notesSlice';
import s from './main.module.scss';
import { selectNotes } from '../../redux/selectors/selectNotes';
import { fetchNotesFromLS } from '../../utils/fetchNotesFromLS';
import { setNotesToLS } from '../../utils/setNotesToLS';
import { fetchWeather } from '../../redux/asyncActions/fetchWeather';

function Main() {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    const notes = fetchNotesFromLS();
    if (notes.length) dispatch(addNotes(notes));
    dispatch(fetchWeather());
  }, [dispatch]);

  useEffect(() => {
    setNotesToLS(notes);
  }, [notes]);

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
