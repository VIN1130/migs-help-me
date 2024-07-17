// Import the MongoClient class from the mongodb package
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/museum-api'; // Replace with your Atlas connection string

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the database and perform operations
async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        // Specify the database and collection you want to work with
        const database = client.db('test');
        const collection = database.collection('devices');
        
        // Example operation: Insert a document into the collection
        const doc = { name: 'iPhone', manufacturer: 'Apple', releaseYear: 2020 };
        const result = await collection.insertOne(doc);
        console.log(`New document inserted with _id: ${result.insertedId}`);
        
        // Example operation: Find a document in the collection
        const query = { name: 'iPhone' };
        const foundDoc = await collection.findOne(query);
        console.log('Found document:', foundDoc);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
run().catch(console.dir);
