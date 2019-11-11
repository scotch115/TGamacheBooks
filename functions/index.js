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

app.get('/', function(req, res)  {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/blog', function(req, res) {
	res.sendFile(__dirname + '/public/test.html');
});

exports.app = functions.https.onRequest(app);
// module.exports = {
// 	app
// }


// Huge prototype for importing Firebase Database to blog page - WIP
// // Initialize Firebase
// 	var config = {
// 		apiKey: "AIzaSyAuqXCgR7z4DgDmTOXWOyTJq_o0IO9NsLY",
// 		authDomain: "tomgamachebooks.firebaseapp.com",
// 		databaseURL: "https://tomgamachebooks.firebaseio.com",
// 		projectId: "tomgamachebooks",
// 		storageBucket: "tomgamachebooks.appspot.com",
// 		messagingSenderId: "233346595074"
// 	};
// 	firebase.initializeApp(config);
//
// 	var dbRef = firebase.databse();
// 	var articleRef = dbRef.ref('article');
//
// 	articleRef.on("child_added", function(snap) {
// 	console.log("added", snap.key(), snap.val());
// 	document.querySelector('#blogDiv').innerHTML += articleHtmlFromObject(snap.val());
// 	});
//
// 	articleRef.push({
// 		title: '7.23.19',
// 		articleBody: 'So, I now have physical copies of my book in my hands. It seems so surreal. Now come s the hard part.\n\nMarketing.\n\nI mean, who really like talking about themselves and boasting about something they’ve done? I don’t know about you, but this is some foreign stuff to me. I can’t stand feeling like I’m pushing my wares onto you. But at the same time, I’m super proud of what I‘ve done and I want everybody to read it. It’s quite the quandary.\n\nI want to send my stuff to every book promo site I see on Twitter, but yet I’m skeptical. I need more reviews on Amazon, but I don’t want to ask for them. I can’t help but think I’m not alone in this as most of the writers I’ve met have leaned on to the introverted side of life and this is not where we like to spend our time-out in front of people, talking about ourselves.\n\nI took my book to the record shop that appears in the book, Rock ‘n Roll Heaven, which is in the College Park section of Orlando. It’s a great shop if you are ever in town and the owner there was so genuinely happy to hear that I put his store in my story. It was a wonderful  conversation, which came at a great relief to me as I felt so out of my element and I had the visions of him throwing me out like a bum. But, thank goodness that never happened. At the same time, I received my latest rejection letter from an agent and I stand and try to remain positive. I can truly understand why my fellow wordsmiths are so beyond excited when they finally get that “YES” letter, that they feel like exploding! I know that it will come in time.\n\nI truly appreciate anyone who spends time on this site and reads what I have to say. This will be an interesting journey as I have never taken on something like this before. Art that I have solely created and that I am passionate about. Something as personal as a look into your soul. So welcome aboard the Nathan train and let’s see where our next Not So Common People destination is!\n\nT'
// 	});
//
// 	function articleHtmlFromObject(article) {
// 	console.log( article );
// 	var html = '';
// 	html += '<div class="blogDiv">';
// 		html += ' <p>'+article.articleBody+'</p>';
// 	html += '</div>';
//
// 	return html;
// 	}
//
//
// exports.html = functions.https.onRequest(html);
