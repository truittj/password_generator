//Universal Variables go here

//var computerOutput= #
//var userInput = #
//Prompt
var charSet = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var numSet = "1234567890";
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code

var userInput = prompt(
  "Please select a passweod length? (Between 8-128 characters)"
);

var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase === false) {
  charSet = charSet.toLowerCase();
  var userGuessUpper = charSet[Math.floor(Math.random() * charSet.length)];
} else {
  var userGuessLower = charSet[Math.floor(Math.random() * charSet.length)];
}

var specialCharacters = confirm("Do want to include special characters?");
if (specialCharacters === true) {
  var userSpSel = charSpecial[Math.floor(Math.random() * charSpecial.length)];
}

var numbers = confirm("Do you want to inlucde numbers?");
if (numbers === true) {
  var userNum = numSet[Math.floor(Math.random() * numSet.length)];
}

var passwordLength = parseInt(userInput);

function characterGen() {
  var randomInstance = [userGuessLower || userGuessUpper, userSpSel, userNum];
  //  console.log(userGuessLower || userGuessUpper, userSpSel, userNum);
}

characterGen();

function loop() {
  for (var i = 0; i < passwordLength; i++) {
    console.log(characterGen());
  }
}
loop();

//given text...
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
