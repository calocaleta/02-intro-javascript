import {getHeroeById} from "../bases/08-imp-exp"
/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
       
       const heroe = getHeroeById(2);
       console.log(heroe);
       //console.log('2 segundos despues'); 
       resolve(heroe);
       //reject('No se pudo encontrar el héroe')
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Then de la promesa');
    console.log('heroe',heroe);
})
.catch(err => console.warn(err));

*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           
           const heroe = getHeroeById(id);
           console.log(heroe);

            if (heroe===undefined) {
                reject('No se pudo encontrar el héroe')
            }
            else{
                resolve(heroe);
            }

        }, 1000);
    });
    
}

getHeroeByIdAsync(3)
    .then(console.log) 
    .catch(console.warn)
    //.then(heroe => console.log('Heroe',heroe)) 
    //.catch(err => console.warn(err))