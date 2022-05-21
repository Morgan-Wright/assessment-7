const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// // Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


// tiny array
perf.start();
doublerInsert(tinyArray);
let resultsAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


// small array
perf.start();
doublerInsert(smallArray);
let resultsAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


// medium array
perf.start();
doublerInsert(mediumArray);
let resultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let resultsInsert = perf.stop();


// large array
perf.start();
doublerInsert(largeArray);
let resultsAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function sumZero() {
    const addToZero = [1, 2, 5, 3];

    for(i = 0; i < addToZero.length; i++){
        for(j = 0; j < addToZero.length; j++){
            if(addToZero[i] + addToZero[j] === 0){
                return true;
            }
        };
    return false;
    };
};

perf.start();
sumZero();
let resultsAppend = perf.stop();
// append 64.5 μs

perf.start();
sumZero();
let resultsInsert = perf.stop();
// insert 6.1 μs

function hasUniqueChars(str) {
    let uniqueChars = []
    for (let i = 0; i < str.length; i++) {
      uniqueChars.push(str[i])
    }
    return uniqueChars.size === str.length
}

 perf.start();
hasUniqueChars('monday');
let resultsAppend = perf.stop();
// append 66 μs

perf.start();
hasUniqueChars('monday');
let resultsInsert = perf.stop();
// insert 9.2 μs

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

perf.start();
isPangram("The quick brown fox jumps over the lazy dog!");
let resultsAppend = perf.stop();
// append 84.3 μs

perf.start();
isPangram("The quick brown fox jumps over the lazy dog!");
let resultsInsert = perf.stop();
// insert 10.5 μs

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");

 perf.start();
findLongestWord("The quick brown fox jumped over the lazy dog");
let resultsAppend = perf.stop();
// append 50 μs

perf.start();
findLongestWord("The quick brown fox jumped over the lazy dog");
let resultsInsert = perf.stop();
// insert 5.4 μs

console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);