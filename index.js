/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
if(votingAge > 18) {
    console.log('true');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let color = 'blue';
let mindset = 'negative';

if(mindset === 'positive'){
    color = 'blue';

}else if(mindset === 'negative'){
    color = 'yellow';
}
console.log(color);





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


Number(1999);


//Task d: Write a function to multiply a*b 


function multiplier(a * b){
    console.log('results');
}


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

//multiplying your age by 7

var age = '26';
function dogyears(age * 7) {
    console.log('your age in dog years');
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 

//Part I

// if(age>=1) {
//     console.log('adults dogs at least 1 year');
// }else if(age<1){
//     console.log('puppy less than 1 year');
// }

// up to 5 lbs - 5% of their body weight

//Part II

// if(weight<=5) {
//     function bodyone(weight * 0.05);
//     console.log(poundsOfRawFood);
// }else if(weight=<10) {
//     function bodytwo(weight * 0.04);
//     console.log(poundsOfRawFood);
// }else if(weight=<15) {
//     function bodythree (weight * 0.03);
//     console.log(poundsOfRawFood);
// }else if(weight>15) {
//     function bodyfour (weight *0.02);
//     console.log(poundsOfRawFood);
// }
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// if(age<(4/12)) {
//     function puppyone(weight * 0.10) {
//         console.log(poundsOfRawFood);
//     }
// }else if(age<(7/12)) {
//     function puppytwo(weight * 0.05) {
//         console.log(poundsOfRawFood);
//     }
// }else if(age<(1)) {
//     function puppythree(weight * 0.04) {
//         console.log(poundsOfRawFood);
//     }
// }
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
var weight = '15';
var age = '1';

function DoggyFunction(weight, age){
    if(age>=1) {
        console.log('adults dogs at least 1 year');
    }else if(age<1){
        console.log('puppy less than 1 year');
    }
    if(weight<=5) {
        function bodyone(weight * .05);
        console.log(poundsOfRawFood);
    }else if(weight<=10) {
        function bodytwo(weight * .04);
        console.log(poundsOfRawFood);
    }else if(weight<=15) {
        function bodythree (weight * .03);
        console.log(poundsOfRawFood);
    }else if(weight>15) {
        function bodyfour (weight * .02);
        console.log(poundsOfRawFood);
    }
    if(age<(4/12)) {
        function puppyone(weight * .10) {
            console.log(poundsOfRawFood);
        }
    }else if(age<(7/12)) {
        function puppytwo(weight * .05) {
            console.log(poundsOfRawFood);
        }
    }else if(age<(1)) {
        function puppythree(weight * .04) {
            console.log(poundsOfRawFood);
        }
    return poundsOfRawFood;
  }  


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockpaperscissors(random) {
    let machine = Math.random()
    
    if(machine<=0.30) {
        machine = "rock"
    } else if (computer <=0.60) {
        computer = "paper"
    } else if (computer > 0.60) {
        computer = "scissors"
    }

    let result = null;

    if (random === "rock" && machine === "rock" || random === "paper" && machine === "paper" || random === "scissors" && machine === "scissors") {
    result = "draw"
} else if (random === "rock" && machine === "scissors" || random === "paper" && machine === "rock" || random === "scissors" && machine === "paper") {
    result = "win"
} else if (random === "scissors" && machine === "rock" || random === "rock" && machine === "paper" || random === "scissors" && machine === "paper") {
    result = "lose"
} 


  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

var feet = parseInt(prompt("Please enter feet:"));
var centimeters = feet * 30.48;
console.log(centimeters + "CM");



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
//count down with a loop

function annoyingSong(number){
    let = number
    for (let i = number; i > 0; i--) {
        return(i)
    }
}
console.log(annoyingSong(10));



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function grading() {

let grade = Math.random()

if(grade<0.60) {
    grade = "F"
}else if (grade<=0.69) {
    grade = "D"
} else if (grade<=0.79) {
    grade = "C"
} else if (grade<=0.89) {
    grade = "B"
} else if (grade<=1.00) {
    grade = "A"
}
}
console.log(grade + "This is your final grade")

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





