import { useSelector } from 'react-redux';
import ArtistCard from './ArtistCard';
import './Home.scss';

const Home = () => {
  const topArtists = useSelector((state) => state.artists.topArtists);

  return (
    <div className="home-container">
      <div className="header-container">
        <i className="fa-solid fa-bars" />
        <h1>Top Artists</h1>
        <div className="top-icons-container">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
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
