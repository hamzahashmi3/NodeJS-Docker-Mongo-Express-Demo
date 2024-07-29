require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/profile-picture', function (req, res) {
  const imgPath = path.join(__dirname, 'public', 'Assets', '1.jpeg');
  fs.readFile(imgPath, (err, img) => {
    if (err) {
      res.status(404).send('Image not found');
      return;
    }
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  });
});

// MongoDB connection URLs
const mongoUrlLocal = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/nodeapp`;
const mongoUrlDocker = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/nodeapp`;

// MongoDB client options
const mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// Database and collection names
const databaseName = "nodeapp";
const collectionName = "users";

// Function to get the MongoDB URL based on the environment
function getMongoUrl() {
  console.log('NODE_ENV:', process.env.NODE_ENV);  // Log the environment variable
  const mongoUrl = process.env.NODE_ENV === 'docker' ? mongoUrlDocker : mongoUrlLocal;
  console.log('Using MongoDB URL:', mongoUrl);  // Log the MongoDB URL being used
  return mongoUrl;
}

app.post('/update-profile', function (req, res) {
  const userObj = req.body;
  console.log(userObj)
//   MongoClient.connect('mongodb://localhost:27017/nodeapp', mongoClientOptions, function (err, client) {
  MongoClient.connect(getMongoUrl(), mongoClientOptions, function (err, client) {    
if (err) {
      console.error('Connection Error:', err);
      res.status(500).send('Failed to connect to the database');
      return;
    }
    console.log('Connected to MongoDB');

    const db = client.db(databaseName);
    userObj['userid'] = 1;

    const myquery = { userid: 1 };
    const newvalues = { $set: userObj };

    db.collection(collectionName).updateOne(myquery, newvalues, { upsert: true }, function (err, result) {
      if (err) {
        client.close();
        res.status(500).send('Failed to update profile');
        return;
      }
      client.close();
      res.send(userObj);
    });
  });
});

app.get('/get-profile', function (req, res) {
  MongoClient.connect(getMongoUrl(), mongoClientOptions, function (err, client) {
    if (err) {
      console.error('Connection Error:', err);
      res.status(500).send('Failed to connect to the database');
      return;
    }

    const db = client.db(databaseName);
    const myquery = { userid: 1 };

    db.collection(collectionName).findOne(myquery, function (err, result) {
      if (err) {
        client.close();
        res.status(500).send('Failed to fetch profile');
        return;
      }
      client.close();
      res.send(result || {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
