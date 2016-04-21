var fs = require('fs');
var contents;
fs.readFile('best_things_ever.txt', 'utf8', function(err, data) {
	if(err)
	{
		return console.log(err);
	}
	contents = data;
	var things = contents.split(',');
	for(var i = 0; i < things.length; i++)
	{
		console.log(things[i].trim());
	}
});