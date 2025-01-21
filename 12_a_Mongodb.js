// Import the MongoClient class from the 'mongodb' package
const { MongoClient } = require('mongodb');

// MongoDB connection URL (assumes MongoDB is running locally on port 27017)
const url = 'mongodb://localhost:27017';

// Create a new MongoClient instance with the specified URL
const client = new MongoClient(url);

// Define the database name (e.g., 'e-commerce')
const database = 'e-commerce';

// Define an asynchronous function to fetch data from the MongoDB collection
async function getData() {
    // Connect to the MongoDB server
    let result = await client.connect(); // Returns a connected client instance
    console.log('Connected to MongoDB');

    // Access the specified database (e.g., 'e-commerce')
    let db = result.db(database);

    // Access the specified collection (e.g., 'product') inside the database
    let collection = db.collection('product');

    // Fetch all documents from the 'product' collection and convert them to an array
    let resp = await collection.find({}).toArray(); // find({}) fetches all documents

    // Log the fetched documents to the console
    console.log(resp);
}

// Call the `getData` function to execute the code
getData();


















// { "name": "Laptop", "price": 1000, "brand": "Dell" }
// { "name": "Phone", "price": 500, "brand": "Samsung" }
// { "name": "Tablet", "price": 300, "brand": "Apple" }
