// import {heroes} from '../data/heroes';
// import {heroes} from '../data/heroes'

import heroes, {owners} from "../data/heroes";

//console.log(owners);



const getHeroeById = (id) => {
    return heroes.find(item => item.id === id);
}

//console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => {
    return heroes.filter(item => item.owner === owner);
}

//console.log(getHeroesByOwner('Marvel'));

export {getHeroeById, getHeroesByOwner};