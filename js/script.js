function myPow(x,y)
{
	var result=1;
	x=parseInt(x);
	y=parseInt(y);

	if (y==0) return(1);
	if (x==0) return(0);

	if (y>0){
		result*=x*myPow(x,y-1);
	}
	else
	{
		result=1/myPow(x,-y);
	}
	return(result);
}

var a=prompt("Enter base a");
var b=prompt("Enter degree b");

console.log("a^b = ",myPow(a,b));

//console.log("2^3 = ",myPow(2,3), ", right answer=", Math.pow(2,3));
//console.log("2^4 = ",myPow(2,4), ", right answer=", Math.pow(2,4));
//console.log("2^5 = ",myPow(2,5), ", right answer=", Math.pow(2,5));
//console.log("2^6 = ",myPow(2,6), ", right answer=", Math.pow(2,6));
//console.log("3^3 = ",myPow(3,3), ", right answer=", Math.pow(3,3));
//console.log("3^0 = ",myPow(3,0), ", right answer=", Math.pow(3,0));
//console.log("0^0 = ",myPow(0,0), ", right answer=", Math.pow(0,0));
//console.log("0^3 = ",myPow(0,3), ", right answer=", Math.pow(0,3));
//console.log("3^-2 = ",myPow(3,-2), ", right answer=", Math.pow(3,-2));
//console.log("2^-2 = ",myPow(2,-2), ", right answer=", Math.pow(2,-2));