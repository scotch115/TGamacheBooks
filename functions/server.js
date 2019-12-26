const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
const app = express();
const firebase = require('firebase');

var  httpServer = http.Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about.html', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog.html', function(req, res) {
	res.sendFile(__dirname + '/public/blog.html');
});

app.use(express.static(__dirname + '/public/posts'));


app.listen(8080);
console.log('Server Listening on port 8080!');
