/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  /*
In the code replace(/[^a-z0-9]/g, ''), replace() is a string method that replaces all occurrences of a specified pattern (or regular expression) with a replacement string.

The pattern /[^a-z0-9]/g is a regular expression that matches any character that is not an uppercase or lowercase letter or a number. The ^ character inside the square brackets means "not", so the regular expression matches anything that is not in the range of a to z or 0 to 9.

The /g at the end of the regular expression is a modifier that stands for "global", which means the method will replace all occurrences of the pattern, not just the first one it finds.

So, in the context of the isPalindrome() function, the regular expression is used to remove all non-alphanumeric characters (such as spaces, punctuation, and special characters) from the input string. This is done by replacing any non-alphanumeric character with an empty string (''), effectively removing it from the string. The resulting string contains only lowercase letters and numbers, which makes it easier to check if it is a palindrome.
  */

console.log(s)

  // Check if the string is the same forwards and backwards
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
In the isPalindrome() function, the line if (s[i] !== s[s.length - 1 - i]) is used to check if the characters in the string s are the same when read forwards and backwards.

Here's how the check works:

The variable i is the loop index that starts at 0 and goes up to half the length of the string s.
For each iteration of the loop, the if statement checks if the character at index i is not equal to the character at the corresponding index counting from the end of the string (s.length - 1 - i).

For example, if the string s has a length of 5, the loop would iterate from 0 to 2 (inclusive), and the check would compare the character at index 0 to the character at index 4, the character at index 1 to the character at index 3, and so on.
If any characters don't match, the function returns false, indicating that the string is not a palindrome.
If all characters match, the loop completes and the function returns true, indicating that the string is a palindrome.
So, this line of code checks whether the characters at opposite ends of the string are equal to each other. If they are not equal, it means that the string is not a palindrome and the function should return false.
*/

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome(""));//true