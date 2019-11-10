import React from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';
import VendorContainer from './VenueContainer.jsx';


const CategoryContainer = (props) => {
  // render map and list of businessess from 
  let search = null;
  let searchDisplayResults = props.searchResults.map((element, i) => {
    // console.log('search results', props.searchResults);
    return <li key = {i}>
      {element}
      <button onClick={props.selectVenue}>Select</button>
    </li>
  })


  if (props.categoryPage) {
    search =  
    <div>
      <SearchDisplay
        searchDisplayResults={searchDisplayResults}
      />
      <Map/>
    </div>
  }

  let vendor = null;
  if (props.vendorPage) {
    vendor = <VendorContainer/>
  }

  return (
    <div>
      {search}
      {vendor}
    </div>
  )
}

export default CategoryContainer;