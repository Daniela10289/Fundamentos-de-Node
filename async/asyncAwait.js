async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise ((resolve, reject ) => {        
        setTimeout(function () {
            console.log('Bla bla bla bla ...');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre, otroCallback) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve();
            // reject ('Hay un error!');
        }, 1000);
    });
}

async function main () {
    let nombre = await hola('Daniela');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina proceso');
}

console.log('Empieza proceso!');
main();
