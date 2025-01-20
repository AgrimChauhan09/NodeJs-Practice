const express = require('express'); // Import the Express module
const app = express(); // Initialize the Express application

// Route for the Home Page
app.get('', (req, res) => {
    console.log("data send by brower ==>",req.query.name);
    res.send('Hello, this is the Home Page');
});

// Route for the About Page
app.get('/about', (req, res) => {
    res.send('Hello, this is the About Page');
});

// Route for the Help Page
app.get('/help', (req, res) => {
    res.send('hell00, this is the Help Page');
});

// Start the server on port 5000
// app.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });


 app.listen(5500);