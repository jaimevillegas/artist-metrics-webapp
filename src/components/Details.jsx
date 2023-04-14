import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getArtistAlbums } from '../Redux/artistActions';

const Details = (props) => {
  // eslint-disable-next-line react/prop-types
  const { artistName } = props;

  const dispatch = useDispatch();
  const topAlbums = useSelector((state) => state.albums.artistAlbums);

  useEffect(() => {
    dispatch(getArtistAlbums(artistName));
  }, []);

  return (
    <>
      <h1>{artistName}</h1>
      <h2>Top Albums</h2>
      {topAlbums.map((album) => (
        <p key={album.name}>{album.name}</p>
      ))}
      <h2>Top Tracks</h2>

      {/* <p>{topAlbums}</p> */}

    </>
  );
};

Details.protoTypes = {
  testProp: PropTypes.string.isRequired,
};

export default Details;
