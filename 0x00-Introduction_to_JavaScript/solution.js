// Sum of two numbers
function sum(num1,num2){
   console.log(num1+num2) 
 }
  sum(1,2)
  console.log("****************************************************************")
//Return the next number from the number passed   
function nextNumber(number) {
    
    console.log(number + 1)
}

nextNumber(99)
console.log("****************************************************************")


 //Find perimeter of a rectangle
  function rectanglePerimeter (length,width){
  let rectanglePerimeterr=(length*2)+(width*2)
     console.log(rectanglePerimeterr)
     }
  rectanglePerimeter(10,2)
     console.log("****************************************************************")
     // Return something to me
     function returnSomethingToMe(string1){
         thing1="something " + string1
         console.log(thing1)
  
     }
 
    returnSomethingToMe(" was bought by Victory")
 
     console.log("****************************************************************")
 
     // Bob's BMI vs Jane's BMI
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
             console.log("****************************************************************")
 
                 // Basketball points
                 function basketBallPoints(num2,num3){                    
                     var num2points=num2*2;
                     var num3points=num3*3;
                     var results=num2points+num3points;
                     console.log("Your total results are:"+ results)
                     
                 }
                 console.log( basketBallPoints(20,30))
                 console.log("****************************************************************")
                 // Less than 100
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
                 console.log("****************************************************************")             
     
 //  Convert minutes to second
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
     console.log("****************************************************************")
   
     // Greater among the three
     function greater(num1,num2,num3){
         if(num1>num2&&num1>num3){
             return num1 
         }
        else if(num2>num1&&num2>num3){
         return num2
         }
         else if(num3>num1&&num3>num2){
             return num3
         }
         else if(num1==num2==num3){
            return num1||num2||num3
         }   
     }
     console.log(greater(40,50,60))
     console.log("****************************************************************")
     //Less among the three
     function least(num1,num2,num3){
         if(num1<num2&& num1<num2){
             return num1; 
         }
         else if(num2<num1&&num2<num3){
             return num2; 
         }
         else if(num3<num1&&num3<num2){
             return num3; 
         }
         else if(num1==num2==num3){
            return num1||num2||num3;
         }
     }


     console.log(least(80,90,100))
     console.log("****************************************************************")
     // Football points
     function footballPoints(won,drawn,lost){
         console.log((won*3)+(drawn*1)+(lost-lost))
         
     }
     footballPoints(2,1,4)
     console.log("****************************************************************")


     // Even numbers
     function isEven(num) {
        return num % 2 === 0;
    }
    for (let i = 0; i <= 101; i++) {
        if (isEven(i)) {
            console.log(i);
        }
    }
isEven(23)    
    
