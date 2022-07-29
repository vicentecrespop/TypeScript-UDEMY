// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers)

// numbers = 'teste'

const nomes: string[] = ['Vicente', 'Crespo']

// nomes.push(4)

console.log(nomes)

// 2 - outra sintaxe array

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push('teste')

console.log(nums[0])

// 3 - any

const arr1: any = [1, 'teste', true, [], {nome: 'Vicente'}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - tipo de parametro

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// soma('a', 'b')

// 5 - tipo de retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
    // return 5
}

console.log(greeting('Vicente'))

// 6 - funçao anonima

setTimeout(function() {

    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)

}, 2000)

// 7 - tipos de objeto

function passCoordinates(coord: {x: number, y: number}) {
    console.log('x coordinates: ' + coord.x)
    console.log('y coordinates ' + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// passCoordinates(1, 1)

const pessoaObj: {nome: string, surname: string} = {nome: 'Vicente', surname: 'Crespo'}

// 8 - propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log('A: ' + a)
    console.log('B: ' + b)
    if(c) {
        console.log('C: ' + c)
    }
}
 
showNumbers(1, 2, 3)
showNumbers(4, 5)
// showNumbers(6)

// 9 - validação de props opcionais

function advancedGreeting(firstName: string, lastName?: string){

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem ?`

}

console.log(advancedGreeting('Vicente', 'Crespo'))
console.log(advancedGreeting('Vicente'))

// 10 - union types

function shwoBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

shwoBalance(100)
shwoBalance('500')
// shwoBalance(true)

const arr2: Array<number | string | boolean> = [1, 'teste', true]

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
    if(typeof role === 'boolean') {
        return 'Usuário não aprovado!'
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))

// 12 - type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId('200')

// 13 - introdução as interfaces

interface Point {
    x: number,
    y: number,
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - diferença entre alias e interface

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'Vicente', age: 20}

console.log(somePerson)

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types

let test: 'testando'

test = 'testando'

console.log(test)

function showDirection(direction: 'left' | 'right' | 'center') {
    console.log(`A direção é: ${direction}`)
}

showDirection('left')

// showDirection('top')

// 16 - non null assertion operators

const p = document.getElementById('some-p')

console.log(p!.innerText)

// 17 - bigint

let n: bigint

// n = 1

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol

let symbolA:symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
