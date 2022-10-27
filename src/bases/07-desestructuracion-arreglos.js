

const personajes = ['Goku','Vegeta','Trunks'];

const [,p2] = personajes;

/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/
console.log(p2);

const retornaArreglo = () => {
    return['ABC',123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

// Tarea

const xuseState = (valor) => {
    return [valor,()=>{console.log('Hola Mundo');}];
}

const [nombre, setNombre] = xuseState('Goku');

console.log(nombre);
setNombre();