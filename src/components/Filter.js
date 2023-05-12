import React, { useRef } from 'react';
import './Filter.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/search-slice';



const Filter = (props) => {
// console.log(props.items);
  const domainRef = useRef('');
  const genderRef = useRef('');
  const availabilityRef = useRef('');
const dispatch=useDispatch();
  const handleFilter = () => {
 
    const selectedDomain = domainRef.current.value;
    const selectedGender = genderRef.current.value;
     const selectedAvailability = availabilityRef.current.value;

    const filteredItems = props.items.filter((item) => {
        let avail="true";
        if(item.available===false)avail="false";
      const filterDomain = item.domain.includes(selectedDomain);
      const filterGender = selectedGender === '' || item.gender === selectedGender;
        const filterAvailability = selectedAvailability === '' || avail=== selectedAvailability;

      return filterDomain && filterGender && filterAvailability; 
    });
  console.log(filteredItems)
    dispatch(uiActions.fill(filteredItems));

  };

  function extractUniqueDomains() {
    const uniqueDomains = new Set();
    
    props.items.forEach(item => {
      uniqueDomains.add(item.domain);
    });
    
  
    return (Array.from(uniqueDomains));
  }

  const availableDomains = extractUniqueDomains();
//   console.log(availableDomains,'availabel domains')

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="filter-option">
        <label>Domain:</label>
        <select ref={domainRef}>
          <option value="">All</option>
          {availableDomains.map((domain,index) => (
            <option key={index} >{domain}</option>
          ))}
        </select>
      </div>
      <div className="filter-option">
        <label>Gender:</label>
        <select ref={genderRef}>
          <option value="">All</option>
          <option value="Male">Male     </option>
          <option value="Female">Female     </option>
        </select>
      </div>
      <div className="filter-option">
        <label>Availability:</label>
        <select ref={availabilityRef}>
          <option value="">All</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
