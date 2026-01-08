// Problem 1: Reverse a String
function reverseString(str) {
    let reverse = ""

    for(let i = str.length -1; i >= 0; i--){
        reverse += str[i]
    }

    return reverse
}

// console.log(reverseString('hello'));


// Problem 2: Count Vowels in a String
function countVowels(str) {
    let count = 0;

    for (let i = 0; i<str.length; i++){
        let char = str[i].toLowerCase()

        if(
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u' 
        ){
            count++
        }
    }

    return count;
}

// console.log(countVowels('programming'));

// Problem 3: Check for Palindrome

function isPalindrome(str){
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(checkPalindrome("madam")); // Output: true
console.log(checkPalindrome("hello")); // Output: false

// Problem 4: Find the Maximum Number
function findMax(arr){
    let maxNumber = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxNumber){
            maxNumber = arr[i]
        }
    }
    return maxNumber
}
// console.log(findMax([5, 1, 9, 3])); // Output: 9

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr){
    let uniqueArray = [];
    let k = 0;

    for (let i = 0 ; i<arr.length; i++){
        let isDuplicate = false;

        for(let j=0; j <k; j++){
            if(arr[i] === uniqueArray[j]){
                isDuplicate = true
                break
            }
        }

        if(!isDuplicate){
            uniqueArray[k] = arr[i]
            k++
        }
    }
    return uniqueArray;

}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array
function sumArray(arr){
    let sum = 0;

    for (let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }

    return sum;
}

// console.log(sumArray([1, 2, 3, 4])); 


// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
    let evenNumbers = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers[count] = arr[i]; 
            count++;
        }
    }
    return evenNumbers;
}

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
    let words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized =
            word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(" ");
}

// console.log(capitalizeWords("hello world"));



// Problem 9: Find the Factorial of a Number

function findFactorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i; 
    }
    return result;
}
// console.log(findFactorial(5)); // 120


// Problem 10: PingPong Challenge
function pingPong() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}
// pingPong();