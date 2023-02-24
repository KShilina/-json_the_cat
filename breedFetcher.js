const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,

    function (error, response, body) {
      // console.log("error", error);
      // console.log('body', body);
      if (error) {
        return callback(error);
      }
      if (!breedName) {
        return callback("Please put the name.");
      }
      if (JSON.parse(body).length === 0) {
        return callback("Invalid breed name.");
      }

      return callback(null, JSON.parse(body)[0].description); //JSON.parse(body)Convert string to object
    }
  );
};

module.exports = { fetchBreedDescription };
