import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../asyncActions/fetchWeather';

const initialState = {
  notes: [],
  weather: '12',
  icon: null,
  status: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action) {
      const newId = Math.random();
      state.notes.push({
        id: newId,
        note: action.payload.inputValue,
        weather: Math.round(state.weather),
        date: action.payload.date.slice(0, 11),
        time: action.payload.date.slice(11, 21),
        icon: state.icon,
      });
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((el) => el.id !== action.payload);
    },
    addNotes(state, action) {
      state.notes = action.payload;
    },
    editNote(state, action) {
      const newNotes = state.notes.filter((item) => {
        return item.id === action.payload.id ? (item.note = action.payload.editValue) : item;
      });
      state.notes = newNotes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.status = 'loading...';
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload.main.temp;
      state.icon = action.payload.weather[0].icon;
      state.status = 'sucsess';
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export default notesSlice.reducer;
export const { addNote, deleteNote, editNote, addNotes } = notesSlice.actions;
