function longestSubstring(text) {
    // Implementation of longestSubstring function
        if (text.length === 0){
            return 0;
        }
    
        let allIndexObj = {};
        let maxLen = 0;
        let start = 0;
    
        for (let i = 0; i < text.length; i++) {

            if (text[i] in allIndexObj && allIndexObj[text[i]] >= start) {
                start = allIndexObj[text[i]] + 1;
            }
            allIndexObj[text[i]] = i;
            maxLen = Math.max(maxLen, i - start + 1);

        }
    
        return maxLen;
    }
    
    let inputStr = "abcdabcdbb";
    console.log(longestSubstring(inputStr));


module.exports = { longestSubstring };


