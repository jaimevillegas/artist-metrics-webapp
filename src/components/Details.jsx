import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getArtistAlbums } from '../Redux/artistActions';

const Details = (props) => {
  // eslint-disable-next-line react/prop-types
  const { testProp } = props;

  const dispatch = useDispatch();
  const topAlbums = useSelector((state) => state.albums.artistAlbums);

  useEffect(() => {
    dispatch(getArtistAlbums('Pink Floyd'));
  }, []);

  return (
    <>
      <h1>Details</h1>
      <p>{testProp}</p>
      {topAlbums.map((album) => (
        <p key={album.name}>{album.name}</p>
      ))}

      {/* <p>{topAlbums}</p> */}

    </>
  );
};

Details.protoTypes = {
  testProp: PropTypes.string.isRequired,
};

export default Details;
