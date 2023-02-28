var path = require('path');
let nombre = process.argv[2];

if(!nombre){
    let nameApp = process.argv[1].split(path.sep).pop();
    console.error('falta un argumento. ejempplo: %s NOMBRE', nameApp);
    process.exit(1);
}
console.log('hola', nombre);