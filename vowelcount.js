function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Test the function
b=countVowels("hello world"); // Output: 3
console.log(b);
// console.log(countVowels("JavaScript is fun")); // Output: 5
