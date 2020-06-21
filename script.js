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
  lengthConfirm = parseInt(lengthConfirm);
  
  // Confirm is user wants lowercase letters
  var lowerConfirm = confirm("Would you like lowercase letters in your password?");
    // If yes
      // Generate randomLowercase
      function randomLower(){}  
    // If no
      // Move to next prompt
    
  // Confirm if user wants uppercase letters
  var upperConfirm = confirm("Would you like uppercase letters in your password??");
    // If yes
      // Generate randomUppercase
      function randomUpper(){}
    // If no
      // Move to next prompt

  // Confirm if user wants numbers
  var numConfirm = confirm("Would you like numbers in your password?");
    // If yes
      // Generate randomNumber
      function randomNumber(){}
    

  // Confirm if user wants special characters
  var specialConfirm = confirm("Would you like special characters in your password?");
    // If yes
      // Generate randomSpecialChar
      function randomSpecChar(){}
    // If no
      // Finish prompts
  
  // Generate password
    // Print password in text area

