import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
      location: '',
      searchResults: [],
      waitTimes: [],
      homePage: true,
      categoryPage: false,
      venuePage: false,
    }

    this.setLocation = this.setLocation.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.search = this.search.bind(this);
  }

  setLocation(event) {
    this.setState({ location: event.target.value });
  }

  setSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  search(event) {
    console.log(event);
    this.setState({ 
      homePage: false,
      categoryPage: true,
    })
    fetch ('/api', {
      method: 'post',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }


  render() {
    let home = null;
    if (this.state.homePage) {
      home = 
      <div>
        <div>
        Home Page
        </div>
        <input type="input" id="searchInput" placeholder="Business or Category" onChange={this.setSearchInput}/>
        <input type="input" id="location" placeholder="Location" onChange={this.setLocation}/>
        <input type="button" id="searchButton" value="Search" onClick={this.search}/>
      </div>
    }

    let category = null;
    if (this.state.categoryPage) {
      category = <CategoryContainer searchInput={this.state.searchInput} searchResults={this.state.searchResults}/>
    }

    let venue = null;
    if (this.state.venuePage) {
      venue = 
      <div>
        <VenueContainer/>
      </div>
    }

    return (
      <div>
      {home}
      {category}
      {venue}
      </div>
    )
  }
}

export default MainContainer;