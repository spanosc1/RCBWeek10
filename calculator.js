var op = process.argv[2];
var one = parseInt(process.argv[3]);
var two = parseInt(process.argv[4]);

if(op == 'add')
{
	console.log(one + two);
}
else if(op == 'subtract')
{
	console.log(one - two);
}
else if(op == 'multiply')
{
	console.log(one * two);
}
else if(op == 'divide')
{
	console.log(one / two);
}
else if(op == 'remainder')
{
	console.log(one % two);
}
else if(op == 'exp')
{
	console.log(Math.pow(one, two));
}
else if(op == 'algebra')
{
	var left = process.argv[3].substr(0, process.argv[3].indexOf('='));
	var coeff = left.substr(0, left.indexOf('x'));
	var sub = left.substr(left.indexOf('+') + 1);
	var right = process.argv[3].substr(process.argv[3].indexOf('=') + 1);
	var x = (right - sub)/coeff;
	console.log(x);
}
else
{
	console.log("Enter a valid command");
}