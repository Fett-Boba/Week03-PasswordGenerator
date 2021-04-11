// Password Generator


// Get length of password from user, and insure validity
function validateLength() {
    var len = prompt("Please enter a password length (8 - 128 chars)");
    if (len >= 8 && len <= 128 && !isNaN(len)) {
        return len;
    } else {
        alert("The length of the password must be a number between 8 and 128");
        return validateLength();  
    }
}

function validateLowercase() {
    //var lc = prompt("Please enter your lowercase letters");
    
    var lc = "abcdefgG";
    console.log(lc);

    var regexp = /^[a-z]+$/;
    if (regexp.test(lc)) {
        console.log("lowercase")
    } else {
        console.log("nope");
    }
}

function validateUppercase() {
    //return(prompt("Please enter your uppercase letters"));
    var input = "SDFSDFZAD";
    var regex = /^[A-Z]+$/;
    console.log(input);

    if (regex.test(input)) {
        alert("all uppers");
    } else {
        alert("invalid");
    }
    return;
}

function validateNumerics() {
    return(prompt("Please enter your numerics"));
}

function validateSpecialChars() {
    return(prompt("Enter your special characters"));
}

//validateLength();
//validateLowercase();
validateUppercase();

//var pwLength = getPwLength();
// var pwLowercase = getPwLowercase();
// var pwUppercase = getPwUppercase();
// var pwNumerics = getPwNumerics();
// var pwSpecialChars = getPwSpecialChars();

//console.log("Length: " + pwLength);
// console.log("Lowercase: " + pwLowercase);
// console.log("Uppercase: " + pwUppercase);
// console.log("Numerics: " + pwNumerics);
// console.log("Special chars: " + pwSpecialChars);






