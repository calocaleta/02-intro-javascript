//Funciones en JS
const saludar= function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
        uid: 'ABC123',
        username: 'calocaleta',
    })

//saludar = 20;

//console.log(saludar('Goku'));
//console.log(saludar);
//console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4());
console.log (getUser());

const getUsuarioActivo = (nombre) =>
    ({  uid: 'ABC567',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);