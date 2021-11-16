// npm install moment
const moment = require('moment');

// se crearia la fecha de hoy
let ahora = moment();

console.log(ahora.format('YYYY/MM/DD - HH:mm'));