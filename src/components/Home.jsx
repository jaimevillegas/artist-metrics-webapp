// import { useEffect } from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { getArtistAlbums } from '../Redux/artistActions';
import ArtistCard from './ArtistCard';

const Home = () => {
  const topArtists = useSelector((state) => state.artists.topArtists);

  return (
    <div>
      {topArtists.map((artistItem) => (
        <ArtistCard
          key={artistItem.playcount}
          name={artistItem.name}
          playcount={artistItem.playcount}
          listeners={artistItem.listeners}
        />
      ))}

    </div>

  );
};

export default Home;
