import React from 'react';
import VenueDetails from '../components/VenueDetails.jsx';
import WaitTimesDisplay from '../components/WaitTimesDisplay.jsx';

const VenueContainer = (props) => {
  // render map and wait times
  return (
    <div>
      <VenueDetails
        venueName = { props.venueName }
        venueUrl = { props.venueUrl }
        venueImage = { props.venueImage }
        venueLocation = { props.venueLocation }
      />
      <WaitTimesDisplay 
        venueId = { props.venueId }
        addWaitTime = { props.addWaitTime }
        setWaitTime = { props.setWaitTime }
      />
    </div>
  )
}

export default VenueContainer;