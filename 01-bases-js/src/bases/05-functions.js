function saludar ( xyz ) {
    return `Hola ${ xyz }`
}
const saludar = ( xyz ) => {
    return `Hola ${ xyz }`
}

const saludar = ( nombre = 'Peter')

const nombre = 'Tony'

// console.log(saludar(nombre))

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
})

// console.log(getUser())

const heroes = [{
    id: 1,
    name: 'Batman',
}, {
    id: 2,
    name: 'Spiderman',
}]

const { name } = heroes.find((hero) => hero.id === 2)

console.log( name )