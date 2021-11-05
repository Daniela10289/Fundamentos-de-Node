function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function serompeAsyncrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z;   
        }catch (err) {
            console.log('Error en se rompe asyncrona!');
            cb(err);
        }
    });
}


try {
    serompeAsyncrona(function (err) {
        console.log(err.message);
    });  
} catch(err) {
    console.error('Vaya, algo salio mal...');
    console.error(err.message);
}
