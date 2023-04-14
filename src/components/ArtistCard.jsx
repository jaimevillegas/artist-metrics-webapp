import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setArtist } from '../Redux/artistNameSlice';
import './Home.scss';
import artistImage from './music-player.png';

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
      <div className="artist-img">
        <img src={artistImage} alt="music-player" />
      </div>
      <div className="artist-info">
        <p className="artist-name">{name}</p>
        <p className="artist-playcount">{playcount}</p>
        <p className="artist-listeners">{listeners}</p>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  playcount: PropTypes.string.isRequired,
  listeners: PropTypes.string.isRequired,
};

export default ArtistCard;
