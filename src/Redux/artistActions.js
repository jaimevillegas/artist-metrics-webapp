import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=982b075711b41bd16b86b6567cab6087&format=json&limit=10';

const getTopArtists = createAsyncThunk('artists/getTopArtists', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

export default getTopArtists;
