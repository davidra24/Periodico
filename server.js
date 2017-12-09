var express = require('express')
            , http = require('http');
	
var request = require('request');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/sections', function(req, res){
  request.get({url : 'http://sw-news-letter.herokuapp.com/section'}, function(error, response, body){
    if(!error){
      res.json(body);
    }
  });
});
app.get('/articles', function(req, res){
  request.get({url : 'http://sw-news-letter.herokuapp.com/article'}, function(error, response, body){
    if(!error){
      res.json(body);
    }
  });
});

app.use(express.static(__dirname + '/public'));
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});