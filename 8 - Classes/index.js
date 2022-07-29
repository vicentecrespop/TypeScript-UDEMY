"use strict";
// 1 - campos em classe
class User {
}
const vicente = new User();
console.log(vicente);
vicente.name = 'Vicente';
// vicente.job = 'Programador'
console.log(vicente);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 22);
console.log(joao);
// const pedro = new NewUser(12, 12)
// 3 - propriedade readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca');
console.log(fusca);
console.log(fusca.wheels);
fusca.name = 'Fusca Turbinado';
// fusca.wheels = 5
// 4 - hereança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey stranger!');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 500);
volvo.showDetails();
scania.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const vicenteCrespo = new Person('Vicente', 'Crespo');
console.log(vicenteCrespo.name);
console.log(vicenteCrespo.fullName);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('Coordenada X preenchida com sucesso!');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Coordenada Y preenchida com sucesso!');
    }
    get getCoords() {
        return `X: ${this.x}, Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é ${this.title}`;
    }
}
const newPost = new TestingInterface('Meu Post');
console.log(newPost.itemTitle());
// 10 - override de métodos
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando alguma coisa');
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - visibilidade public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - visibilidade protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este método é protegido');
    }
}
class F extends E {
    showX() {
        console.log(this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - visibilidade private
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Metodo privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
pObj.showPrivateMethod();
// class TestingPrivate extends PrivateClass {
//     myMethod() {
//         this.privateMethod()
//     }
// }
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático!');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, 'tenis');
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - parameters properties
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Quantidade: ${this.qty}`;
    }
    get showPrice() {
        return `Preço: ${this.price}`;
    }
}
const newShirt = new ParametersProperties('Camisa', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Jones');
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const josias = new AbstractExample('Josias');
console.log(josias.name);
josias.showName();
// 19 - relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
