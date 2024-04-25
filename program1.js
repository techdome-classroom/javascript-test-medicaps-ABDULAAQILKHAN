function longestSubstring(text) {
    // Implementation of longestSubstring function
        if (text.length === 0) return 0;
    
        let charIndexMap = {};
        let maxLength = 0;
        let start = 0;
    
        for (let end = 0; end < text.length; end++) {
            if (text[end] in charIndexMap && charIndexMap[text[end]] >= start) {
                start = charIndexMap[text[end]] + 1;
            }
            charIndexMap[text[end]] = end;
            maxLength = Math.max(maxLength, end - start + 1);
        }
    
        return maxLength;
    }
    
    let inputStr = "abcdabcdbb";
    console.log(longestSubstring(inputStr));


module.exports = { longestSubstring };


