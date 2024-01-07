var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;

};

console.log(isPowerOfTwo(3));   // Output: true
