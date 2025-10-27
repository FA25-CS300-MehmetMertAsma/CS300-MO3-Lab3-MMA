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
let items = [
    { id: 1, name: 'Sample Item 1' },
    { id: 2, name: 'Sample Item 2' },      
    { id: 3, name: 'Sample Item 3' },
    { id: 4, name: 'Sample Item 4' },
    { id: 5, name: 'Sample Item 5' }
];
//-------- ROUTES --------

//Define a GET route to return "Hello World" to browser for
// '/hello'
app.get('/hello', (req, res) => {
    res.json("Hello World");
});

// Define a GET route for '/items' to return all items in array
app.get('/items', (req, res) => {
    // Send the items array as a JSON response
    res.json(items);

});

// Define a GET route for '/items/:id' to return a single item in the array by its id
app.get('/items/:id', (req, res) => {
    // find the item in the array whose ID matches the ID in the request url
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
        // Send the found item as a JSON response
        res.json(item);
    } else { // if the item does not exist or can not be found
        // Send a 404 error with a message 
        res.status(404).json({ message: 'Item not found' });
    }
});

//-------- costume student routes --------
// Define a PUT route for '/items/del/:id' to delete an item by its id
app.delete('/items/del/:id', (req, res) => {
    // Convert the id from the request parameters to an integer
    const itemId = parseInt(req.params.id);

    // Filter out the item with the matching id from the items array
    items = items.filter(i => i.id == parseInt(req.params.id));

    // Send a configuration message as a JSON response
    res.json({message: "Item deleted"});
});

// Define a GET route for '/about' to return information about the API
app.get('/about', (req, res) => {

    // Send an object with API information as a JSON response
    res.json({
        name: "Restfull API Example",
        version: "1.0.0",
        author: "Mehmet Mert Asma"
    });
});

// Define a GET '/about/author'
app.get('/about/author', (req, res) => {

    res.json({
        name: "Mehmet Mert Asma",
        email: "mertasma7580@gmail.com",
        major: "Computer Science",
        fact: "I can`t wait for finish the colloge and focus on my life with real life facts."
    });
});

// -------- SERVER SETUP / START --------

// Start teh server and listen for incoming
// request on the port specified above
app.listen(PORT, () => {

    //Log a messege to the console to indicate the server is running
    console.log(`server is running on http://localhost:${PORT}`);
});