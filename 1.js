var http = require('http');
var dt = require('./module1.js'); // importig other modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
var cors = require('cors');

app.use(cors());

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
  debug: false
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//http header
  //res.write("The date and time are currently: " + dt.myDateTime());
  //res.write(req.url);
  res.end();
  //res.end('Hello World!');
}).listen(8081);
 

// conn.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
  
//   var sql = ";";
//   conn.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

//tampilkan semua data product
app.get('/api/products',(req, res) => {
  let sql = "SELECT * FROM customers";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});


app.post('/api/products',(req, res) => {
  let data = {name: req.body.product_name, address: req.body.product_price};
  let sql = "INSERT INTO customers SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});