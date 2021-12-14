const { MongoClient } = require('mongodb');
require('dotenv').config()

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.lropz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db(`${MONGO_DB}`);
  // perform actions on the collection object
  client.close();
});
