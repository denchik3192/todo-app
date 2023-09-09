import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './reducers/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});
