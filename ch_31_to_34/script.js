var name = prompt("Enter Your Name");
var d = prompt("Enter you DOB (Date)");
var m = prompt("Enter you DOB (month)");
var y = prompt("Enter you DOB (Year)");
var bday = new Date(m+" "+ d +", "+ y);
var byear = new Date().getYear() - bday.getYear();
var bmonth = new Date().getMonth() - bday.getMonth();
var date1 = new Date(m+"/"+ d +"/"+ y);
var date2 = new Date();
var n = date2.getFullYear();
var date4 = date1.getFullYear();
var date5 = new Date(m+"/"+ d +"/"+ n);
var dit = date2.getTime() - date5.getTime(); 
var did = dit / (1000 * 3600 * 24); 
var bhour = new Date().getHours() - bday.getHours();
var bminute = new Date().getMinutes() - bday.getMinutes();
var bsecond = new Date().getSeconds() - bday.getSeconds();
var bday1 = bday.get;

console.log("Hello"+" "+ name+ ", Good Morning");
console.log("Your DOB is"+" "+date1);
console.log("You are" +" "+ byear +" "+ "years"+" "+bmonth+" "+ "Month" +" "+did+" "+ "Days" +" "+ bhour +" "+"Hours" +" "+bminute+" "+ "Minutes"+" "+ bsecond+" "+ "Seconds old" );
var dt = date2.getTime() - date1.getTime(); 
var dd = dt / (1000 * 3600 * 24); 
console.log("Your Age in Days"+" "+ dd);
console.log("Happy Birth Day Arslan Tahir. Today is Your"+" "+byear+"th Birthday");

