import React, { Component } from 'react';
import CategoryContainer from './CategoryContainer.jsx';
import VenueContainer from './VenueContainer.jsx';
import axios from 'axios';

class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
      location: '',
      searchResults: [{id: 'testID1', name: '85 C Bakery', url: "https://www.yelp.com/biz/hironori-craft-ramen-irvine-irvine?adjust_creative=H1bH90ZvaxqOkwtYtJapbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=H1bH90ZvaxqOkwtYtJapbA",
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/D7UcJNaajaqXkQDJgey2ug/o.jpg", location: {address1: "2222 Michelson Dr", city: "Irvine", state: "CA", zip_code: "92612"}}, {id: 'testID2', name: '85 C Bakery', url: "https://www.yelp.com/biz/hironori-craft-ramen-irvine-irvine?adjust_creative=H1bH90ZvaxqOkwtYtJapbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=H1bH90ZvaxqOkwtYtJapbA",
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/D7UcJNaajaqXkQDJgey2ug/o.jpg"}, {id: 'testID3', name: '85 C Bakery', url: "https://www.yelp.com/biz/hironori-craft-ramen-irvine-irvine?adjust_creative=H1bH90ZvaxqOkwtYtJapbA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=H1bH90ZvaxqOkwtYtJapbA",
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/D7UcJNaajaqXkQDJgey2ug/o.jpg"}],
      waitTime: 0,
      venueId: '',
      venueName: '',
      venueUrl: '',
      venueImage: '',
      venueLocation: '',
      latitude: '',
      longitude: '',
      homePage: true,
      categoryPage: false,
      venuePage: false,      
    }

    this.setLocation = this.setLocation.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.selectVenue = this.selectVenue.bind(this);
    this.setWaitTime = this.setWaitTime.bind(this);
    this.addWaitTime = this.addWaitTime.bind(this);
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

  setWaitTime(event) {
    this.setState({ waitTime: event.target.value })
  }

  addWaitTime() {
    // create body from the things we've saved in state through the setwaittime and from selecting a specific venue
    const body = {
      waitTime: this.state.waitTime,
      venueId: this.state.venueId,
      venueName: this.state.venueName,
    }
    // console.log(body);
    fetch('/dbRouter/addWaitTime', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => console.log('addwaittime fetch request successful'))
    .catch((err) => {
      console.log(`${err}: addWaitTime func err when adding wait time`)
    })
  }
  
  selectVenue(id, name, url, image, location) {
    const venueId = id;
    const venueName = name;
    const venueUrl = url;
    const venueImage = image;
    const venueLocation = location;
    this.setState({ 
      homePage: false,
      categoryPage: false,
      venuePage: true,
      venueId,
      venueName,
      venueUrl,
      venueImage,
      venueLocation,
    })
  }

  render() {
    // conditional rendering for the homepage; default true (shows first)
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

    // conditional render of the vendor page
  let venue = null;
  if (this.state.venuePage) {
    venue = 
    <VenueContainer
      venueId={this.state.venueId}
      venueName={this.state.venueName}
      venueUrl={this.state.venueUrl}
      venueImage={this.state.venueImage}
      venueLocation={this.state.venueLocation}
      setWaitTime={this.setWaitTime}
      addWaitTime={this.addWaitTime}
    />
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

