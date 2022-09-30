// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate random seed
// var randomSeed =Math.floor(Math.random() * 100);

// Establish definition of numbers, letters, and special characters

var numberSet = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseLettersSet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var lowercaseLettersSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharactersSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+' ];

// Prompt password criteria

// Prompt # of digits
// Confirm # of digits is between 8 and 128
// TODO: Nest in while loop
function getDigitNum(){
  var digitNum = prompt("Please indicate the number of digits for your password (8-128)", "Please input a number between 8 and 128");
  while (!(digitNum >= 8 && digitNum <= 128)) {
    alert ("Invalid number of digits, please choose a number between 8 and 128.")
    digitNum = prompt("Please indicate the number of digits for your password (8-128)", "Please input a number between 8 and 128");
  }
  return digitNum;
}

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

// Confirm numbers 

function getNumbers(){
  var useNumbers = confirm("Would you like to use numbers?\n OK=Yes Cancel=No");
  return useNumbers
}

// Confirm special characters
function getSpecialCharacters(){
  var specialCharacters = confirm("Would you like to use special characters?\nOK=Yes Cancel=No");
  return specialCharacters;
}

// Generate password

// Determine password length
var passwordLength = getDigitNum();

// Determine characters in use
var lowerCase =getLowerCase();
var upperCase =getUpperCase();
var useNumbers =getNumbers();
var specialCharacters =getSpecialCharacters();

console.log(lowerCase, upperCase, useNumbers, specialCharacters)

//Define function for character selection

function getRandomCharacter(array, newSeed){
  var randomCharacter = array[newSeed];
  return randomCharacter
}

// var arrayLength = uppercaseLettersSet.length
// console.log(arrayLength);
// var randomSeed = getRandomSeed(uppercaseLettersSet);
// console.log(randomSeed)
// var randomCharacter = getRandomCharacter(uppercaseLettersSet, randomSeed);
// console.log(randomCharacter);

// Choose character sets to pull from and combine into one array

function characterArray(){
  var characterType = new Array ();
  if (lowerCase === true){
    characterType.push(lowercaseLettersSet);
  }
  if (upperCase === true){
    characterType.push(uppercaseLettersSet);
  }
  if (useNumbers === true){
    characterType.push(numberSet);
  }
  if (specialCharacters === true){
    characterType.push(specialCharactersSet);
  }
  var characterTypeArray = characterType.flat();
  return characterTypeArray
}
var validCharacterArray = characterArray();

console.log(validCharacterArray);

// Define Random Seed function

function getRandomSeed(Array){
  var randomSeed = Math.floor(Math.random() *Array.length);
  return randomSeed;
}

// var randomSeed = getRandomSeed(validCharacterArray);

function generatePassword(){
  var passwordArray = new Array();
  for (let i = 0; i <= passwordLength; i++){
    passwordArray.push(validCharacterArray[getRandomSeed(validCharacterArray)]);
  }
  var password= passwordArray.join("");
  return password
}

var password = generatePassword();
console.log(password);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
