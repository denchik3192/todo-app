import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {
      id: 1,
      content:
        'buy potatoes buy potatoesbuy potatoesbuy potatoesbuy potatoesbuy potatoesbuy potatoesbuy potatoesbuy potatoesbuy potatoes',
    },
    { id: 2, content: 'buy oranges' },
  ],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action) {
      const newId = state.notes.length + 1;
      state.notes.push({ id: newId, content: action.payload });
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((el) => el.id !== action.payload);
    },
    editNote(state, action) {
      state.notes = state.notes.filter((el) => el.id !== action.payload);
    },
  },
});

export default notesSlice.reducer;
export const { addNote, deleteNote, editNote } = notesSlice.actions;
