import React from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';


const CategoryContainer = (props) => {
  // render map and list of businessess from 
  let search = null;
  let searchDisplayResults = props.searchResults.map((element, i) => {
    // console.log('search results', props.searchResults);
    return <li key = {i}>
      {element.id}
      {/* // need to grab the unique id provided from the yelp api data search results that are saved in state. need to use it to save into our database */}
      <button onClick={() => props.selectVenue(element.id, element.name)}>Select</button>
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

  return (
    <div>
      {search}
    </div>
  )
}

export default CategoryContainer;