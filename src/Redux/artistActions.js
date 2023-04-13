import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '982b075711b41bd16b86b6567cab6087';
const URL_TOP_ARTISTS = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=982b075711b41bd16b86b6567cab6087&format=json&limit=10';
const URL_ARTIST_ALBUMS = 'http://ws.audioscrobbler.com/2.0/?format=json&method=artist.gettopalbums';

const getTopArtists = createAsyncThunk('artists/getTopArtists', async () => {
  try {
    const response = await axios.get(URL_TOP_ARTISTS);
    return response.data.artists.artist;
  } catch (error) {
    return error;
  }
});

const getArtistAlbums = createAsyncThunk('artists/getArtistInfo', async (artistName) => {
  // console.log(artistName);
  try {
    const response = await axios.get(URL_ARTIST_ALBUMS, {
      params: {
        artist: artistName,
        api_key: API_KEY,
        limit: 4,
        format: 'json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});

export { getTopArtists, getArtistAlbums };
