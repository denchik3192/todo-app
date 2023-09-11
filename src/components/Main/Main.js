import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoteItem from '../NoteItem/NoteItem';
import { fetchWeather } from '../../redux/reducers/notesSlice';

function Main() {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <main>
      {Object.values(notes)?.map((note) => (
        <NoteItem {...note} key={note.id} />
      ))}
    </main>
  );
}

export default Main;
