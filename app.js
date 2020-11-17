const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();
// // Import
// const express = require('express');
// const socketio = require('socket.io');
// const path = require('path');

// // Seteo de Express
// const app = express( );
// const pathPublic = path.join(__dirname,'public')
// app.use( express.static( pathPublic ) );

// // Servidor de Express escuchando
// const serverExpress = app.listen( 8000, ( ) => {
//   console.log('Server listening on PORT: 8000')
// });

// // Servidor socket sobre el servidor Express
// const io = socketio( serverExpress );

// // Servidor de Socket esuchando conexiones de Clientes
// io.on('connection', socket => {
//   console.log('Cliente conectado')

//   socket.on('msg_to_server', data => {
//     console.log(socket.id + ' : ' + data.texto);

//     io.emit('msg_from_server', data.texto);
//   });
// })