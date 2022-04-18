const mongoose = require("mongoose");
const Ticket = require("../models/Ticket");
const {databaseConfig} = require("./repositoryConfig");

mongoose.connect(databaseConfig.DB_URL);

const ticketRepository = {
    save: ticket => {
        ticket.save();
    },

    findById: ticketId => {
        return Ticket.findById(ticketId);
    }
};

module.exports = ticketRepository;
