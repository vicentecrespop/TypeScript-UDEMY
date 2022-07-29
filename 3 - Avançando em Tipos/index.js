// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
// numbers = 'teste'
var nomes = ['Vicente', 'Crespo'];
// nomes.push(4)
console.log(nomes);
// 2 - outra sintaxe array
var nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push('teste')
console.log(nums[0]);
// 3 - any
var arr1 = [1, 'teste', true, [], { nome: 'Vicente' }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - tipo de parametro
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma('a', 'b')
// 5 - tipo de retorno de função
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
    // return 5
}
console.log(greeting('Vicente'));
// 6 - funçao anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log('x coordinates: ' + coord.x);
    console.log('y coordinates ' + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates(1, 1)
var pessoaObj = { nome: 'Vicente', surname: 'Crespo' };
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6)
// 9 - validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem ?");
}
console.log(advancedGreeting('Vicente', 'Crespo'));
console.log(advancedGreeting('Vicente'));
// 10 - union types
function shwoBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
shwoBalance(100);
shwoBalance('500');
// shwoBalance(true)
var arr2 = [1, 'teste', true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('200');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: 'Vicente', age: 20 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
var test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('left');
// showDirection('top')
// 16 - non null assertion operators
var p = document.getElementById('some-p');
console.log(p.innerText);
// 17 - bigint
var n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - symbol
var symbolA = Symbol('a');
var symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
