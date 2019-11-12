const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

/* this makes files retreivable via direct url manipulation: <url>/about.html - no bueno */
// app.use(express.static('public'));

// app.use(express.static(__dirname + "/../public"));
var firebase = require('firebase/app');

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(__dirname + '/public/test.html');
});

// Initialize Firebase
	var config = {
		apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
		authDomain: "tomgamachebooks.firebaseapp.com",
		databaseURL: "https://tomgamachebooks.firebaseio.com",
		projectId: "tomgamachebooks",
		storageBucket: "tomgamachebooks.appspot.com",
		messagingSenderId: "233346595074"
	};
	firebase.initializeApp(config);

	var database = firebase.database();

	return firebase.database().ref('/articleBody/')

exports.app = functions.https.onRequest(app);
// module.exports = {
// 	app
// }
