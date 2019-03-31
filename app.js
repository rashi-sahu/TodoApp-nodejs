var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/todo', function(req,res){
    var someResult;
    con.query("SELECT * FROM todolist", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        // someResult = result;
        res.render(__dirname + '/views/todo.ejs'  , {status : result});
    });
	
});


app.post('/myaction', function(req, res) {

    console.log('req.body');
    console.log(req.body);
    res.write('You sent the name "' + req.body.name+'".\n');
    res.write('You sent the Email "' + req.body.msg+'".\n');
    
    res.end()
    
    con.query("Insert into todolist (name,msg) VALUES ('"+req.body.name+"','"+req.body.msg+"')",function(err, result)      
    {                                                      
      if (err)
         throw err;
    });
});

app.listen(3000);

console.log('You are listening to port 3000');
