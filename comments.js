//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'comments'
});
connection.connect();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/comments', function(req, res) {
  connection.query('SELECT * FROM comments', function(err, rows){
    res.json(rows);
  });
});
app.post('/comments', function(req, res) {
  var comment = req.body;
  connection.query('INSERT INTO comments SET ?', comment, function(err, result){
    if (err) throw err;
    res.send('Success');
  });
});
app.listen(3000);