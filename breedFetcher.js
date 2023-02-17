const request = require('request');

// const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=siberian"
// let response = fetch(apiUrl)


// const request = require('request');
// this is how you make a request to an API.
request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, function (error, response, body) {
  if (error) {
    console.error('Breed not found', error);
  } else { // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    //   console.log(typeof body);
    // console.log('----------------')

    //step 1: body is a JSON string - need to access properties
    // step 2: convert the JSON string to an object.
    const data = JSON.parse(body);
    // console.log(data[0]);
    // console.log(typeof data);
    // accessing the individual cat from the array. 
    const cat = data[0]
    const weight = cat.weight
    // console.log(weight.imperial);
  }
});
