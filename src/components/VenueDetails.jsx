import React from 'react';

const VenueDetails = (props) => {

    return ( 
        <div>
            <h2>
            {props.venueName}
            </h2>
              <img style={{height:"100px",width:"100px"}}src={props.venueImage}/>
            <div>
              {props.venueLocation.address1}<br/>
              {props.venueLocation.city}, {props.venueLocation.state} {props.venueLocation.zip_code}<br/>
              {props.venuePhone}<br/>
              {props.venueUrl}
            </div>
        </div>
     );
}
 
export default VenueDetails;