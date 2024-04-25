function smallestMissingPositiveInteger(nums) {

  // Implement the function smallestMissingPositiveInteger
    let numLen = nums.length;

    for (let i = 0; i < numLen; i++) {
        if (nums[i] <= 0) {
            nums[i] = 0;
        }
    }

    for (let i = 0; i < numLen; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (index < numLen && nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < numLen; i++) {
        if (nums[i] >= 0) {
            return i + 1;
        }
    }

    return numLen + 1;
}

// Example usage:
let arr = [3, 4, -1, 1];
let arr2 = [-1, -3, 4, 2];
let arr3 = [1, 2, 0];

console.log(smallestMissingPositiveInteger(arr));
console.log(smallestMissingPositiveInteger(arr2));
console.log(smallestMissingPositiveInteger(arr3));





module.exports = {smallestMissingPositiveInteger;
