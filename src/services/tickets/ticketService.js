const ticketRepository = require("../../repositories/ticketRepository");

const ticketService = {
    saveTicket: ticket => {
        ticketRepository.save(ticket)
    },

    findById: ticketId => {
        return ticketRepository.findById(ticketId);
    }
}

module.exports = ticketService;
