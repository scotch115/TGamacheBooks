const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express');
// const router = express.Router();
const app = express();
// const port = process.argv[2] || 8080;
//
// const mimeType = {
//
//
//   '.ico': 'image/x-icon',
//   '.html': 'text/html',
//   '.js': 'text/javascript',
//   '.json': 'application/json',
//   '.css': 'text/css'
// };
//
var  httpServer = http.Server(app);

app.use(express.static(__dirname + "/../public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/about.html');
});

app.get('/mysterybox', function(req, res) {
  res.sendFile(__dirname + '/public/test.html');
});


app.listen(8080);

// const server = http.createServer(function(req, res)
// {
  // var path = url.parse(req.url).pathname;
  // switch (path) {
  //   case '/':
  //     res.statusCode = 200;
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     fs.readFile('./public/index.html', null, function(error,data){
  //       if (error){
  //         res.writeHead(404);
  //         res.write("Uh oh! That webpage doesn't exist! :/ \n");
  //       } else {
  //         res.write(data);
  //       }
  //       res.end();
  //    });
  //    break;
	//
	// 	case '/about':
	// 	res.statusCode = 200;
	// 	res.writeHead(200, {
	// 		'Content-Type': 'text/html'
	// 	});
	// 	fs.readFile('./public/about.html', null, function(error, data){
	// 		if(error){
	// 			res.writeHead(404);
	// 			res.write("Not correcctttt");
	// 		} else {
	// 			res.write(data);
	// 		}
	// 		res.end();
	// 	});
	// 	break;
	//
	//
  // default:
  //   res.writeHead(404);
  //   res.write("Uh oh, this doesn't look right...");
  //   res.end();
  //   break;
  //   }
 // }).listen(port);

console.log('Server Listening on port 8080!');