/* console.log('Inicio')

new Promise( ( resolve, reject )  => {
    
    console.log('Promesa 1')
    resolve('asd')

})
.then( console.log )
.catch( console.log )

console.log('Fin') */

import { getHeroById } from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const hero = getHeroById( id )

            if ( hero ) {
                resolve( hero )
            } else {
                reject( 'No se encontró el heroe' )
            }

        }, 1000);

    });

}

getHeroByIdAsync(3).then( h => console.log(h) ).catch( e => console.log(e) )

    