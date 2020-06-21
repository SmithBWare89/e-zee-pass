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

// Click button to trigger to accept inputs

  // Accept user input for length (8 - 128)
  var lengthConfirm = prompt("How long would you like your password to be?");
  
  // Confirm is user wants lowercase letters
  var lowerConfirm = confirm("Would you like lowercase letters in your password?");
    // If yes
      // Generate randomLowercase
      function randomLower(){
        var lowerLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        return lowerLetter;
      }  
    // else
      // Move to next prompt
    
  // Confirm if user wants uppercase letters
  var upperConfirm = confirm("Would you like uppercase letters in your password??");
    // If yes
      // Generate randomUppercase
      function randomUpper(){
        var upperLetter = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        return upperLetter;
      }
    // else
      // Move to next prompt

  // Confirm if user wants numbers
  var numConfirm = confirm("Would you like numbers in your password?");
    // If yes
      // Generate randomNumber
      function randomNumber(){
        var number = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
        return number;
      }
    // else
      // Move to the next prompt
    

  // Confirm if user wants special characters
  var specialConfirm = confirm("Would you like special characters in your password?");
    // If yes
      // Generate randomSpecialChar
      function randomSpecChar(){
        var specialChar = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'","]","^","_","`","{","|","}","~"];
        return specialChar[Math.floor(Math.random() * specialChar.length)];
      }
    // else
      // Finish prompts
  
  // Generate password
    // Print password in text area

