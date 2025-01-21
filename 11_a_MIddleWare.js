//this is basically application level midlleware 


const express = require('express'); // Import the Express library
const app = express(); // Initialize an Express application

// Middleware function for request filtering
const reqFilter = (req, res, next) => {
    // Middleware logic to filter requests based on the 'age' query parameter
    if (!req.query.age) {
        // If the 'age' query parameter is not provided, send a response asking for it
        res.send("Please provide age");
    } else if (req.query.age < 18) {
        // If the 'age' query parameter is less than 18, deny access
        res.send("You can't access this page");
    } else {
        // If the conditions are satisfied, pass control to the next middleware or route handler
        next();
    }
};

// Apply the middleware globally to all routes
app.use(reqFilter);

app.get('/', (req, res) => {
    // Route handler for the home page
    res.send("Welcome to the home page");
});

app.get('/user', (req, res) => {
    // Route handler for the user page
    res.send("Welcome to the user page");
});

// Start the server on port 5500
// app.listen(5500, () => {
//     console.log("Server is running on http://localhost:5500");
// });

app.listen(5500);


//Types of Middle Ware :--

//Application-Level Middleware:
//Router-Level Middleware:
//Error-Handling Middleware:
//Built-In Middleware
// Third-Party Middleware