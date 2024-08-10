function countVowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||
            str[i] === 'o' || str[i] === 'u' ||
            str[i] === 'A' || str[i] === 'E' || str[i] === 'I' ||
            str[i] === 'O' || str[i] === 'U') {
            count++;
        }
    }
    return count;
}
;
console.log(countVowels("Hammad")); //Output: 2
console.log(countVowels("Hello World")); //Output: 3
function findMissingNumber(arr) {
    var n = arr.length;
    var sum = ((n + 1) * (n + 2)) / 2;
    var actualSum = 0;
    for (var i = 0; i < n; i++) {
        actualSum += arr[i];
    }
    return sum - actualSum;
}
;
console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
