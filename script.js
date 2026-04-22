// function firstNonRepeatedChar(str) {
//  // Write your code here
// }
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

function firstNonRepeatedChar(str) {
  const count = {};

  // Count frequency of each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
	  
  }

  // Find first non-repeating character
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
