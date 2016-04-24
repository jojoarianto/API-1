var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exam');

// // Endpoint: GET /question
router.get('/questions', function(req, res) {
	// data_send = {
	// 	'id' : '1',
	// 	'name' : 'Joko Irianto 2',
	// };
	// 
	res.jsonp({data: data_send});
});

var question = mongoose.model('questions', { question: String });

router.post('/question', function(req, res) {
	// data = question.find();
	// res.jsonp(data);
	var soal = new question({ question: 'Zildjian' });
	soal.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    // console.log('meow');
		res.send('hello');
	  }
	});
});

router.get('/question', function(req, res) {
	var question = mongoose.model('questions', { question: String });
	var soal = new question({ question: 'Zildjian' });
	soal.save(function (err) {
	  if (err) {
	    console.log(err);
	  } else {
	    // console.log('meow');
		res.send('hello');
	  }
	});
});

module.exports = router;