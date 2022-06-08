import axios from 'axios'

const apiKey = 'li1LG950zx99xSpg5x4CTTfU15zxK2GP';
// https://api.giphy.com/v1/gifs/random?api_key=

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

export default giphyApi

/* giphyApi.get('/random')
    .then( respuesta => {
        const { data } = respuesta.data
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
    
    }) */