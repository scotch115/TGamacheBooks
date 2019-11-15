const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const firebase = require('firebase');

// admin.initializeApp({
// 	credential: admin.credential.cert('../serviceAccountKey.json'),
// 	storageBucket: "tomgamachebooks.appspot.com"
// });

// const bucket = admin.storage().bucket();


app.use(express.static(__dirname + '/posts'));

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(__dirname + '/public/blog.html');
});

// Import Firebase credentials
var config = {
	apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
	authDomain: "tomgamachebooks.firebaseapp.com",
	databaseURL: "https://tomgamachebooks.firebaseio.com",
	projectId: "tomgamachebooks",
	storageBucket: "tomgamachebooks.appspot.com",
	messagingSenderId: "233346595074"
};
firebase.initializeApp(config);

// Database reference
var dbRef = firebase.database().ref('blogs');

dbRef.on('value', gotData, errData);
function gotData(data) {
	var blogs = data.val();
	var keys = Object.keys(blogs);
	// console.log(keys);

	// For each key in the database, create a new template html file, and fill with populate with firebase data
	for (var i = 0; i < keys.length; i++){
		var k = keys[i];
		var title = blogs[k].title;
		var articleBody = blogs[k].articleBody;
		var htmlTemplateStart = fs.readFileSync('public/templateStart.txt', "utf8");
		newFile = fs.writeFile('public/posts/'+title+'.html', htmlTemplateStart, function(err) {
			if (err) throw err;
			console.log('File was successfully created.');
		});
		newFile = fs.appendFile('public/posts/'+title+'.html', '<h2>'+title+'</h2>', function(err) {
			if (err) throw err;
			console.log('File was edited');
		});
		newFile = fs.appendFile('public/posts/'+title+'.html', '<p style="padding: 10px">'+articleBody+'<p>', function(err) {
			if (err) throw err;
			console.log('File was edited');
		});
		var htmlTemplateEnd = fs.readFileSync('public/templateEnd.txt', "utf8");
		newFile = fs.appendFile('public/posts/'+title+'.html', htmlTemplateEnd, function(err) {
			if (err) throw err;
			console.log('File was successfully completed and saved.');
		});

		// function uploadFile(newFile) {
		// 	return firebase.storage().ref().child('posts').put(newFile).then(snapshot => {  });
		// }
	}
}

function errData(err) {
	console.log("Error: " +err);
}


exports.app = functions.https.onRequest(app);
