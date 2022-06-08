/* import { owners } from './data/heroes'

console.log(owners)

const [ dc, marvel ] = owners

console.log(dc)
console.log(marvel)

 */

import superHeroes from './../data/heroes'

console.log(superHeroes)

// getHeroById()

const getHeroById = (id) => superHeroes.find(hero => hero.id === id)

// getHeroByOwner()
const getHeroByOwner = (owner) => superHeroes.filter(hero => hero.owner === owner)

export { getHeroById, getHeroByOwner }