// Import the custom database connection module
const dbconnect = require('./12_c_mongo'); 

// Import the Express framework for building the API
const express = require('express'); 

// Create an instance of the Express app
const app = express(); 

// Import the MongoDB library for database operations (used for delete)
const mongodb = require('mongodb'); 

// Use middleware to parse incoming JSON requests into JavaScript objects
app.use(express.json()); 

// Define a GET endpoint for the root URL ('/')
app.get('/', async (req, res) => {
    // Connect to the database
    let data = await dbconnect();
    // Fetch all records from the collection and convert them into an array
    data = await data.find().toArray();
    // Send the retrieved data as a response
    res.send(data);
});

// Example POST endpoint (commented out) to echo the request body
// app.post('/', (req, res) => {
//     console.log(req.body); // Log the request body
//     res.send(req.body); // Send the same data back as a response
// });

// Define a POST endpoint for adding data
app.post('/', async (req, res) => {
    let data = await dbconnect();
    // Insert the data received in the request body into the database
    let result = await data.insertOne(req.body);
    // Send the result of the database operation as a response
    res.send(result);
});



// flow of this code 
//1. make the put method for API
//2. Send data from postman
//3. handle data in node js by request
//4. write code for update data in mongodb


// basically hum put ki help se apne data ko update kr rahe hai thorugh postman
// postman data get -->>>vscode -->>> postman ->>> mongos(changes preformed....)

app.put('/', async (req,res)=>{
    let data =await dbconnect();

    let result =data.updateOne(
        {name:"n10"},// change kisme krna hai
        // {$set:{price:900}}// change ky krna hai ,par yeah hamara static chnage hai humko dynamic chnage krne ke liye simply req.body ko pass kr dena hai
        {$set:req.body}// for dynamic update ,,simply postman pe jaao or data ko rewrite kro what you wanna change and hit request and then refresh mongo compass 
    );
    
    res.send({result:"updted"}) // yeah hum end result ko verify krwayega...task permforme huve yaa nahi

})

// Define a DELETE endpoint for deleting data by ID
app.delete('/:id', async (req, res) => {
    // Log the ID passed as a URL parameter
    console.log(req.params.id);
    // Connect to the database
    const data = await dbconnect();
    // Delete the document with the specified ID (convert to ObjectId)
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    // Send the result of the delete operation as a response
    res.send(result);
});

  
app.listen(5500); 