// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080; //points listening server

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
// use GET method
//express.js route handle
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response, json.

});

// get pet by owner with query string
//use GET method
//route handle
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
        //extract owner parameter

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response, json

});

// get pet by name
// use GET method
// route handle
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    //extract name parameter;


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response, json.

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;