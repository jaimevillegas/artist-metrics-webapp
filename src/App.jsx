import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopArtists } from './Redux/artistActions';

import Home from './components/Home';
import Details from './components/Details';
import Search from './components/Search';

function App() {
  const topArtists = useSelector((state) => state.artists.topArtists);
  const artistName = useSelector((state) => state.artistName);
  const artistListens = useSelector((state) => state.artsitListens);
  const dispatch = useDispatch();

  useEffect(() => {
    if (topArtists.length === 0) {
      dispatch(getTopArtists());
    }
  }, [dispatch, topArtists.length]);

  return (
    <div className="App">
      <BrowserRouter basename="/artist-metrics-webapp">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="details"
            element={<Details artistName={artistName} artistListens={artistListens} />}
          />
          <Route
            path="search"
            element={<Search />}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
