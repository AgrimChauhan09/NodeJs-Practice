const dbconnect = require('./12_c_mongo');

const updatedata = async () => {
    let data = await dbconnect();

    // Use the updateOne method to update the document
    let result = await data.updateOne(
        { name: '12 pro' }, // Filter: Find the document with this name
        { $set: {name: 'u100',price:5000} } // Update: Set the 'name' field to 'ce 2 5g'
    );

    console.warn(result);

    if (result.matchedCount > 0) {
        console.log(`Document matched and updated successfully: ${result.modifiedCount} document(s) updated.`);
    } else {
        console.log("No matching document found to update.");
    }
};

updatedata(); 
 