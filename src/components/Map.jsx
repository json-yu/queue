import React from 'react';
import axios from 'axios';

const Map = (props) => {

  return (
    <div>
      <iframe 
        width="500" 
        height="300" 
        src={`https://api.maptiler.com/maps/basic/?key=OeKji8TvwQYbzy8G5Pda#11/${props.latitude}/${props.longitude}/`}>
      </iframe>
    </div>
  )
}

export default Map;