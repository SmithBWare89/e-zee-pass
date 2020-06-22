# E-Zee-Pass Password Generator
## Description
The intent of this application is to allow the user to select several different parameters in order to generate a random password. This includes the user inputting their desired length as well as if they'd like lowercase, uppercase, numbers, or special characters in their password. A limitation of this password is how to clear the password text area in order to generate a new password. The user currently has to refresh the application in order to generate a new password.

# Methodologies
![Javascript logo](media/javascript.png)=250x250
![HTML and CSS logo](media/html-css.png)

# Application Features
### Example of password length input prompt
![Example of an input box asking user to input a number for the password length](media/length-input.png)

### Example of user parameter confirmation
![Example of a confirmation prompt to determine if user would like uppercase letters](media/parameter-confirm.png)

### Randomly generated password
![Example of a randomly generated password](media/generated-password.png)

# Commit History

### Established basic functionality
- Wrote pseudocode to establish initial generator functionality
- Established basic functions for each random character to be generated
- Declared variables to store prompt answers

### Feature/RandomCharacters
- Established code to generate random letters and numbers from the character code set being used in the HTML
- Declared array to house all special characters to be used in password generation
- Established code to generate a random special character when calling the function

### Feature/user-input
- Established series of prompts/confirms to accept input from the user for desired password
- Established validations to ensure the user input IS a number
- Established validations to ensure user input is a number between 8 and 128 characters
- Established answer object to store boolean values from confirm prompts
- Established passLength key to store length from user input

### Feature/RandomCharacters V2
- Established key's storedCharacters and specialCharList to store values from functions
- Updated loops in character generator functions to loop through the UTF-8/ASCII code character sets to generate them all then push them into the storedCharacters key.
- Ran into issue where special characters could not be housed as a string so they were put into their own separate key. They will then be concatenated with the array of the stored letters and numbers
- Added comments to user inputs to explain the flow

### Feature/generate-password
- Established generatePassword function to accept boolean values from user input
- Verified if user input is true for lower, uppercase, and numbers using boolean statements. If true then corresponding function is ran
- Since special characters are already stored in a key, established while loops to check if special characters is true/false
- If user selected they did not want special characters then a while loop will run to select a random index of the storedCharacters key and push it into the password key
- If user selected special characters then the special characters will be concatenated with the storedCharacters key into a new variable and the random index of that array will be pushed into the password key
- Added validation to ensure user selected at least one password parameter
- Joined final array of password key into a string then stored it and returned it for printing

# Credit
## UCF Coding Bootcamp Teacher Assistant Ryan Strickler
## [Traversy Media for providing the foundation for my code](https://www.youtube.com/watch?v=duNmhKgtcsI)