debugger;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Accept user input for length (8 - 128)
  var lengthConfirm = prompt("How long would you like your password to be? (Between 8 and 128 characters)");
  lengthConfirm = parseInt(lengthConfirm);
    if (isNaN(lengthConfirm)) {
      alert("Please enter a valid number!");
      writePassword();
    } else if (lengthConfirm < 8 || lengthConfirm > 128) {
      alert("Your password length must be between 8 and 128 characters!");
      writePassword();
    } else {
      answer.passLength = lengthConfirm;
    }
  // Confirm is user wants lowercase letters
  var lowerConfirm = confirm("Would you like lowercase letters in your password?");
      if (lowerConfirm) {
        answer.lower = true;
      } else {
        answer.lower = false;
        return;
      }
  // Confirm if user wants uppercase letters
  var upperConfirm = confirm("Would you like uppercase letters in your password??");
      if (upperConfirm) {
        answer.upper = true;
      } else {
        answer.upper = true;
      }
  // Confirm if user wants numbers
  var numConfirm = confirm("Would you like numbers in your password?");
      if (numConfirm) {
        answer.number = true;
      } else {
        answer.number = false;
      }
  // Confirm if user wants special characters
  var specialConfirm = confirm("Would you like special characters in your password?");
      if (specialConfirm) {
        answer.special = true;
      } else {
        answer.special = false;
      }
  
  generatePassword(answer.lower, answer.upper, answer.number, answer.special);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var answer = {
  password:[],
};

function generatePassword(lower, upper, number, special) {
  while (answer.passLength > 0) {
    if (lower && answer.passLength > 0) {
      randomLower();
    } if (upper && answer.passLength > 0) {
      randomUpper();
    } if (number && answer.passLength > 0) {
      randomNumber();
    } if (special && answer.passLength > 0) {
      randomSpecChar();
    } else {
      alert("Cannot generate a password without parameters. Please try again.")
      break;
    }
  }
  return answer.password.join(''); 
}

// Generate randomLowercase
function randomLower(){
  var lowerLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  answer.passLength = answer.passLength - 1;
  answer.password.push(lowerLetter);
}  

function randomUpper(){
  var upperLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  answer.passLength = answer.passLength - 1;
  answer.password.push(upperLetter);
}

function randomNumber(){
  var number = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  answer.passLength = answer.passLength - 1;
  answer.password.push(number);
}

function randomSpecChar(){
  var specialCharList = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'","]","^","_","`","{","|","}","~"];
  var specialChar = Math.floor(Math.random() * specialCharList.length);
  answer.passLength = answer.passLength - 1;
  answer.password.push(specialChar);
}