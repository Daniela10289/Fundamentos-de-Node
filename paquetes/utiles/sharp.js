// npm i sharp

const sharp = require('sharp');

// utilidades para modificar imagenes
sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png')