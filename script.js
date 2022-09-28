// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate random seed
var randomSeed =Math.floor(Math.random() * 100);

console.log(randomSeed);

// Prompt password criteria

var digitNumber = prompt("Please indicate the number of digits for your password (8-128)", "8");
var specialCharacters = confirm("Would you like to use special characters?\nOK=Yes Cancel=No");
var uppercase = confirm("Would you like to use uppercase letters in addition to lowercase?\nOK=Yes Cancel=NO");
var numbers = confirm("Would you like to use numbers?\nOK=Yes Cancel=No");


console.log(digitNumber);
console.log(specialCharacters);
console.log(uppercase);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
