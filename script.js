// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Generate random lowercase letter using ascii codes
function generateLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// Generate random uppercase letter using ascii codes
function generateUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

// Generate a random number between 0 and 9
function generateNumeric() {
    return Math.floor(Math.random() * 10);
}

// Generate a special character
function generateSpecialChar() {
    var specialChars = "!#$%&()*+,-.:;<=>?@[]^_{|}~";
    return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

// Check the user entered length of the password
function isValidLength(len) {
    if (len >= 8 && len <= 128 && !isNaN(len)) {
        return true;
    } else {
        return false;
    }
}

// Create the password
function generatePassword() {
    var userLengthReached = 0;
    var generatedPW = "";
    var userLength = prompt("Please enter the length of your desired password");    

    // If the user entered length is valid, collect the rest of info from them
    if (isValidLength(userLength)) {
        var lc = confirm("Do you want lowercase letters?");
        var uc = confirm("Do you want uppercase letters?");
        var nums = confirm("Do you want numerics?");
        var sc = confirm("Do you want special characters?");
        
        // Insure user chose at least one character type
        if (lc || uc || nums || sc) {

            // Generate password characters for user entered length
            while (userLengthReached < userLength) {
                if  (lc && userLengthReached < userLength) {
                    generatedPW = generatedPW.concat(generateLowercase());
                    userLengthReached++;
                };
                if (uc && userLengthReached < userLength) {
                    generatedPW = generatedPW.concat(generateUppercase());
                    userLengthReached++;
                };
                if (nums && userLengthReached < userLength) {
                    generatedPW = generatedPW.concat(generateNumeric());
                    userLengthReached++;
                };
                if (sc && userLengthReached < userLength) {
                    generatedPW = generatedPW.concat(generateSpecialChar());
                    userLengthReached++;
                };
            };
            // Return the mediocre password
            return generatedPW;

        // Insure user chooses at least one character type                      
        } else {
            return "You must choose at least one option (lowercase, uppercase, numerics, or special characters).";
        }
    
    // Insure user enteres a valid length        
    } else {
        return "The length of the password must be a number between 8 and 128 inclusive.";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

