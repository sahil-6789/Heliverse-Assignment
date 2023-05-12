import React, { useState } from 'react';
import "./SearchBar.css";
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/search-slice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(uiActions.search(searchTerm));
  };

  return (
    <form onSubmit={handleFormSubmit} className='search-bar'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;










