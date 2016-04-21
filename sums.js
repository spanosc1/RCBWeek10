var args = process.argv.length - 2;
var nums = [];
var sums = [];
for(var i = 2; i < process.argv.length; i++)
{
	nums.push(parseInt(process.argv[i]));
	sums.push(0);
}
for(var i = 0; i < args; i++) //iterates through sums
{
	for(var j = 0; j < args; j++) //iterates through nums
	{
		if(j != i)
		{
			sums[i] += nums[j];
		}
	}
}
debugger;
console.log(nums);
console.log(sums);