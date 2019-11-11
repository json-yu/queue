import React, { Component } from 'react';
import SearchDisplay from '../components/SearchDisplay.jsx';
import Map from '../components/Map.jsx';
import debounce from "lodash.debounce";
import '../css/CategoryPage.css';

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
    // if (this.props.categoryPage) {
    //   window.onscroll = debounce(() => {
    //     this.props.search();
    
    //     if (
    //       window.innerHeight + document.documentElement.scrollTop
    //       === document.documentElement.offsetHeight
    //     ) {
    //       // load function should be invoked here
    //       // this.search();
    //     }
    //   });
    // }
  }

  render() { 
    // render map and list of businessess from 
  let search = null;
  let searchDisplayResults = this.props.searchResults.map((element, i) => {
    // console.log('search results', props.searchResults);
    return <li className="list-item" key = {i}>
      {element.name}
      <div>
        {element.category}
        {element.location.address1}
        {element.location.address2}
        {element.location.city}
        {element.location.state}
        {element.location.zip_code}
        {element.phone}
      </div>
      {/* // need to grab the unique id provided from the yelp api data search results that are saved in state. need to use it to save into our database */}
      <button onClick={() => this.props.selectVenue(element.id, element.name, element.url, element.image, element.location, element.phone)}>Select</button>
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
        <section className="search-bar">
          <input type="input" id="searchInput" placeholder="Business or Category" onChange={ this.props.setSearchInput }/>
          <input type="input" id="location" placeholder="Location" onChange={ this.props.setLocation }/>
          <input type="button" id="searchButton" onClick={ this.props.search }/>
        </section>
        {search}
    </div>
     );
  }
}
 
export default CategoryContainer;
