let suma = 0;
console.time('todo'); 
console.time('bucle');

for (let i = 0; i < 1000000; i++) {
    suma += 1;
}

console.timeEnd('bucle'); 

console.time('asincrono');
console.log('Empieza proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');         
    });


function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso!');
            resolve();
        })
    })
}

console.timeEnd('todo'); 

