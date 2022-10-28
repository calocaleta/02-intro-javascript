/*
const getImagenPromesa  = () => {
    return new Promise((resolve,reject) => {
        resolve('https://asdasd.com')
    })
}

getImagenPromesa().then(console.log);
*/

const getImagen = async () => {
    try{
        const apiKey = 'C374PkJlV4TG0IlQCftsW619Mbegl91F';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(error){
        console.warn(error);
    }

}

getImagen();
