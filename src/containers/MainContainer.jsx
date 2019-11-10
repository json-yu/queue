import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.jsx';
import axios from 'axios';

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
      location: '',
      latitude: '',
      longitude: '',
      searchResults: [1, 2, 3],
      waitTimes: [],
      homePage: true,
      categoryPage: false,
      venuePage: false,      
    }

    this.setLocation = this.setLocation.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.selectVenue = this.selectVenue.bind(this);
  }

  setLocation(event) {
    this.setState({ location: event.target.value });
  }

  setSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  search() {
    console.log('THIS STATE LOCATION : ', this.state.location);
    this.setState({ 
      homePage: false,
      categoryPage: true,
      venuePage: false,
    })
    fetch ('/api', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({location: this.state.location})
    })
      .then(response => response.json())
      .then(data => {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        const firstBusinessLatitude = parsedData.businesses[0].coordinates.latitude;
        const firstBusinessLongitude = parsedData.businesses[0].coordinates.longitude;
        this.setState({ latitude: firstBusinessLatitude.toString(), longitude: firstBusinessLongitude.toString() })
      })
  }

  selectVenue() {
    this.setState({ 
      categoryPage: false,
      venuePage: true,
    })
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
      category = 
      <CategoryContainer 
        searchInput={this.state.searchInput}
        location={this.state.location}
        searchResults={this.state.searchResults}
        waitTimes={this.state.waitTimes}
        homePage={this.state.homePage}
        categoryPage={this.state.categoryPage}
        venuePage={this.state.venuePage}   
        selectVenue={this.selectVenue}
        latitude={this.state.latitude}
        longitude={this.state.longitude}
      />
    }

    return (
      <div>
      {home}
      {category}
      </div>
    )
  }
}

export default MainContainer;

