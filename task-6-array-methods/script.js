initialArray = [
    {id: 452, city: 'London'},
    {id: 862, city: 'Dublin'},
    {id: 125, city: 'Riga'},
    {id: 759, city: 'Vilnius'},
    {id: 789, city: 'Tallinn'},
    {id: 46, city: 'Berlin'},
    {id: 333, city: 'Oslo'},
];

//--1-- .map()
const mappedArray = [];
for (let i = 0; i < initialArray.length; i++) {
    mappedArray[mappedArray.length] = initialArray[i].id * 2;
}
console.log(mappedArray);



//--2-- .filter()
const filteredArray = [];
for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i].id > 500 && initialArray[i].city) {
        filteredArray[filteredArray.length] = initialArray[i];
    }
}
// initialArray.forEach(element => {
//     if (element.id > 500 && element.city) {
//         filteredArray.push(element)
//     }
// });
console.log(filteredArray);

//--3-- .every()
let conclusionEvery;
initialArray.forEach(element => {
    if (element.id > 40 && element.city.length >= 4) {
        conclusionEvery = true;
    } else {
        conclusionEvery = false;
    }
});

console.log(conclusionEvery);

//--4-- .some()
let matchFound = false;
initialArray.forEach(element => {
    if (element.id < 500 && element.city.length <= 4 && !matchFound) {
        matchFound = true;
    }
});

console.log(matchFound);

//--5-- .reduce()
let initialValue = initialArray[0].id;
let sumOfIds;
initialArray.forEach(element => {
   let sum = initialValue + element.id;
   initialValue = sum;
   sumOfIds = sum;
})

console.log(sumOfIds);

//--6-- .sort()
arrayToSort = [2143, 123, 35, 577, 6568, 67, 0, 14, 60];

// option using while loop
function sortArrayWithWhileLoop (array) {
    var sorted = false;
    while (!sorted) {
        sorted = true;
        
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) { //2143 > 123 -> true
                sorted = false;          // sorted = flase
                let temp = array[i];    // let temp = 2143
                array[i] = array[i + 1]; // [123, ...]
                array[i + 1] = temp;    // [123, 2143, ...]
                console.log(array);
            }
        }
    }
    return array;
}

//option using only for loop
function sortArrayWithForLoop (array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {  // 123 < 2143 -> true
                let temp = array[i];    // let temp = 123
                array[i] = array[j];    // [..., 2143, ...]
                array[j] = temp;        // [123, 2143, ...]
            }
        }
        
    }
    return array;
}

//Input: [2143, 123, 35, 577, 6568, 67, 0, 14, 60]
sortArrayWithWhileLoop (arrayToSort);
sortArrayWithForLoop(arrayToSort);

console.log("🚀 ~ file: script.js:88 ~ sortArray (arrayToSort);:", sortArrayWithWhileLoop(arrayToSort)); 
//Output: [0, 14, 35, 60, 67, 123, 577, 2143, 6568]
console.log("🚀 ~ file: script.js:105 ~ sortArrayWithForLoop(arrayToSort):", sortArrayWithForLoop(arrayToSort)); 
//Output: [0, 14, 35, 60, 67, 123, 577, 2143, 6568]
