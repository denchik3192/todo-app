import { createAsyncThunk } from '@reduxjs/toolkit';
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
