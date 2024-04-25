function longestSubstring(text) {
    // Implementation of longestSubstring function
        if (text.length === 0) return 0;
    
        let charIndexMap = {};
        let maxLength = 0;
        let start = 0;
    
        for (let i = 0; i < text.length; i++) {
            if (text[i] in charIndexMap && charIndexMap[text[i]] >= start) {
                start = charIndexMap[text[i]] + 1;
            }
            charIndexMap[text[i]] = i;
            maxLength = Math.max(maxLength, i - start + 1);
        }
    
        return maxLength;
    }
    
    let inputStr = "abcdabcdbb";
    console.log(longestSubstring(inputStr));


module.exports = { longestSubstring };


