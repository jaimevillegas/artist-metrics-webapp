import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setArtist } from '../Redux/artistNameSlice';
import './Home.scss';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate('/');
  };

  const handleInputForm = (e) => {
    dispatch(setArtist(e.target.value));
  };

  const handleSearchButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/details');
  };

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    <>
      <div className="home-container">
        <div className="header-container">
          <i onClick={handleGoBack} className="fa-solid fa-chevron-left" />
          <h1>Search Artist</h1>
          <div className="top-icons-container">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div className="search-container">
          <div className="search-input-container">
            {/* <i className="fa-solid fa-magnifying-glass" /> */}
            <form action="">
              <input className="input-search" type="text" placeholder="Search" onChange={handleInputForm} />

              <button
                className="button-search"
                type="button"
                onClick={handleSearchButton}
              >
                Search

              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
