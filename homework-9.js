// Уровень 1
// Задание 2
import { socialComments } from './comments.js';

const nambers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNamber = nambers.filter(num => num >= 5);
console.log(filteredNamber);

// Задание 3
const kitchenAppliances = ["Тостер", "Блендер", "Чайник", "Микроволновка", "Миксер"];
const hasTeapot = kitchenAppliances.includes("Чайник");
console.log(hasTeapot);

// Задание 4
function reverseArray(arr) {
    return [...arr].reverse();
}

const reversedNambers = reverseArray(filteredNamber);
const reversedAppliances = reverseArray(kitchenAppliances);
console.log(reversedNambers);
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
    if (comment.id <= 5) {
        comment.postId = 2;
    }
    else {
        comment.postId = 1;
    }
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
const checkedComments = socialComments.map(comment => {
    if (comment.body.length > 180) {
        comment.isInvalid = true;
    }
    else {
        comment.isInvalid = false;
    }
    return comment;
});

console.log(checkedComments);

// Уровень 3
// Задание 11
const emailsReduce = socialComments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emailsReduce);

const emailsMap = socialComments.map(comment => comment.email);
console.log(emailsMap);

// Задание 12
const stringToString = emailsMap.toString();
console.log(stringToString);

const stringJoin = emailsMap.join(" | ");
console.log(stringJoin);

