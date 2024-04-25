function smallestMissingPositiveInteger(nums) {

  // Implement the function smallestMissingPositiveInteger
    let numLen = nums.length;
    
    // Step 1: Transform the numsay such that all non-positive integers are replaced with 0
    for (let i = 0; i < numLen; i++) {
        if (nums[i] <= 0) {
            nums[i] = 0;
        }
    }

    // Step 2: Mark elements as visited by using the numsay indices
    for (let i = 0; i < numLen; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (index < numLen && nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    // Step 3: Find the smallest missing positive integer
    for (let i = 0; i < numLen; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return numLen + 1;
}

// Example usage:
console.log(smallestMissingPositiveInteger([3, 4, -1, 1]));  // Output: 2



module.exports = smallestMissingPositiveInteger;
