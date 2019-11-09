import React from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';

const CategoryContainer = (props) => {
  // render map and list of businessess from 
  return (
    <div>
      <SearchDisplay searchResults={props.searchResults}/>
      <Map/>
    </div>
  )
}

export default CategoryContainer;