let str = "  Hello, JavaScript World!  ";


console.log("Length:", str.length);

let trimmed = str.trim();
console.log("Trimmed:", trimmed);

console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());


console.log("Character at index 7:", trimmed.charAt(7));


console.log("Char code at index 0:", trimmed.charCodeAt(0));


console.log("Index of 'JavaScript':", trimmed.indexOf("JavaScript"));
console.log("Last index of 'o':", trimmed.lastIndexOf("o"));


console.log("Includes 'World':", trimmed.includes("World"));


console.log("Starts with 'Hello':", trimmed.startsWith("Hello"));
console.log("Ends with '!':", trimmed.endsWith("!"));


console.log("Slice (7, 17):", trimmed.slice(7, 17));


console.log("Substring (7, 17):", trimmed.substring(7, 17));

console.log("Substr (7, 10):", trimmed.substr(7, 10));


console.log("Split by space:", trimmed.split(" "));


console.log("Replace 'World' with 'Universe':", trimmed.replace("World", "Universe"));


console.log("Repeat 2 times:", trimmed.repeat(2));


let str2 = " Let's code!";
console.log("Concatenated:", trimmed.concat(str2));


console.log("PadStart (30):", trimmed.padStart(30, "*"));
console.log("PadEnd (30):", trimmed.padEnd(30, "-"));


console.log("Match word characters:", trimmed.match(/\w+/g));


console.log("Search for 'JavaScript':", trimmed.search("JavaScript"));


console.log("Locale Compare with 'hello':", trimmed.localeCompare("hello"));


console.log("Normalized:", trimmed.normalize());
