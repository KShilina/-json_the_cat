const request = require("request");

const argv = process.argv[2];//user input in command line

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${argv}`,
  function(error, response, body) {
    if (error) {
      console.log(error);
    }
    if (JSON.parse(body).length === 0) {
      console.log("the requested breed is not found.");
      return;
    }

    console.log(JSON.parse(body));
    console.log("Breed object:", JSON.parse(body)[0].description);//JSON.parse(body)Convert string to object
  }
);
