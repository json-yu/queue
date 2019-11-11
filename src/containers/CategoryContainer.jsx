import React, { Component } from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';
import debounce from "lodash.debounce";


class CategoryContainer extends Component {
  constructor(props) {
    super(props);
    
    if (this.props.categoryPage) {
      window.onscroll = debounce(() => {
        this.props.search();
    
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
          // load function should be invoked here
          // this.search();
        }
      });
    }
  }

  render() { 

    // render map and list of businessess from 
  let search = null;
  let searchDisplayResults = this.props.searchResults.map((element, i) => {
    // console.log('search results', props.searchResults);
    return <li className="list-item" key = {i}>
      {element.name}
      {/* // need to grab the unique id provided from the yelp api data search results that are saved in state. need to use it to save into our database */}
      <button onClick={() => this.props.selectVenue(element.id, element.name)}>Select</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </li>
  })


  if (this.props.categoryPage) {
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
     );
  }
}
 
export default CategoryContainer;
