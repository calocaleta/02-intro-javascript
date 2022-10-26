//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};



const retornaPersona = ({nombre,edad,rango='Capitán'}) => {
    
    console.log(nombre,edad,rango);
}

retornaPersona(persona);

/*
console.log(nombre);
console.log(edad);
console.log(clave);
*/

/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/