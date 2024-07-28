const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve the index.html file on the root route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the profile picture on the /profile-picture route
app.get('/profile-picture', function(req, res) {
    const img = fs.readFileSync('profile-1.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(img, 'binary');
});

// Start the server and listen on port 3000
app.listen(3000, function() {
    console.log('app listening on port 3000!');
});
