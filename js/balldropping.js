var numofrows = 10;
var numofcolumns = 5;

var stack = new Array(numofrows);
for (var i = 0; i < numofrows; i++)
{
	stack[i] = new Array(numofcolumns);
}

function dropballs(obj)
{
	// find number of balls
	var numb = ceil(obj.data.value * 4);
	for (var j = 0; j < numb; j++)
	{
		setTimeout(dropball(), 200);
	}

}

function dropball()
{
	// find position in stack
	var pos = findfirstopen();
	var xy = pos_to_xy(pos);

	// drop ball
}