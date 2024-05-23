// Create a function called sum that takes in two numbers as arguments and returns their sum.
function sum(num1,num2){
   console.log(num1+num2) 
 }
  sum(1,2)
  console.log("****************************************************************")
 //Write a function called rectanglePerimeter that takes in the length and width as arguments and returns the perimeter of the rectangle.
  function rectanglePerimeter (length,width){
  let rectanglePerimeterr=(length*2)+(width*2)
     console.log(rectanglePerimeterr)
     }
  rectanglePerimeter(10,2)
     console.log("****************************************************************")
     // Write a function called returnSomethingToMe that returns the string "something" followed by a space " " followed by the string that was passed into the function.
     function returnSomethingToMe(string1){
         thing1="something " + string1
         console.log(thing1)
  
     }
 
    returnSomethingToMe(" was bought by Victory")
 
     console.log("****************************************************************")
 
     // Bob and Jane want to know who has a bigger BMI than the other. Write a function called greaterBMI that will take ibon as the first arguement the BMI of Bob and as the second Argument the BMI of Jane. If Bob has a bigger BMI than jane, your function should return the string "Bob", if Jane has a bigger BMI than Bob, it should return the string "Jane", if they have the same BMI, it should return the string "Equal".
     function  greaterBMI(bobBMI,janeBMI){
         if(bobBMI > janeBMI){
             return "Bob";
         }
             else if(janeBMI>bobBMI)
                 {
                    return "Jane"; 
                 }
             
            else{
                 return "Equal";
             }
     }
             const bobBMI=40;
             const janeBMI=50;
             console.log(greaterBMI(bobBMI,janeBMI));
            //   *********************
 
                 // You are counting points for a basketball game, 2 points are awarded for every 2 pointer and 3 points for every 3 pointer. Write a function called basketBallPoints, the first argument should be the number of two pointers scored by the team and the second argument the number of three pointers scored by the team. This function returns the final points for the team.
                 function basketBallPoints(num2,num3){                    
                     var num2points=num2*2;
                     var num3points=num3*3;
                     var results=num2points+num3points;
                     console.log("Your total results are:"+ results)
                     
                 }
                 console.log( basketBallPoints(20,30))
                console.log( "****************")
                 // Given two numbers, write a function called isSumMoreThan100 return true if their sum is greater than 100 and false if their sum is less than 100.
                 function isSumMoreThan100(num1,num2){
                     var sum=num1+num2;
                     if(sum>100){
                         return "true"
                     }
                     else {
                         return("false")
                     }
                 }
                 console.log(isSumMoreThan100(28,49))
                 console.log("********")                
     
 // Given that 1 minute is equal to 60 seconds. Write a function called convertToSeconds that takes in the number of minutes as an arguments and returns the seconds equivalent in the format x seconds e.g 120 seconds, 300 seconds. e.t.c. If the seconds equivalent is 0, then it should just return 0, if the seconds equivalent is 1, then it should return 1, if the seconds equivalent is more than 1, then it should return with the string "seconds"
           
     function convertToSeconds(minutes){
         var seconds=minutes*60;
         if(seconds==0){
             return 0;
         }
         else if(seconds==1){
             return 1;
         }
         else if(seconds>1){
             return seconds+" "+'seconds'
         }
         
     }
     console.log(convertToSeconds(50));
    //  *****************
   
     // Write a function called greater that takes in three numbers as arguments and returns the greatest number among the three. If they are all equal, it should return any of them.
     function greater(num1,num2,num3){
         if(num1>num2&&num1>num3){
             console.Log(num1) 
         }
        else if(num2>num1&&num2>num3){
         console.Log(num2points)
         }
         else if(num3>num1&&num3>num2){
             console.Log(num3)
         }
         else if(num1==num2==num3){
             console.log(num1||num2||num3) 
         }   
     }
     // Write a function called least that takes in three numbers as arguments and returns the least among the three. If they are all equal, it should return any of them.
     function least(num1,num2,num3){
         if(num1<num2&& num1<num2){
             console.log(num1) 
         }
         else if(num2<num1&&num2<num3){
             console.log(num2) 
         }
         else if(num3<num1&&num3<num2){
             console.log(num3) 
         }
         else if(num1==num2==num3){
            console.log(num1||num2||num3)
         }
     }
     // Write a function called footballPoints that returns the number of points a football team has obtained so far, the first argument for this function is the number of games a team has won, the second argument is the number of games the team has drawn and the third arguement is the number of times the team has lost. 3 points are awarded for every game won, 1 point for every game draw and 0 points for every game lost.
     function footballPoints(won,drawn,lost){
         var wonpoints=won*3;
         var drawnpoints=drawn*1;
         var lostpoints=lost*0;
         var totalpoints=wonpoints+drawnpoints+lostpoints;
         console.log("You earned:"&(totalpoints)+ "points")
     }
     // Write a function called isEven that takes in a number as an argument, the function returns true if a number is even and returns false if a number is odd. Use this function to log to the console all the even numbers between 0 and 101.
     function isEven(num){
         if(num%2==0){
             console.log("even") 
         }
         else if(num%2!==0){
             console.log("odd") 
         }
     }