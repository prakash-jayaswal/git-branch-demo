var express = require('express')
var auth = require('./middleware/authenticate')
var app = express();

app.get('/',function(Req,res){
    res.send("hello world")
})
app.get('/users',auth,function(req,res){
    res.send("user route")
})

app.listen(1234,function(){
    console.log("server started at port 1234")
})