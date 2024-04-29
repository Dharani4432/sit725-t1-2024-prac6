const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s224092776:Dharani12345@cluster0.1j45q5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected to MongoDB!");
        // Ping the deployment to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged deployment. Successfully connected to MongoDB!");
        return client;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

module.exports = { connectDatabase };