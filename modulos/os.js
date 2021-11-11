const os = require('os');

// // dice que sistema operativo tengo: x64
// console.log(os.arch());

// // dice que plataforma estoy usando
// console.log(os.platform());

// // dice la caracteristicas del sistema
// console.log(os.cpus());

// //errores y señales del sistema
// console.log(os.constants);

// // info sobre la memoria del sistema
// console.log(os.freemem);

// //acceder al espacio en memoria
// const SIZE = 1024;
// function kb(bytes) { return bytes / SIZE }
// function mb(bytes) { return kb(bytes) / SIZE }
// function gb(bytes) { return mb(bytes) / SIZE }

// console.log(os.freemem());
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// // memoria total
// console.log(gb(os.totalmem()));

// muestra la carpeta raiz
console.log(os.homedir());

//carpeta temporal
console.log(os.tmpdir());

// acceder al host de la maquina
console.log(os.hostname());

// interfaz de red
console.log(os.networkInterfaces());


