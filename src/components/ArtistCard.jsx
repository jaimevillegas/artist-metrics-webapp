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
  playcount: PropTypes.number.isRequired,
  listeners: PropTypes.number.isRequired,
};

export default ArtistCard;
