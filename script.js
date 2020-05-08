//Universal Variables go here

//var computerOutput= #
//var userInput = #
//Prompt
var charSet = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var numSet = "1234567890";
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code

var userInput = prompt(
  "Please select a password length? (Between 8-128 characters)"
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

var long = function howLong() {
  var passwordLength = parseInt(userInput);
  //console.log(passwordLength);
};

var rando = function characterGen() {
  var randomInstance = [userGuessLower || userGuessUpper, userSpSel, userNum];
  //  console.log(userGuessLower || userGuessUpper, userSpSel, userNum);
  var randomCharacter =
    randomInstance[Math.floor(Math.random() * randomInstance.length)];
  //return randomCharacter;
  //console.log(randomCharacter);
};
builtArray = [];
for (i = 0; i <= long.length; i++) {
  builtArray.push(characterGen());
}
console.log(builtArray);
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
