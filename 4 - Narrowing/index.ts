// 1 - type guard

function sum(a: number | string, b: number | string) {

    if(typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === 'number' && typeof b === 'number') {
        console.log(a + b)
    } else {
        console.log('Impossivel realizar a soma!')
    }
}

sum('4', '46')
sum(2, 1.5)
sum('5', 23)

// 2 - checando se valor existe

function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if(operation === 'sum') {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === 'multiply') {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log('Por favor, defina uma operação')
    }
}

operations([1, 2, 3])
operations([1, 2, 3], 'sum')
operations([1, 2, 3], 'multiply')

// 3 - instance of

class User {
    name

    constructor(name: string)
 {
    this.name = name
 }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log(jhon)
console.log(paul)

function userGreting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if(user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreting(jhon)
userGreting(paul)

// 4 - operador in

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor Alemão')

function showDogDetails(dog: Dog) {

    if('breed' in dog) {
        console.log(`O cachorro é de raça ${dog.breed}`)
    } else {
        console.log('O cachorro é um SRD')
    }
}

showDogDetails(turca)
showDogDetails(bob)

// 5 - tarefa

type Review = number | boolean

function recebeReviews(review: Review) {
    if(typeof review === 'number' && review >= 1 && review <= 5) {
        console.log(`A review foi de ${review.toFixed(0)} estrelas`)
    } else if(!review) {
        console.log('Ainda não foi enviada nenhuma review')
    }
}

recebeReviews(4)
recebeReviews(3.2)
recebeReviews(false)
recebeReviews(6)
recebeReviews(true)