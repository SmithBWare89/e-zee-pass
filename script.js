  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// 
var answer = {
  specialCharList: [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'","]","^","_","`","{","|","}","~"],
  storedCharacters:[],
  passLength: 0,
  password: []
}

// Variable to hold final password
var finalPassword;

// Write password to the #password input
function writePassword() {
    // Ask user how long they'd like their password to be
    var lengthConfirm = prompt("How long would you like your password to be? (Between 8 and 128 characters)");
    // Convert user input into a number and store in lengthConfirm variable
    lengthConfirm = parseInt(lengthConfirm);
      // if user input is not a number
      if (isNaN(lengthConfirm)) {
        // Alert the user that their input my be a number
        alert("Please enter a valid number!");
        // Restart generator function
        writePassword();
      } else if (lengthConfirm < 8 || lengthConfirm > 128) { /* If user input integer is less than 8 or 128*/
        // Alert the user that their input must be between 8 and 128
        alert("Your password length must be between 8 and 128 characters!");
        // Restart generator function
        writePassword();
      } else { /* If all conditions are satisfied */
        // Store integer inputted as passLength key
        answer.passLength = lengthConfirm;
      }
    // Confirm is user wants lowercase letters
    var lowerConfirm = confirm("Would you like lowercase letters in your password?");
        // If user confirms they'd want lowercase letters
        if (lowerConfirm) {
          // store boolean from input in lower key as true
          answer.lower = true;
        } else { /* If user does not want lowercase letters*/
          // store boolean from input in lower key as false
          answer.lower = false;
        }
    // Confirm if user wants uppercase letters
    var upperConfirm = confirm("Would you like uppercase letters in your password?");
        // If user confirms they'd want uppercase letters
        if (upperConfirm) {
          // store boolean from input in upper key as true
          answer.upper = true;
        } else { /* If user does not want uppercase letters*/
          // store boolean from input in upper key as false
          answer.upper = false;
        }
    // Confirm if user wants numbers
    var numConfirm = confirm("Would you like numbers in your password?");
        // If user confirms they'd want numbers
        if (numConfirm) {
          // store boolean from input in number key as true
          answer.number = true;
        } else { /* If user does not want numbers */
          // store boolean from input in number key as false
          answer.number = false;
        }
    // Confirm if user wants special characters
    var specialConfirm = confirm("Would you like special characters in your password?");
        // If user confirms they'd want special characters
        if (specialConfirm) {
          // store boolean from input in special key as true
          answer.special = true;
        } else { /*If user does not want special characters*/
          // store boolean from input in special key as false
          answer.special = false;
        }
      
        // If user selected no parameters
      if (answer.lower === false && answer.upper === false && answer.number === false && answer.special === false) {
        // Alert the user that they must select a parameter
        alert("You must select at least one password parameter! Try again.");
        // Restart password generator
        writePassword();
      }

  // Pass boolean values of user input into generatePassword function
  generatePassword(answer.lower, answer.upper, answer.number, answer.special);

  // Set password variable to be returned output of generatePassword function
  var password = finalPassword;
  // set ID password to passWord text variable
  var passwordText = document.querySelector("#password");
  
  // Set passwordText key to equal password variable
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declare function that accepts the booleans of user input
function generatePassword(lower, upper, number, special) {
  // If user selected lowercase letters
  if (lower) {
    // Run lowerLetters function
    lowerLetters();
  } if (upper) { /* If user selected uppercase letters */
    // Run upperLetters function
    upperLetters();
  } if (number) { /* If user selected numbers */
    // Run numbers function
    numbers();
  }

  // If user did not select special characters and passLength > 0
  while (special === false && answer.passLength > 0) {
    // Push the random index of storedCharacters key into the password key
    answer.password.push(answer.storedCharacters[Math.floor(Math.random() * answer.storedCharacters.length)]);
    // Subtract one from the length of passLength
    answer.passLength--;
    }

  /*While user selected special characters and passLength > 0*/
  while (special === true && answer.passLength > 0) {
    // Concatenate the special characters key with the storedCharacters key
    var newList = answer.storedCharacters.concat(answer.specialCharList);
    // Push a random index of the generated new list key into the password key's array
    answer.password.push(newList[Math.floor(Math.random() * newList.length)]);
    // Decrease 1 from the requested input length
    answer.passLength--;
  }
  // Join the items in the password key's array together
  finalPassword = answer.password.join('');

  // Return the final joined password as a string
  return finalPassword;
}


// Generate all Lowercase letters from character set
function lowerLetters(){
  // start at the position of the first lowercase letter
  for (var i = 97; i <= 122; i++) {
    // push every lowercase letter from positions 97 to 122 into storedCharacters key
    answer.storedCharacters.push(String.fromCharCode(i));
  }
}  

// Generate all uppercase letters from character set
function upperLetters(){
  // start at the position of the first uppercase letter in the character set
  for (var i = 65; i <= 90; i++) {
    // push every lowercase letter from positions 65 to 90 into storedCharacters key
    answer.storedCharacters.push(String.fromCharCode(i));
  }
}

// Generate all numbers from character set
function numbers(){
  // start at the position of the first number in the character set
  for (var i = 48; i <= 57; i++) {
    // push every number from positions 48 to 57 into storedCharacters key
    answer.storedCharacters.push(String.fromCharCode(i));
  }
}