function hola(nombre) {
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
            // resolve();
            reject ('Hay un error!');
        }, 1000);
    });
}


// En las promesas cuando hay un then debe haber un catch

console.log('Iniciando el proceso...');
hola('Daniela')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error:');
        console.error(error);
    });

