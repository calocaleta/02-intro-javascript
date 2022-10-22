const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 14.3232,
        lng: 34.9293,
    }
};

//console.table(persona);
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);