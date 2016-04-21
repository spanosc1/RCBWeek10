var request = require('request');

request('http://www.omdbapi.com/?t=the+notebook&r=json', function(error, response, body) {
	var json = JSON.parse(body);
	debugger;
	console.log("imdb rating: " + json.imdbRating);
});