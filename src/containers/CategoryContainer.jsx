import React from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';


const CategoryContainer = (props) => {
  // render map and list of businessess from 
  let search = null;
  let searchDisplayResults = props.searchResults.map((element, i) => {
    // console.log('search results', props.searchResults);
    return <li key = {i}>
      {element.name}
      {/* // need to grab the unique id provided from the yelp api data search results that are saved in state. need to use it to save into our database */}
      <button onClick={() => props.selectVenue(element.id, element.name, element.url, element.image, element.location)}>Select</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </li>
  })


  if (props.categoryPage) {
    search =  
    <div>
      <SearchDisplay
        searchDisplayResults={searchDisplayResults}
      />
      {/* Temp disabled map */}
      {/* <Map latitude={props.latitude} longitude={props.longitude} /> */}
    </div>
  }

  return (
    <div>
      {search}
    </div>
  )
}

export default CategoryContainer;