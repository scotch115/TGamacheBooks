const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
const app = express();
const firebase = require('firebase');

var  httpServer = http.Server(app);

// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about.html', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/test.html', function(req, res) {
	res.sendFile(__dirname + '/public/blog.html');
});

app.use(express.static(__dirname + '/public/posts'));

var config = {
	apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
	authDomain: "tomgamachebooks.firebaseapp.com",
	databaseURL: "https://tomgamachebooks.firebaseio.com",
	projectId: "tomgamachebooks",
	storageBucket: "tomgamachebooks.appspot.com",
	messagingSenderId: "233346595074"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref('blogs');

dbRef.on('value', gotData, errData);
function gotData(data) {
	var blogs = data.val();
	var keys = Object.keys(blogs);
	// console.log(keys);

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
	}
}

function errData(err) {
	console.log("Error: " +err);
}



app.listen(8080);
console.log('Server Listening on port 8080!');
