import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '982b075711b41bd16b86b6567cab6087';
const URL_TOP_ARTISTS = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=982b075711b41bd16b86b6567cab6087&format=json&limit=21';
const URL_ARTIST_ALBUMS = 'http://ws.audioscrobbler.com/2.0/?format=json&method=artist.gettopalbums';
const URL_ARTIST_TRACKS = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks';
const URL_ARTIST_TAGS = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags';

const getTopArtists = createAsyncThunk('artists/getTopArtists', async () => {
  try {
    const response = await axios.get(URL_TOP_ARTISTS);
    return response.data.artists.artist;
  } catch (error) {
    return error;
  }
});

const getArtistAlbums = createAsyncThunk('artists/getArtistAlbums', async (artistName) => {
  try {
    const response = await axios.get(URL_ARTIST_ALBUMS, {
      params: {
        artist: artistName,
        api_key: API_KEY,
        limit: 4,
        format: 'json',
      },
    });
    return response.data.topalbums.album;
  } catch (error) {
    return error;
  }
});

const getArtistTracks = createAsyncThunk('artists/getArtistTracks', async (artistName) => {
  try {
    const response = await axios.get(URL_ARTIST_TRACKS, {
      params: {
        artist: artistName,
        api_key: API_KEY,
        limit: 4,
        format: 'json',
      },
    });
    return response.data.toptracks.track;
  } catch (error) {
    return error;
  }
});

const getArtistTags = createAsyncThunk('artists/getArtistTags', async (artistName) => {
  try {
    const response = await axios.get(URL_ARTIST_TAGS, {
      params: {
        artist: artistName,
        api_key: API_KEY,
        limit: 2,
        format: 'json',
      },
    });
    return response.data.toptags.tag;
  } catch (error) {
    return error;
  }
});

export {
  getTopArtists, getArtistAlbums, getArtistTracks, getArtistTags,
};
