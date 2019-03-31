var express = require('express');
var app = express();
app.set('view-engine', 'ejs');
app.use(express.static(__dirname+ '/views'));

app.get('/todo', function(req,res){
	res.render(__dirname + '/views/todo.ejs', { status: "success" });
});

app.listen(3000);

console.log('You are listening to port 3000');
