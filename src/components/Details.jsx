/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getArtistAlbums, getArtistTracks, getArtistTags } from '../Redux/artistActions';
import artistImage from './music-player.png';
// import './Home.scss';
// import { setArtist } from '../Redux/artistNameSlice';

const Details = (props) => {
  // eslint-disable-next-line react/prop-types
  const { artistName, artistListens = '' } = props;

    <em>const fetchingComplete = useRef(false)</em>;

    const dispatch = useDispatch();
    const topAlbums = useSelector((state) => state.albums.artistAlbums);
    const topTracks = useSelector((state) => state.tracks.artistTracks);
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(getArtistAlbums(artistName));
      dispatch(getArtistTracks(artistName));
      dispatch(getArtistTags(artistName));
    }, [artistName, dispatch]);

    const handleGoBack = () => {
      navigate('/');
    };
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    return (
      <>
        <div className="header-container">
          <i onClick={handleGoBack} className="fa-solid fa-chevron-left" />
          <h1>Artist Details</h1>
          <div className="top-icons-container">
            <i className="fa-solid fa-microphone" />
            <i className="fa-solid fa-gear" />
          </div>
        </div>
        <div className="selected-artist-container">
          <img className="selected-artist-image" src={artistImage} alt="artist" />
          <div className="selected-artist-info">
            <h1 className="details-artist-header">{artistName}</h1>
            {artistListens === '' ? <p>{'holi '}</p>
              : (
                <p>
                  <i className="fa-solid fa-play" />
                  {' '}
                  Playcount:
                  {' '}
                  {artistListens}
                </p>
              )}
          </div>
        </div>
        <div className="albums-container">
          <h2>Top Albums</h2>
          {topAlbums.map((album) => (
            <div key={album.playcount} className="album-name-container">
              <p className="album-name-p" key={album.name}>
                {album.name}
              </p>
              <div>
                <i className="fa-solid fa-play" />
                <p key={album.playcount}>
                  {album.playcount}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="tracks-container">
          <h2>Top Tracks</h2>
          {topTracks.map((track) => (
            <div key={track.playcount} className="track-name-container">
              <p key={track.name}>{track.name}</p>
              <div>
                <i className="fa-solid fa-play" />
                <p key={track.playcount}>{track.playcount}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
};

Details.protoTypes = {
  testProp: PropTypes.string.isRequired,
};

export default Details;
