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
if (userInput < 8 || userInput > 128) {
  alert("Please select a valid character");
} else {
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

  //console.log(passwordLength);
  // need if statement

  function characterGen() {
    //turns user input into an interger
    var passwordLength = parseInt(userInput);

    //an array of all the possible lists
    var randomInstance = [userGuessLower || userGuessUpper, userSpSel, userNum];
    //creates a single instance of the actual array's
    var randomCharacter =
      randomInstance[Math.floor(Math.random() * randomInstance.length)];
    //trying to build an array with the user data
    //array is not changing randomly
    builtArray = [];
    for (i = 0; i < passwordLength; i++) {
      builtArray.push(randomCharacter);
      var pWord = builtArray.join("");
    }
    //checking to se if password gen works
    console.log(pWord);
    //returning the value of the array becoming a string
    return pWord;
    //console.log(randomCharacter);
  }

  //given text...
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = characterGen();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
}
