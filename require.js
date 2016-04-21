var fs = require('fs');
var contents;
fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if(err)
	{
		return console.log(err);
	}
	contents = data;
});
console.log(contents);