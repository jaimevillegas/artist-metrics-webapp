/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Search = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
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
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <button className="button-search" type="button">Search</button>
      </div>
    </>
  );
};

export default Search;
