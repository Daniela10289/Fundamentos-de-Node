const fs = require('fs');
const stream = require('stream');
const util = require('util');


let readableStream = fs.createWriteStream(__dirname + '/input.txt');
readableStream.setDefaultEncoding('UTF8');
// readableStream.on('data', function (chunk) {
//     console.log(chunk);
// }) 

// en archivos pequeños no es necesario usar un stream 

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// CONVIERTE LAS LETRAS DEL TXT A MAYUSCULA
// PERO EN ESTE CASO, NO FUNCIONA

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);