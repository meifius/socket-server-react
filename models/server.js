// Import
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

// Classes
class Server {

  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer( this.app );
    this.io = socketio( this.server, { /*configuraciones*/ } );

    // Configuracion de sockets
  }

  middlewares(){
    this.app.use( express.static( path.resolve(__dirname,'../public') ) );
  }

  configurarSocket(){
    new Sockets( this.io );
  }

  execute() {

    // Inicializar middlewares
    this.middlewares();

    // Configuracion Sockets
    this.configurarSocket();

    // Inicializar Server
    this.server.listen( this.port, () => {
      console.log(`Server listening on PORT ${this.port}`);
    });
  }

}

// Export
module.exports = Server;