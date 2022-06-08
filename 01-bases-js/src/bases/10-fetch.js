const apiKey = 'li1LG950zx99xSpg5x4CTTfU15zxK2GP'

//https://api.giphy.com/v1/gifs/random

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    //.then ( response => response.json() )
    .then ( response => response.json() )
    .then ( ({data}) => {
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)

    })
    .catch ( error => console.log(error) )