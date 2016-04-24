
var express = require('express');
var api = express();
var questionRouter = require('./question');
var bodyParser = require('body-parser');
// var morgan = require('morgan');

// Endpoint: GET /
var index = express.Router();
index.get('/', function(req, res) {
  res.jsonp({
    name: "OLIMPIADE API", 
    documentation_url: 'http://olimpiade.id'
  });
});

module.exports = {
  serve: function(port) {
    // use body parser
    api.use(bodyParser.json());

    // use a router
    api.use(index);
    api.use(questionRouter);

    api.listen(port, function() {
      console.log('olimpiade-api: server running on port', port);
    });
  }
}

