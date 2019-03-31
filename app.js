var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "r",
    database: 'todo'
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

  });



var app = express();
app.set('view-engine', 'ejs');
app.use(express.static(__dirname+ '/views'));


app.get('/todo', function(req,res){
    var someResult;
    con.query("SELECT * FROM todolist", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // someResult = result;
        res.render(__dirname + '/views/todo.ejs'  , {status : result[1].msg});
    });
	
});

app.listen(3000);

console.log('You are listening to port 3000');
