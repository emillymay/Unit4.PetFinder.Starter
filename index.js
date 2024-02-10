// import the pets array from data.js
const pets = require('./data');
const path = require
// init express app
const express = require('express');
const app = express();

const PORT = 8080; //points listening server


//serve files from public folder
app.use(express.static(path.join(__dirname, 'public')));

//GET method to serve index.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
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
    res.json(pets);
});

// get pet by owner with query string
//use GET method
//route handle
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
        //extract owner parameter
        const owner = req.query.owner; 
    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);
    //if/else
    if (pet) {
    // send the pet as a response, json
        res.json(pet);
    } else {
        res.status(404).json({ error: 'Pet not found.'})
    }
});

// get pet by name
// use GET method
// route handle
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    //extract name parameter;
    const name = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    if (pet) {
    // send the pet as a response, json.
        res.json(pet);
    } else {
        res.status(404).json({ error: "Pet not found."})
    }
});


//start the server
app.listen(PORT, () => {
    console.log('Server is listening on port ${PORT}');
});

module.exports = app;