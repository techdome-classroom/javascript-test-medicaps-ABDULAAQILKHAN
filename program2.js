function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
    let n = arr.length;
    
    // Step 1: Transform the array such that all non-positive integers are replaced with 0
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            arr[i] = 0;
        }
    }

    // Step 2: Mark elements as visited by using the array indices
    for (let i = 0; i < n; i++) {
        let index = Math.abs(arr[i]) - 1;
        if (index < n && arr[index] > 0) {
            arr[index] = -arr[index];
        }
    }

    // Step 3: Find the smallest missing positive integer
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0) {
            return i + 1;
        }
    }

    return n + 1;
}

// Example usage:
console.log(smallest_missing_positive_integer([3, 4, -1, 1]));  // Output: 2
console.log(smallest_missing_positive_integer([1, 2, 0]));      // Output: 3
console.log(smallest_missing_positive_integer([-1, -3, 4, 2])); // Output: 1


module.exports = smallestMissingPositiveInteger;
