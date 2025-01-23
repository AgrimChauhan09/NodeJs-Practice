// Import the custom database connection module
const dbconnect = require('./12_c_mongo');

// Define an asynchronous function to insert a document into the database
const insert = async () => {
    // Wait for the database connection and get the collection
    const db = await dbconnect();

    // Insert a single document into the collection

    // const result = await db.insertOne({
    //     name: 'note 5',   
    //     brand: 'vivo',    
    //     price: 320,       
    //     cato: 'mobile'    
    // });

    // Insert a multi document into the collection

    const result = await db.insertMany(
    [
        {name: 'note 5',brand: 'vivo',price:300,cato: 'mobile'},
        {name: 'ce 2 lite ',brand: 'oneplus',price: 320,cato: 'mobile'},
        {name: '12 pro',brand: 'iphone',price: 1220,cato: 'mobile'}
    ]
    );

    // Log the result of the insertion
    if (result.acknowledged) {
        console.log("Document inserted successfully:", result);
    } else {
        console.log("Failed to insert document");
    }
};

// Call the insert function
insert();
