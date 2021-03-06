//Universal Variables go here
//var computerOutput= #
//var userInput = #
//Prompt
var charSet = "qwertyuiopasdfghjklzxvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var numSet = "1234567890";
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code
//Asking a t/f if user wants to include lower case or upper case letters
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
  //Asking a t/f if user wants to include special characters
  var specialCharacters = confirm("Do want to include special characters?");
  if (specialCharacters === true) {
    var userSpSel = charSpecial[Math.floor(Math.random() * charSpecial.length)];
  }
  //Asking a t/f if user wants to include numbers
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
    //creates a single instance of the actual array's
    //console.log(randomInstance.indexOf);
    //var randomCharacter =
    //randomInstance[Math.floor(Math.random() * randomInstance.length)];
    //trying to build an array with the user data
    //console.log(randomInstance.indexOf);
    //array is not changing randomly
    builtArray = [];
    for (i = 0; i < passwordLength; ) {
      if (i < passwordLength) {
        //this is adding some context to the password
        var randomInstance = [
          userGuessLower || userGuessUpper,
          userSpSel,
          userNum,
        ];
        var randomCharacter =
          randomInstance[Math.floor(Math.random() * randomInstance.length)];
        i++;
      }
      //creating the array
      builtArray.push(randomCharacter);
      var pWord = builtArray.join("");
    }
    //checking to see if password gen works
    //console.log(pWord);
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
