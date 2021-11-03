function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla ...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios,', nombre)
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callbakc) {
    if (veces > 0 ) {
        hablar(function () {
            conversacion(nombre, --veces, callbakc);
        });
    }else {
        adios('Daniela', callbakc);
    }
    
} 

// ---


console.log('Iniciando proceso...');
hola('Daniela ', function (nombre) {
    conversacion(nombre, 2, function () {
        console.log('Proceso terminado!')
    });
});

// console.log('Iniciando proceso...');
// hola('Daniela ', function () {
//     hablar(function () {
//         hablar(function () {  
//             adios('Daniela', function() {
//                 console.log('Terminando proceso...');
//             });
//         });
//     });    
// });
