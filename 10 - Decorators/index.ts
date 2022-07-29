// 1 - exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator!')

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log('Executando o decorator')
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log('terminando execução do metodo')
    }
}

const myObj = new myClass()

myObj.testing()

// 2 - multiplos decorators
function a() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando decorator a')
    }
}

function b() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando decorator b')
    }
}

function c() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('Executando decorator c')
    }
}

class MultipleDecorators {
    @c()
    @a()
    @b()
    testing() {
        console.log('Terminando a execução')
    }
}

const multiple = new MultipleDecorators()

multiple.testing()

// 3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor.name)
    if(constructor.name === 'User') {
        console.log('Criando usuário!')
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const vicente = new User('Vicente')

console.log(vicente)

// 4 - decorator de metodo
function enumerable(value: boolean) {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}

class Machine { 
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine('Trator')

console.log(trator)

console.log(trator.showName())

// 5 - accessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `O nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `A idade do monstro: ${this.age}`
    }
}

const charmander = new Monster('Charmander', 10)

console.log(charmander)

// 6 - property decorator
// 1 - 00001
function formatNumber() {
    return function(target: any, propertKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, '0')
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const item = new ID('1')

console.log(item)

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id 

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(1)

const pen = new Pen(45)

console.log(newBook)
console.log(newBook.createdAt)

// 8 exemplo real com method decorator
function checkIfUserPosted() {
    return function(
        target: any,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value

        descriptor.value = function(...args: any[]) {
            if(args[1] === true) {
                console.log('Usuario já postou!')
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}

class Post { 
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post do usuario: ${content}`)
    }
}

const newPost = new Post()

newPost.post('Meu primeiro post!', newPost.alreadyPosted)

newPost.post('Meu segundo post!', newPost.alreadyPosted)

newPost.post('Meu terceiro post!', newPost.alreadyPosted)

// 9 - exemplo real property decorator
function Max(limit: number) {
    return function(target: any, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres`)
            } else {
                value = newVal
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }

}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username
    }
}

const pedro = new Admin('pedrousername12345')
const lee = new Admin('Lee')
console.log(lee.username)