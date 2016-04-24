// var database = require('./database');
// require route
var api = require('./api');
var port = (process.env.PORT || 8080);

var express = require('express');
var app = express();

// Initialize db: migrations & seeds
// database.init();

// Start API endpoints server on port PORT
api.serve(port);