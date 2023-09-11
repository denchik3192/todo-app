import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../../API/API';

export const fetchWeather = createAsyncThunk('notes/fetchWeather', async (_, rejectedWithValue) => {
  try {
    const response = await fetchWeatherData();
    if (response.cod !== 200) {
      throw new Error('Server Error!');
    }
    return response;
  } catch (error) {
    return rejectedWithValue(error.message);
  }
});

const initialState = {
  notes: [
    {
      id: 1,
      note: 'Buy new phone',
      weather: 16,
      date: '2 Nov 2025',
      time: '15:16',
      icon: '10d',
    },
  ],
  weather: '12',
  icon: null,
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
    editNote(state, action) {
      const newNotes = state.notes.filter((item) => {
        return item.id === action.payload.id ? (item.note = action.payload.editValue) : item;
      });
      state.notes = newNotes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {});
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload.main.temp;
      state.icon = action.payload.weather[0].icon;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {});
  },
});

export default notesSlice.reducer;
export const { addNote, deleteNote, editNote } = notesSlice.actions;

export const selectNotes = (state) => state.notes.notes;
