
        
        var course1Marks = parseFloat(prompt("Enter Course-1 Marks : "));
        var course2Marks = parseFloat(prompt("Enter Course-2 Marks : "));
        var course3Marks = parseFloat(prompt("Enter Course-3 Marks : "));
        var course4Marks = parseFloat(prompt("Enter Course-4 Marks : "));
        var course5Marks = parseFloat(prompt("Enter Course-5 Marks : "));
        
        var obtainedMarks = course1Marks + course2Marks + course3Marks + course4Marks + course5Marks;

        var totalMarks = 500;

        var percentage = parseFloat((obtainedMarks * 100) / totalMarks);

              switch (true) {
            
                       case percentage >= 90 && percentage <= 100:
                alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : A+`);
                break;

           
            case percentage >= 75 && percentage <= 89:
                alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : A`);
                break;

           
            case percentage >= 60 && percentage <= 74:
                alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : B`);
                break;

          
            case percentage >= 45 && percentage <= 59:
                alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : C`);
                break;

            
            case percentage >= 30 && percentage <= 44:
               alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : D`);
                break;

            
            case percentage >= 0 && percentage <= 29:
                alert(`Total Obtained Marks : ${obtainedMarks} , Percentage : ${percentage}% , Grade : FAIL`);
                break;

            
            default:
                alert("Error! Enter Valid Input");
                break;
        }

   