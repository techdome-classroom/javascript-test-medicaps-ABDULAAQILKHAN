Problem Statement: Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;

    let charIndexMap = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap && charIndexMap[s[end]] >= start) {
            start = charIndexMap[s[end]] + 1;
        }
        charIndexMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
let inputStr = "abcabcbb";
console.log(lengthOfLongestSubstring(inputStr));  // Output: 3
