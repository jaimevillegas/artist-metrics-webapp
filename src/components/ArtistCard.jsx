import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setArtist } from '../Redux/artistNameSlice';

// Write a function to set a store value
// const setStoreValue = (value) => {
//   store.dispatch({
//     type: 'SET_VALUE',
//     payload: value,
//   });
// };

const ArtistCard = (props) => {
  const {
    name, playcount, listeners,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setArtist(name));
    navigate('/details');
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} className="artist-container">
      <p>{name}</p>
      <p>{playcount}</p>
      <p>{listeners}</p>
      <hr />
    </div>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  playcount: PropTypes.string.isRequired,
  listeners: PropTypes.string.isRequired,
};

export default ArtistCard;
