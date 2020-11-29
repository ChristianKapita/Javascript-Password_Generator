// The Password generator will provide a password with 8-128  characters based on criteria the user specifies.

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "//", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Global variables declaration
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var passwordCharacters = [];
var confirmLength="";


//get password length and paramaters  
function getoption() {
   confirmLength = parseInt(prompt("How many characters would you like your password to contain?"));
    if (confirmLength < 8 || confirmLength > 128 || (isNaN(confirmLength) === true)) {
        alert("Password length must be a NUMBER  between 8-128 characters!!!Try again");
        confirmLength="";
        return;
    }
    alert(`Your password will have ${confirmLength} characters`);
    confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        confirmLength="";
        return;
    }


}

// Generate password 
function generatePassword() {
    var randomPassword = " "
    getoption();
    if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
        passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);