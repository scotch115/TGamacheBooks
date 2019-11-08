const functions = require('firebase-functions');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

/* this makes files retreivable via direct url manipulation: <url>/about.html - no bueno */
// app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(__dirname + '/public/App.jsx');
});

exports.app = functions.https.onRequest(app);
