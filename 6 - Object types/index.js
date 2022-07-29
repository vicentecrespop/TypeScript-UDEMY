"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log('O produto está disponivel.');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: 'Tenis', price: 409.99, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'matheus@email.com', role: 'Admin' };
const u2 = { email: 'joao@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const vicente = {
    name: 'Vicente',
    age: 20
};
console.log(vicente);
const superHomem = {
    name: 'Super-Homen',
    age: 50,
    superpowers: ['voar']
};
console.log(superHomem);
const arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonlyarray
let myArray = ['Maça', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão'
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5]
console.log(myNumberArray);
const anotherUser = ['Vicente', 20];
console.log(anotherUser[0]);
anotherUser[0] = 'Vicente Crespo';
console.log(anotherUser[0]);
// anotherUser[1] = 'teste'
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // number[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
