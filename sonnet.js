
// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet").innerHTML;
console.log("Sonnet: ", sonnet);

// Find and output the starting position of the word "orphans"
var orphansPosition = sonnet.indexOf("orphans");
console.log("Starting position of Orphans: " + orphansPosition);

// Output the number of characters in the sonnet
var numberOfChar = sonnet.length;
console.log("Length of Sonnet: " + numberOfChar);

// Replace the first occurance of the string "winter" with "yuletide"
var replaceWords = sonnet.replace("winter", "yuletide");
console.log("Replace words: " + replaceWords);

// Replace all occurances of the string "the" with "a large"
var allReplace = replaceWords.replace(/the /gi, "a large ");
console.log("Replace all 'the': " + allReplace);

// Set the content of the sonnet div with the new string
var insert = document.getElementById("sonnet");
insert.innerHTML = allReplace;

