const express = require('express');
const yelpAPI = require('yelp-api');

const apiController = {};

apiController.yelp = (req, res, next) => {
  console.log('in middleware func')
  const YELP_API = '0asdq3RZT2Kcg24r5KLnY49GRgND03gI53KjmnXTaFEsPoe8YaSyyhVNciXqh2GGLrV1i7X79sBWjkWw_NhhMeG9GSOOylFrRXxnFSZuLxQvDj-5bOzL1JsZ-UbGXXYx';
  const ENDPOINT = 'https://api.yelp.com/v3/businesses/search';
  
  // Create a new yelpAPI object with your API key
  let yelp = new yelpAPI(YELP_API);
  
  // Set any parameters, if applicable (see API documentation for allowed params)
  let params = [{ location: '20008' }];
  
  // Call the endpoint
  yelp.query('businesses/search', params)
  .then(data => {
    // Success
    console.log(data);
    return next();
  })
  .catch(err => {
    // Failure
    console.log(err);
  });
}

module.exports = apiController;
