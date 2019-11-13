const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(__dirname + '/public/blog.html');
});


exports.app = functions.https.onRequest(app);
