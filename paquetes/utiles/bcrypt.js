// npm i bcrypt
const bcrypt = require('bcrypt');

const password = '123Segura!';

// Encripta la constraseña
bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash);

    // si en el parametro password llega la contraseña correcta dira true
    bcrypt.compare(password, hash, function(err, res) {
        // console.log(err)
        console.log(res)
    })
}); 


