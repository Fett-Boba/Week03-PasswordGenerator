// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    
    var length = prompt("Please enter the length of your desired password (min=8, max=128");
    var validLength = isLengthValid(length);
    var desireLowercase = confirm("Do you want lowercase letters?");
    var desireUppercase = confirm("Do you want uppercase letters?");
    var desireNumerics = confirm("Do you want numerics?");
    var desireSpecialChars = confirm("Do you want special characters?");

    if (validLength) {

        


        return "good password";
    } else {
        return "The length of the password must be a number between 8 and 128 inclusive";
    }
}

// Check if the length is between 8 and 128 and if its a number
function isLengthValid(len) {
    if (len >= 8 && len <= 128 && !isNaN(len)) {
        return true;
    } else {
        return false;
    }
}

// Generate random lowercase 