
var c1 = parseInt(prompt("Enter Course 1 marks")); 
var c2 = parseInt(prompt("Enter Course 2 marks")); 
var c3 = parseInt(prompt("Enter Course 3 marks")); 
var c4 = parseInt(prompt("Enter Course 4 marks")); 
var c5 = parseInt(prompt("Enter Course 5 marks")); 
// ts = Total Score
var ts = 500;
 // tso = Total Score Obtained  
var tso = c1+c2+c3+c4+c5;
//  p = Percent Achieved   
var p = parseFloat((tso*100)/ts);

switch(true){
 
  case p >= 90 && p <= 100 :
    alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade A+" );
    break;
  case p >= 75 && p <= 89 :
     alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade A" );
    break;
  case p >= 60 && p <= 74 :
    alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade B");
    break;
  case p >= 45 &&p <= 60 :
    alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade C");
    break;
    case p >= 30 && p <= 44 :
    alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade D");
    break;
    
case p >= 29 && p <= 0 :
    alert("Scored:"+tso+"   "+ "Percenage Achieved:"+p+"%"+"   "+"Grade F");
    break;    
      
  default :
    alert("Please Enter correct values");
}