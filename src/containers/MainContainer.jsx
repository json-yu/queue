import React, { Component } from 'react';


class MainContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: '',
      business: '',
      category: '',
      homePage: true,
      categoryPage: false,
      venuePage: false,
    }



  }

  setLocation (event) {
    this.setState({ location: event.target.value });
  }


  render() {
    let home = null;
    if (this.state.homePage) {
      home = 
      <div>
        <div>
        Home Page
        </div>
        <input type="input" id="location" placeHolder="Location" onChange={this.setLocation}/>
        <input type="button" id="searchButton" value="Search" onClick={this.search}/>
      </div>
    }

    return (
      <div>
      {home}
      </div>
    )
  }

}

export default MainContainer;