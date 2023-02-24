#  JSON_THE_CAT
## Cat Breed Fetcher
 This project about how to build a command line app that makes it "easy" for users to query this dataset from the terminal. Users can provide any breed name, causing our application to fetch the information from the API and print out a short description of that breed.
## Set Up
1. Install Node.js
2.Clone this repository to your local machine and install the dependencies using 
```javascript
npm
```
```javascript
git clone https://github.com/KShilina/-json_the_cat.git
cd json-the-cat
npm install
```
## How to use
Specify the breed name using command-line arguments.
```javascript
> node breedFetcher.js Chartreux
```
This will fetch a brief description of the Siberian cat breed and display it in the terminal.

If you enter an invalid breed name, the program will display an error message.
