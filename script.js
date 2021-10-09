// Assignment code here

//prompt for length of 8 characters
var getLength = function() {
    var length = "";
  
    while (length === "" || length === null) {
      length = window.prompt("Enter desired Password Length [a digit that is 8-128 characters]");
    }
    window.alert("Your password length is  " + length);
    return length;
    
    // if getLength ===
  };

//if prompted then choose a length of 8-128 characters & display the length chosen

//prompt to ask for character types to include
var getTypes = function() {
    var types = "";
  
    while (types === "" || types === null) {
      types = window.prompt("Enter your desired characters types; lower case, upper case, numeric, special");
    }
    window.alert("Your password character type(s) are " + types);
    return types;
  };

//if prompted then confirm whether or not to include lower or upper, numeric and/or special chars

//then at least 1 character type listed above must be selected

//when all prompts are answered the password is generated matching the selected criteria

//when generated, the pword is displayed in the alert (and/or written on the page)


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
generateBtn.addEventListener("click", getLength);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);