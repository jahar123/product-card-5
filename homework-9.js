// Уровень 1
// Задание 2
import { socialComments } from './comments.js';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);

// Задание 3
const kitchenAppliances = ["Тостер", "Блендер", "Чайник", "Микроволновка", "Миксер"];
const hasTeapot = kitchenAppliances.includes("Чайник");
console.log(hasTeapot);

// Задание 4
function reverseArray(arr) {
    return [...arr].reverse();
}

const reversedNumbers = reverseArray(filteredNumbers);
const reversedAppliances = reverseArray(kitchenAppliances);
console.log(reversedNumbers);
console.log(reversedAppliances);

// Уровень 2 
// Задание 6
console.log(socialComments);
console.log(socialComments.length);

// Задание 7
const comComments = socialComments.filter(comment => comment.email.includes(".com"));
console.log("Комментарии с почтой .com:", comComments);

// Задание 8
const updatedComments = socialComments.map(comment => {
   comment.postId = comment.id <= 5 ? 2 : 1;
   return comment;
});

console.log(updatedComments);

// Задание 9
const shortComments = socialComments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log(shortComments);

// Задание 10
const validatedComments = socialComments.map(comment => {
    comment.isInvalid = comment.body.leangth > 180;
    return comment;
});

console.log(validatedComments);

// Уровень 3
// Задание 11
const emailsByReduce = socialComments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emailsByReduce);

const emailsByMap = socialComments.map(comment => comment.email);
console.log(emailsByMap);

// Задание 12
const stringToString = emailsByMap.toString();
console.log(stringToString);

const stringJoin = emailsByMap.join(" | ");
console.log(stringJoin);

