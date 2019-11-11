import React from 'react';
import VenueDetails from '../components/VenueDetails.jsx';
import WaitTimesDisplay from '../components/WaitTimesDisplay.jsx';

const VenueContainer = (props) => {
  // render map and wait times
  return (
    <div>
      <section className="search-bar">
          <input type="input" id="searchInput" placeholder="Business or Category" onChange={ props.setSearchInput }/>
          <input type="input" id="location" placeholder="Location" onChange={ props.setLocation }/>
          <input type="button" id="searchButton" onClick={ props.search }/>
      </section>
      <VenueDetails
        venueName = { props.venueName }
        venueUrl = { props.venueUrl }
        venueImage = { props.venueImage }
        venueLocation = { props.venueLocation }
      />
      <WaitTimesDisplay 
        addWaitTime = { props.addWaitTime }
        setWaitTime = { props.setWaitTime }
      />
    </div>
  )
}

export default VenueContainer;