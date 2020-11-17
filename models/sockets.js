class Sockets {

  constructor( io ){
    this.io = io;
    this.socketsEvents();
  }

  socketsEvents(){
    // On connection
    this.io.on('connection', socket => {
      console.log('Cliente conectado: ' + socket.id)

      // Escuchar evento: msg_to_server
      socket.on('msg_to_server', data => {
        console.log(socket.id + ' : ' + data.texto);
        this.io.emit('msg_from_server', data.texto);
      });
    })
  }


}

module.exports = Sockets;