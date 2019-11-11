import React from 'react';

const VenueDetails = (props) => {

    return ( 
        <div>
            <div>
            {props.venueName}
            </div>
              <img src={props.venueImage}/>
            <div>
              {props.venueLocation.address1}
              {props.venueLocation.city}
              {props.venueLocation.state}
              {props.venueLocation.zip_code}
              {props.venueUrl}
            </div>
        </div>
     );
}
 
export default VenueDetails;