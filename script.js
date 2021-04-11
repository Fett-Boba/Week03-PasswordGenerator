// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generateLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function generateUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generateNumeric() {
    return Math.floor(Math.random() * 10);
}

function generateSpecialChar() {
    var specialChars = "!#$%&()*+,-.:;<=>?@[]^_{|}~";
    return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

function isValidLength(len) {
    if (len >= 8 && len <= 128 && !isNaN(len)) {
        return true;
    } else {
        return false;
    }
}

function generatePassword() {

    var userLengthReached = 0;
    var generatedPW = "";
    var noChoice = 0;

    var userLength = prompt("Please enter the length of your desired password");    

    if (isValidLength(userLength)) {
        var lc = confirm("Do you want lowercase letters?");
        var uc = confirm("Do you want uppercase letters?");
        var nums = confirm("Do you want numerics?");
        var sc = confirm("Do you want special characters?");

        while (userLengthReached < userLength) {
            
            if  ((lc && userLengthReached < userLength) ||
                (!lc && !uc && !nums && !sc && userLengthReached < userLength)) {
                generatedPW = generatedPW.concat(generateLowercase());
                userLengthReached++;
            };
            if ((uc && userLengthReached < userLength) || 
                (!lc && !uc && !nums && !sc && userLengthReached < userLength)) {
                generatedPW = generatedPW.concat(generateUppercase());
                userLengthReached++;
            };
            if ((nums && userLengthReached < userLength) || 
                (!lc && !uc && !nums && !sc && userLengthReached < userLength)) {
                generatedPW = generatedPW.concat(generateNumeric());
                userLengthReached++;
            };
            if ((sc && userLengthReached < userLength) || 
                (!lc && !uc && !nums && !sc && userLengthReached < userLength)){
                generatedPW = generatedPW.concat(generateSpecialChar());
                userLengthReached++;
            };
        };
        return generatedPW;
    } else {
        return "The length of the password must be a number between 8 and 128 inclusive";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

