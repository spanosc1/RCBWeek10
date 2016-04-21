var op = process.argv[2];
var amount = process.argv[3];
var fs = require('fs');
switch(op) {
  case 'total':
    total();
    break;
  case 'deposit':
    deposit(amount);
    break;
  case 'withdraw':
  	withdraw(amount);
  	break;
  case 'lotto':
  	lotto();
  	break;
  default:
  	console.log("Please enter a valid command.");
  	break;
}

function total()
{
	fs.readFile('bank.txt', 'utf8', function(err, data) {
		data = data.split(',');
		var sum = 0;
		for(var i = 0; i < data.length; i++)
		{
			sum += parseFloat(data[i].trim());
		}
		sum = sum.toFixed(2);
		console.log(sum);
	});
}

function deposit(amount)
{
	fs.appendFile('bank.txt', ', ' + amount, function(err) {
		console.log("Your new balance:");
		total();
	});
}

function withdraw(amount)
{
	fs.appendFile('bank.txt', ', -' + amount, function(err) {
		console.log("Your new balance:");
		total();
	})
}

function lotto()
{
	withdraw(0.25);
	var winner = Math.floor(Math.random() * 10) + 1;
	console.log(winner);
	if(winner == 1)
	{
		console.log("Winner!");
		deposit(2);
	}
	else
	{
		console.log("Loser...");
	}
}