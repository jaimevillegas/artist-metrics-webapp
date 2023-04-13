import PropTypes from 'prop-types';

const ArtistCard = (props) => {
  const {
    name, playcount, listeners,
  } = props;
  return (
    <div className="artist-container">
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
