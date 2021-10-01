const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log("Results for the tinyArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let trueArr = [3, 2, 3, 4, 2, -4];
let falseArr = [1, 2, 3, 4];

function sumZero(arr) {
  let newArr = arr;
  let ansArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      let sum = arr[i] + newArr[j];
      ansArr.push(sum);
    }
  }
  for (let k = 0; k < ansArr.length; k++) {
    if (ansArr.includes(0)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log("false array: ", sumZero(falseArr));
console.log("true array: ", sumZero(trueArr));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isPangram(str) {
  let regex = /([a-z])(?!.*\1)/g
  return (str.match(regex)).length === 26
}


console.log("This is a Pangram: ",isPangram("The quick brown fox jumps over the lazy dog.")) 
console.log("This is a Pangram: ",isPangram("this is not a pangram.")) 

// function isPangram(str) {
//   let regex = /([a-z])(?!.*\1)/g
//   if((str.match(regex)).length === 26){
//     return true
//   } else {
//     return false
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function uniqueChar(str){
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
      return false
    } 
  }
  return true
}


console.log("This word only has unique character: ", uniqueChar('hello'))
console.log("This word only has unique character: ", uniqueChar('hey'))
console.log("This word only has unique character: ", uniqueChar('example'))
console.log("This word only has unique character: ", uniqueChar('mississippi'))
console.log("This word only has unique character: ", uniqueChar('nope'))

