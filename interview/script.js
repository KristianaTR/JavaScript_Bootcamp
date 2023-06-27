const myarr = ['a', 'b', 'a', 'c', 'c', 'b', 'b'];

let arrayA = myarr.filter((letter) => letter === 'a');
let arrayB = myarr.filter((letter) => letter === 'b');
let arrayC = myarr.filter((letter) => letter === 'c');

let countA = arrayA.length;
let countB = arrayB.length;
let countC = arrayC.length;

let maxValue = Math.max(countA, countB, countC);

function mostUsedLetter () {
    if (maxValue === countA) {
        return arrayA[0];
    }
    else if (maxValue === countB) {
        return arrayB[0];
    }
    else if (maxValue === countC) {
        return arrayC[0];
    }

}

console.log(mostUsedLetter());

// googled version
let counter = 0;
let frequentValue = 1;
let FrequentLetter;
for (let i = 0; i < myarr.length; i++) {
    for (let j = i; j < myarr.length; j++) {
        if(myarr[i] == myarr[j]) {
            counter++;
        }
        if(frequentValue < counter) {
            frequentValue = counter;
            FrequentLetter = myarr[i];
        }
    }
    counter = 0;
    
}

console.log(FrequentLetter);