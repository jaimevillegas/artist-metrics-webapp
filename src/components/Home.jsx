/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArtistCard from './ArtistCard';
import './Home.scss';

const Home = () => {
  const topArtists = useSelector((state) => state.artists.topArtists);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className="home-container">
      <div className="header-container">
        <i className="fa-solid fa-bars" />
        <h1>Top Artists</h1>
        <div className="top-icons-container">
          <i onClick={handleSearch} className="fa-solid fa-magnifying-glass" />
        </div>
      </div>

      <div className="topArtists-container">
        {topArtists.map((artistItem) => (
          <ArtistCard
            key={artistItem.playcount}
            name={artistItem.name}
            playcount={artistItem.playcount}
            listeners={artistItem.listeners}
          />
        ))}

      </div>
    </div>

  );
};

export default Home;
