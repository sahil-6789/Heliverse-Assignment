import React, { useState } from 'react';
import './Button.css';
import Filter from './Filter';
import app from '../config';
const data=app();

const FilterButton = (props) => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <div className="filter-button-container">
      <button className="filter-button" onClick={toggleFilter}>
      {props.children}
      </button>
      {isFilterOpen && (
        <div className="filter-overlay">
          {<Filter items={data}/>}
        </div>
      )}
    </div>
  );
};

export default FilterButton;



