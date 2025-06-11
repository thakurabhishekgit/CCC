let string = "Hello, World!";
string.toUpperCase(); // Converts the string to uppercase
console.log(string); // Outputs: Hello, World!
string = string.toUpperCase(); // Assigns the uppercase string back to the variable
console.log(string); // Outputs: HELLO, WORLD!

string  = string.charAt(0).toLowerCase() + string.slice(1); // Converts the first character to lowercase
console.log(string); // Outputs: hELLO, WORLD!

string = string.replace("WORLD", "JavaScript"); // Replaces "WORLD" with "JavaScript"
console.log(string); // Outputs: hELLO, JavaScript!

