const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']
const [ g, v, t, goten = 'No tiene valor' ] = characters

const returnArray = ([ letters, numbers]) => {
    return [ letters, numbers]
}

const [ letters, numbers ] = returnArray(['abc', 123])
console.log(letters,numbers)