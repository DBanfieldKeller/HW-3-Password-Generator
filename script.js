// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate random seed
var randomSeed =Math.floor(Math.random() * 100);

console.log(randomSeed);

// Prompt password criteria

// var specialCharacters = confirm("Would you like to use special characters?\nOK=Yes Cancel=No");
// var uppercase = confirm("Would you like to use uppercase letters in addition to lowercase?\nOK=Yes Cancel=NO");
// var numbers = confirm("Would you like to use numbers?\nOK=Yes Cancel=No");

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
var digitNum = getDigitNum()
console.log(digitNum)




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
