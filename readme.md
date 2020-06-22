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
