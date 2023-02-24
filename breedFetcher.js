const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      if (error !== null) {
        return callback(error);
      }
      if (JSON.parse(body).length === 0) {
        return callback(null);
      }
      return callback(null, JSON.parse(body)[0].description); //JSON.parse(body)Convert string to object
    }
  );
};

module.exports = { fetchBreedDescription };
