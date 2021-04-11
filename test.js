// Create random lowercase by generating ascii code and converting to char
// (26 random numbers starting at 97 which is ascii 'a')
function generateLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// Create random uppercase by generating ascii code and converting to char
// (26 random numbers starting at 65 which is ascii 'A')
function generateUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

// Create random number between 0 and 9
function generateNumeric() {
  return Math.floor(Math.random() * 10);
}

// Create a random special character by generating a random number 
// using the length of the array, and then choosing the char at that position
function generateSpecialChar() {
  var specialChars = "!#$%&()*+,-.:;<=>?@[]^_{|}~";
  return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}

// simulate user choices
var lc = true;
var uc = true;
var nums = true;
var sc = true;
var userLength = 20;


var userLengthReached = 0;
var generatedPW = "";

while (userLengthReached < userLength) {

  if (lc && userLengthReached < userLength) {
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
}

console.log(generatedPW);
console.log(generatedPW.length);

