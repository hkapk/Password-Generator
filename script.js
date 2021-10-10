// Assignment code here
//global variables for input types:
//set length between 8 and 128
//var length = [>8 &&<128];
//set upper and lower characters
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" , "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//console.log(passLower);
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//set numeric characters
var number=["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//set special character types
var special=["?", "!", "&", "*"];

//prompt for length of 8 characters
//then at least 1 character type listed above must be selected
//when all prompts are answered the password is generated matching the selected criteria



function askPassword() {
    var passwordLength = prompt("How long do you want your password to be? Enter a number between 8 and 128"); 
    //need to add a check for if less than 8 and greater than 128 alert and return null
    var passLower = confirm("Include lower case?");
    var passUpper = confirm("Include upper case?");
    var passNumber = confirm("Should the password contain numbers?");
    var passSpecial = confirm ("Should the password include special characters?");
    
    //place to record the answers
    var answers = {
        length: length,
        passLower: passLower,
        passLower: passLower,
        passNumber: passNumber,
        passSpecial: passSpecial
    }
    return answers;
    console.log(answers);
    //check for all other responses 
    if (passLower === false && 
        passUpper === false && 
        passNumber === false && 
        passSpecial === false)
        alert("you must answer enter a desired password length and enter OK to the following questions")
        return null;
}

//store the number that the user inputs

//var answers = [lowerCase, numeral, special]

// function randomize(array){
//     var randI = Math.floor(Math.random()* array.length)
//     var randoEl = array [randI]
//     return randoEl 
// }

// randomize();

//function to generate the password based on the user responses
function generatePassword() {
    var choices = askPassword ();
    var choiceOfAnswers = [];
    var pWord = "";

//incorporate user responses to push the choice of answers to the passWord
    if (choiceOfAnswers.passLower) {
        for (var i of lowerCase)
            choiceOfAnswers.push(i);    
}
    if (choiceOfAnswers.passUpper) {
        for (var i of upperCase)
            choiceOfAnswers.push(i);    
}
    if (choiceOfAnswers.passNumber) {
        for (var i of number)
            choiceOfAnswers.push(i);    
}
    if (choiceOfAnswers.passSpecial) {
        for (var i of special)
            choiceOfAnswers.push(i);    
}

// logs the number entered to question 1 console.log(choiceOfAnswers);

for (var i = 0; i < choiceOfAnswers.length; i++) {
    pWord += choiceOfAnswers[Math.floor(Math.random() * choiceOfAnswers.length)];
}
console.log(pWord);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//use this for a random number: 

// function to generate a random numeric value
//var randomNumber = function(min, max) {
   // var value = Math.floor(Math.random() * (max - min) + min);
  
 //   return value;
  //};

//
generateBtn.addEventListener("click", askPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);