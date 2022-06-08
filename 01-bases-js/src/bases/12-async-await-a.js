/* import axios from 'axios'

const apiKey = 'li1LG950zx99xSpg5x4CTTfU15zxK2GP';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
}) */


const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('gg') 
            reject('error')
        }, 1000)
    })
}

const medirTiempo = async() => {

    try {
     
        console.log('Hello World')

        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('adios')

        return 'ok'
        
    } catch (error) {
        throw 'catch en function'
    }

}

medirTiempo()
    .then(valor => console.log(valor))
    .catch(error => console.log(error))