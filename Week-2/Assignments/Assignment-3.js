var express = require('express');
var url = require('url');
var querystring = require('querystring');
var bodyParser = require('body-parser');
const { nextTick } = require('process');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello my server!!');
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/data', function (req, res)  {
  var num=req.query.number;
  if(num===undefined){
    res.send("<h1>Lack of Parameter</h1>");
  }
  if(isNaN(num) === true){
    res.send("<h1>Wrong Parameter</h1>");
  }else{
    var sum=0;
    for(var i=parseInt(num);i>0;i--){
      sum+=i;
    }
    res.send(sum.toString());
  }
  res.end();
});

app.listen(3000, function () {
  console.log('Hello my server!!');
});


