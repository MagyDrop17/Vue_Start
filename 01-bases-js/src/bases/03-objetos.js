const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: '12345',
        lat: 40.7128,
        lng: -74.0060
    }
}

const persona2 = {...persona}

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
