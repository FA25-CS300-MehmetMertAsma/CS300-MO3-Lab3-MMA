// Import the Express library which is used to be create the web server
// that the RESTful API will server on
const express = require('express');

// Create an instance of an Express application/library so it can be used
const app = express();

// Define the port number the web server will listen for and serve requests from
const PORT = 3000;

// Use the express's built-in middleware to automatically parse incoming
// JSON request bodies
app.use(express.json());

// Create an in-memory array to store items 
// (simulating a database for this example)

//-------- ROUTES --------

//Define a GET route to return "Hello World" to browser for
// '/hello'
app.get('/hello', (req, res) => {
    res.json("Hello World");
});

// Defne a GET route for '/items' to return all items in array



// -------- SERVER SETUP / START --------

// Start teh server and listen for incoming
// request on the port specified above
app.listen(PORT, () => {

    //Log a messege to the console to indicate the server is running
    console.log(`server is running on http://localhost:${PORT}`);
});