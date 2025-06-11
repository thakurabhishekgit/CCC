let str = "  Hello, JavaScript World!  ";

// 1. length
console.log("Length:", str.length);

// 2. trim
let trimmed = str.trim();
console.log("Trimmed:", trimmed);

// 3. toUpperCase and toLowerCase
console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());

// 4. charAt
console.log("Character at index 7:", trimmed.charAt(7));

// 5. charCodeAt
console.log("Char code at index 0:", trimmed.charCodeAt(0));

// 6. indexOf and lastIndexOf
console.log("Index of 'JavaScript':", trimmed.indexOf("JavaScript"));
console.log("Last index of 'o':", trimmed.lastIndexOf("o"));

// 7. includes
console.log("Includes 'World':", trimmed.includes("World"));

// 8. startsWith and endsWith
console.log("Starts with 'Hello':", trimmed.startsWith("Hello"));
console.log("Ends with '!':", trimmed.endsWith("!"));

// 9. slice
console.log("Slice (7, 17):", trimmed.slice(7, 17));

// 10. substring
console.log("Substring (7, 17):", trimmed.substring(7, 17));

// 11. substr (deprecated, but still works in many browsers)
console.log("Substr (7, 10):", trimmed.substr(7, 10));

// 12. split
console.log("Split by space:", trimmed.split(" "));

// 13. replace
console.log("Replace 'World' with 'Universe':", trimmed.replace("World", "Universe"));

// 14. repeat
console.log("Repeat 2 times:", trimmed.repeat(2));

// 15. concat
let str2 = " Let's code!";
console.log("Concatenated:", trimmed.concat(str2));

// 16. padStart and padEnd
console.log("PadStart (30):", trimmed.padStart(30, "*"));
console.log("PadEnd (30):", trimmed.padEnd(30, "-"));

// 17. match
console.log("Match word characters:", trimmed.match(/\w+/g));

// 18. search
console.log("Search for 'JavaScript':", trimmed.search("JavaScript"));

// 19. localeCompare
console.log("Locale Compare with 'hello':", trimmed.localeCompare("hello"));

// 20. normalize
console.log("Normalized:", trimmed.normalize());
