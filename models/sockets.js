const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        //Crear la instancia del ticketList
        this.ticketList = new TicketList()

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('Cliente conectado')

            socket.on('solicitar-ticket', (data, callback ) => {
                const nuevoTicket = this.ticketList.crearTicket()
                callback(nuevoTicket)
            })

            socket.on('siguiente-ticket-trabajar', ( usuario, callback ) => {
                const ticketAsignado = this.ticketList.asignarTicket(usuario.ejecutivo, usuario.escritorio)
                callback(ticketAsignado)

                this.io.emit('tickets-asignados', this.ticketList.ultimos13)
            })
        });
    }


}


module.exports = Sockets;