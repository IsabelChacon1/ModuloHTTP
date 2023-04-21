const http = require('http'); 
//Establecemos la url o IP de nuestro servidor
const hostname = '127.0.0.1';
//Establecemos el puerto de escucha
const port = 3000;
 //Creamos una instancia HTTP con un reques y un response 
const server = http.createServer((req, res) => {
//EL servidor respondera un codigo 200 
res.statusCode = 200;
//EL servidor respondera con un texto plano 
res.setHeader('Content-Type', 'text/plain');
//El servidor respondera el mensaje hola mundo
 res.end('Hola Mundo\n');
});
server.listen(port, hostname, () => { 
console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
 });