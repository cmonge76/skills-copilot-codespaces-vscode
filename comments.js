//create web server
//create a web server that listens on port 3000
//create a route that accepts a POST request to /comments
//parse the incoming form data and log it to the console
//send a response to the client

var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
      console.log(fields);
      res.end('Thanks for the comment!');
    });
  } else {
    res.end(fs.readFileSync('./comments.html'));
  }
});
server.listen(3000);
console.log('Server listening on port 3000');