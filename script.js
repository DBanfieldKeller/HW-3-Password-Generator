// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate random seed
var randomSeed =Math.floor(Math.random() * 100);

// Establish definition of numbers, letters, and special characters

var numberSet = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseLettersSet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowercaseLettersSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharactersSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+' ];

// Prompt password criteria

// Prompt # of digits
// Confirm # of digits is between 8 and 128
function getDigitNum(){
  var digitNum = prompt("Please indicate the number of digits for your password (8-128)", "Please input a number between 8 and 128");
  while (!(digitNum >= 8 && digitNum <= 128)) {
    alert ("Invalid number of digits, please choose a number between 8 and 128.")
    digitNum = prompt("Please indicate the number of digits for your password (8-128)", "Please input a number between 8 and 128");
  }
  return digitNum;
}
// Confirm digit prompt is working
var digitNum = getDigitNum();
console.log(digitNum);

// Confirm lowercase letters
function getLowerCase(){
  var lowerCase = confirm("Would you like to use lowercase letters?\nOK=Yes Cancel=No");
  return lowerCase;
}

// Confirm uppercase letters
function getUpperCase(){
  var upperCase = confirm("Would you like to use UPPERCASE letters?\nOK=Yes Cancel=No");
  return upperCase;
}
// Confirm special characters
function getSpecialCharacters(){
  var specialCharacters = confirm("Would you like to use special characters?\nOK=Yes Cancel=No");
  return specialCharacters;
}

// Confirm letter prompt is working
var lowerCase = getLowerCase();
console.log(lowerCase);
var upperCase = getUpperCase();
console.log(upperCase);
var specialCharacters = getSpecialCharacters();
console.log(specialCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
