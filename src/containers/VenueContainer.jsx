import React from 'react';
import VenueDetails from '../components/VenueDetails.jsx';
import WaitTimesDisplay from '../components/WaitTimesDisplay.jsx';

const VenueContainer = (props) => {
  // render map and wait times
  return (
    <div>
      <WaitTimesDisplay 
        addWaitTime = { props.addWaitTime }
        setWaitTime = { props.setWaitTime }
      />
      Venue Container
    </div>
  )
}

export default VenueContainer;