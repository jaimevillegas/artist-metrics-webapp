import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setArtist } from '../Redux/artistNameSlice';
import { setListens } from '../Redux/artistListensSlice';
import './Home.scss';
import artistImage from './music-player.png';
import { clearAlbums } from '../Redux/albumsSlice';
import { clearTracks } from '../Redux/tracksSlice';

const ArtistCard = (props) => {
  const {
    name, playcount, listeners,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setArtist(name));
    dispatch(setListens(playcount));
    dispatch(clearAlbums());
    dispatch(clearTracks());
    navigate('/details');
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleClick} className="artist-container">
      <div className="artist-img">
        <img src={artistImage} alt="music-player" />
      </div>
      <p className="artist-name">{name}</p>
      <p className="artist-playcount">
        <i className="fa-solid fa-play" />
        {'   '}
        {playcount}
      </p>
      <p className="artist-listeners">
        <i className="fa-solid fa-user" />
        {' '}
        {listeners}
      </p>
    </div>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  playcount: PropTypes.string.isRequired,
  listeners: PropTypes.string.isRequired,
};

export default ArtistCard;
