
//why we make the separate file for this because the middleware in the file can be more so that we write our logic in separate file
const express = require('express'); // Import the Express library
const app=express();
const reqFilter = require('./11_c_Middleware'); // Import the middleware from the 'public' folder


// Use middleware for specific routes
app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

app.get('/user', reqFilter, (req, res) => {
    res.send("Welcome to the user page");
});

app.get('/about', reqFilter, (req, res) => { 
    res.send("Welcome to the about page");
});

// but this is bad pratice if we apply the reqfilter  individual so that we use this
//we simply replace app to route and remove the reqfilter parameter
const routes=express.Router();
routes.use(reqFilter);
routes.get('/good',(req, res) => { 
    res.send("Welcome to the good page");
});
app.use('/',routes); 

app.listen(5500); 