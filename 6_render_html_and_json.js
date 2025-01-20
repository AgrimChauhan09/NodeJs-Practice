const express = require('express'); // Import the Express module
const app = express(); // Initialize the Express application

// Route for the Home Page
app.get('', (req, res) => {
    res.send(`
        <h1>Hello, this is the Home Page</h1><a href="/about">go to about page </a>
        <br> <a href="/help">go to help page </a>
    `);
});

// Route for the About Page if we want to send data by html
app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="user name"/>
        <button> click me</button>
    `);
});

// Route for the About Page if we want to send data by json
app.get('/help', (req, res) => {
    res.send([
    {
        name:'agrim',
        email:'agrim@.gmail.com'
    },
    {
        name:'agrim2',
        email:'agrim@.gmail.com'
    },
    {
        name:'agrim3',
        email:'agrim@.gmail.com'
    },
    {
        name:'agrim4',
        email:'agrim@.gmail.com' 
    }
    
    ]);
});

// Start the server on port 5000
// app.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });


 app.listen(5500);