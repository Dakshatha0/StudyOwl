const { request } = require('express')
var express = require('express')  
var app = express()  
  
app.get('/', function (req, res) {  
    app.set('views engine', 'ejs');
    var a = {
        "name":"Dakshatha",
        "age":"23"
    }
    res.send('Hello Ladies!!');
    res.render("dakshatha", {data:a}); 
})  

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html');
})
app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
    console.log(req.query.email);
    console.log(req.query.phone);
    
})

app.listen(3000, function () {  
console.log('listening on port 3000!')  
})