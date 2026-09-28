// 1 Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

var numbers = [1, 2, 3];

numbers[2] = [10];

console.log(numbers)

// 2 Створити масив із трьох рядків. Додати до масиву ще одну рядків.

var numirochki = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

numirochki[3] = [10, 11, 12];

console.log(numirochki)

// 3 Створити скрипт який поверне суму всіх чисел в масиві.

var summm = [4, 5, 3, 6];
let sum = 0;

for (const num of summm){
    sum += num;
}

console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

var masive = [3, 5, 7, 8, 1];
let sum1 = 0;

for (let i = 0; i < masive.length; i++) {
    console.log(masive[i])
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

var strokes = ["Hi", "How are you", "Fine", "Thank you", "good bye"];

for (let i = 0; i < strokes.length; i++){
    if(strokes[i].length > 5) {
        console.log(strokes[i])
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

var toten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = 0;

for (let i = 1; i < toten.length; i++){
    if(toten[i] > max){
        max = toten[i];
    }
}

console.log(max)

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

var topaar = [24, 12, 23, 12, 56, 78, 29, 54, 67, 27];
let pair = 0;

for (let i = 0; i < topaar.length; i++){
    if(topaar[i] % 2 === 0) {
        console.log(topaar[i])
    }
}