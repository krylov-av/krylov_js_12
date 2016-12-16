// for test
//var cell=[ "Alexey", "Andrew", "Denis", "Lisa", "Lena" ]

var cell=[];
for (var i=0;i<5;i++){
	cell[i]=prompt("Enter name to database,"+i+" Cell");
}

//for test
//var user="Denis";
var user = prompt("Enter username and I'll find it");

// Checking
var flag=false;
for (var i in cell)
{
	if (user==cell[i]){
		flag=true;
	}
	else
	{
		flag|=false
	}
}

//Out result
if (flag){
	alert(user+", вы успешно вошли");
}
else
{
	alert("Error! You are unknown user!");
}
