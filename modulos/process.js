// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
});

process.on('uncaughtException', (err, origen) => {
    console.error('valla se nos ha olvidado capturar el error');
    console.error(err);
});

functionQueNoExiste();