const person = {
    neme: 'Tony',
    age: 45,
    codeName: 'Iron Man'
}

const { age, name, codeName, power = 'No tiene poder' } = person

/* console.log(age)
console.log(name)
console.log(codeNmae)
console.log(power); */

const createHero = ( {name, age, codeName, power} ) => ({
    
    id: '0001',
    name,
    age,
    codeName,
    power

})

console.log(createHero(person))