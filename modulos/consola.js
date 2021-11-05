var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 1,
        b: 'otra'
    }
]

// // Muestra los resultados en una tabla en la consola
console.table(tabla); 

// console.group sirve para validar entre funciones
function function1() {
    console.group('Funcion 1:');
    console.log('Esto es de la función 1');
    console.log('Esto tambien');
    function2();
    console.groupEnd('Funcion 1:');
}

function function2() {
    console.group('Funcion 2');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('Funcion 2');
}

console.log('Empezamos');
function1();

// de esta forma se puede saber cuantas veces se pasa por un buqle
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');


