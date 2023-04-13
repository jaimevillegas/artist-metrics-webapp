import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getTopArtists from '../Redux/artistActions';
import ArtistCard from './ArtistCard';

const Home = () => {
  const topArtists = useSelector((state) => state.artists.topArtists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopArtists());
  }, []);

  console.log(topArtists);

  return (
    <>
      <h1>
        hello
        {' '}
      </h1>
      {topArtists.artists.artist.map((artistItem) => (
        <ArtistCard
          key={artistItem.playcount}
          name={artistItem.name}
          playcount={artistItem.playcount}
          listeners={artistItem.listeners}
        />
      ))}
    </>

  );
};

export default Home;
