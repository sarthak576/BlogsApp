// db.js
const { MongoClient, ServerApiVersion } = require("mongodb");
const config = require("./config"); // Import the configuration file

const client = new MongoClient(config.mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return client;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
