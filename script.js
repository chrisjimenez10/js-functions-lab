/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y ,z)=> {
    if(x >= y && x >= z){
        return x;
    } else if(y >= x && y >= z){
        return y;
    } else if(z >= x && z >= y){
        return z;
    }
}

console.log('Exercise 2 Result:', maxOfThree(1, 2, 3));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = character => {
    if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
        return true;
    } else if(character === "A" || character === "E" || character === "I" || character === "O" || character === "U"){
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("I"));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

const sumArray = (array)=> {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

console.log('Exercise 4 Result:', sumArray([2, 2, 3]));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (array)=> {
    let product = 1;
    for(let i=0; i<array.length; i++){
        product = product * array[i];
    }
    return product;
}

console.log('Exercise 5 Result:', multiplyArray([2, 3, 4]));

  /*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (string)=> {
    newString = "";
    for(let i=string.length - 1; i>=0; i--){
        newString = newString + string[i];
    }
    return newString;
}

console.log('Exercise 6 Result:', reverseString("phone"));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

const longestStringInArray = (arr)=> {
    let longestString = "";
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "string" && arr[i].length > longestString.length){ 
            longestString = arr[i]; 
        }
    }
    return longestString;
}

console.log('Exercise 7 Result:', longestStringInArray(["h", "mamamias", "hello", "at", "christopherjimenez", "rushuniversityanduicwithtritoncollege"]));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = (arr, number)=> {
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > number){ 
            longerString = arr[i];
            newArray.push(longerString);
        }
    }
    return newArray;
}

console.log('Exercise 8 Result:', stringsLongerThan(["h", "mamamias", "hello", "at", "christopherjimenez"], 5));
