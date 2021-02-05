var no1 = prompt("Put Value1","0");
var sign = prompt("Use Calculation Operator","+");
var no2 = prompt("Put Value2","0");
var n1 = parseInt(no1);
var n2 = parseInt(no2);

if (sign === "+"){
 alert(n1+n2);
}
else if (sign === "-"){
 alert(n1-n2);
}
else if (sign === "*"){
 alert(n1*n2);
}  
else if (sign === "/"){
 alert(n1/n2);
}
else if (sign === "%"){
 alert(n1%n2);
}

