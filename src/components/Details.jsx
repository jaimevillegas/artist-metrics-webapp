import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getArtistAlbums, getArtistTracks, getArtistTags } from '../Redux/artistActions';
// import { setArtist } from '../Redux/artistNameSlice';

const Details = (props) => {
  // eslint-disable-next-line react/prop-types
  const { artistName } = props;

  const dispatch = useDispatch();
  const topAlbums = useSelector((state) => state.albums.artistAlbums);
  const topTracks = useSelector((state) => state.tracks.artistTracks);
  // const topTags = useSelector((state) => state.tags.artistTags);

  useEffect(() => {
    dispatch(getArtistAlbums(artistName));
  }, []);

  useEffect(() => {
    dispatch(getArtistTracks(artistName));
  }, []);

  useEffect(() => {
    dispatch(getArtistTags(artistName));
  }, []);

  // const handleSetArtist = (artist) => {
  //   dispatch(setArtist(artist));
  // };

  return (
    <>
      <h1>{artistName}</h1>
      <h2>Top Albums</h2>
      {topAlbums.map((album) => (
        <p key={album.name}>{album.name}</p>
      ))}
      <h2>Top Tracks</h2>
      {topTracks.map((track) => (
        <p key={track.name}>{track.name}</p>
      ))}
      {/* <h2>Top Tags</h2>
      <p key={topTags[0].name}>{topTags[0].name}</p>
      <p key={topTags[1].name}>{topTags[1].name}</p> */}

      {/* <p>{topAlbums}</p> */}

    </>
  );
};

Details.protoTypes = {
  testProp: PropTypes.string.isRequired,
};

export default Details;
