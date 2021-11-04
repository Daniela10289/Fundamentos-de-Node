const fs = require('fs'); // viene instalado por defecto en el cor de node

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
       cb(data.toString()); // cb significa callback
    });
}

function escribir (ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.error('Se ha escrito correctamente!', err);
        }
    }); 
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log);