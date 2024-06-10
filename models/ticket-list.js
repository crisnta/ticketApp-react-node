const Ticket = require('./ticket')

class TicketList {
    constructor(){
        this.ultimoNumero = 0
        this.pendientes = []
        this.asignados = []
    }

    get siguienteNumero() {
        this.ultimoNumero ++
        return this.ultimoNumero
    }
    // 3 ticket que se veran en las tarjetas y 10 en el historioal
    get ultimos13(){
        return this.asignados.slice(0,13)
    }

    crearTicket(){
        const nuevoTicket = new Ticket( this.siguienteNumero)
        this.pendientes.push(nuevoTicket)
        return nuevoTicket
    }

    asignarTicket( ejecutivo, escritorio){
        if ( this.pendientes.length === 0) return null

        const siguienteTicket = this.pendientes.shift()
        siguienteTicket.ejecutivo = ejecutivo
        siguienteTicket.escritorio = escritorio

        this.asignados.unshift(siguienteTicket)

        return siguienteTicket

    }

}
module.exports = TicketList