let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}

const positiveNum = arr.filter(function(el){
    return el > 0
})

console.log('Сума позитивних елементів: ' + sum);
console.log('Кількість позитивних елементів: ' + positiveNum.length);

// Визначити кількість негативних елементів.

const negativeNum = arr.filter(function(el){
    return el < 0
}).length

console.log('Кількість негативних елементів: ' + negativeNum);


// Знайти кількість непарних позитивних елементів.

const odd = positiveNum.filter(function(el){
    return el % 2 === 1
})

console.log('Кількість непарних позитивних елементів: ' + odd.length);

// Знайти суму непарних позитивних елементів.

let oddSum = 0;

for (let i = 0; i < odd.length; i++) {
    oddSum += odd[i];
}
console.log('Сума непарних позитивних елементів: ' + oddSum);

// Знайти кількість парних позитивних елементів.

const even = positiveNum.filter(function(el){
    return el % 2 === 0
})

console.log('Кількість парних позитивних елементів: ' + even.length);

// Знайти суму парних позитивних елементів.

let evenSum = 0;

for (let i = 0; i < even.length; i++) {
        evenSum += even[i];
}
console.log('Сума парних позитивних елементів: ' + evenSum);

// Знайти добуток позитивних елементів.

let mult = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        mult *= arr[i];
    }
}
console.log('Добуток позитивних елементів: ' + mult);

// Знайти мінімальний елемент масиву та його порядковий номер.

let minVal = arr[0];
let minNum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
        minVal = arr[i];
        minNum = i + 1;
    }
}

console.log('Мінімальний елемент масиву: ' + minVal);
console.log('Порядковий номер мінімального елементу масиву: ' + minNum);

// Знайти максимальний елемент масиву та його порядковий номер.
// Знайти найбільший серед елементів масиву, остальні обнулити.

let maxVal = arr[0];
let maxNum = 0;
let maxi = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
        maxVal = arr[i];
        maxNum = i + 1;
        arr[maxi] = 0;
        maxi = i;
    }
    else {
        arr[i] = 0;
      }
}

console.log('Максимальний елемент масиву: ' + maxVal);
console.log('Порядковий номер максимального елементу масиву: ' + maxNum);
console.log(arr)





