var courses = ["CNC","BC","IOT","AI","5G"];
alert("Old list of Courses" +" "+courses);
var courses1 = courses.splice(0,1,prompt("Change Course1 (CNC) Name"));
var courses2 = courses.splice(1,1,prompt("Change Course2 (BC) Name"));
var courses3 = courses.splice(2,1,prompt("Change Course3 (IOT) Name"));
var courses4 = courses.splice(3,1,prompt("Change Course4 (AI) Name"));
var courses5 = courses.splice(4,1,prompt("Change Course5 (5G) Name"));
alert("New list of Courses" +" "+courses);
