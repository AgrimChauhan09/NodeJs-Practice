const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const database = 'e-commerce';

async function dbconnect() {
    let result = await client.connect(); 
    console.log('Connected to MongoDB');

    let db = result.db(database);

    return  db.collection('product');

}

module.exports=dbconnect;