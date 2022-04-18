const Ticket = require("../../models/Ticket")

// TODO: not really a DTO mapper... maybe use middleware to convert the request body to a DTO?
const ticketMapper = {
    toModel: request => {
        // TODO: UUID or Auto-incrementing sequence
        let id = "#" + (Math.floor((Math.random() * 90000) + 10000));

        return new Ticket(
            {
                question: request.body.question,
                email: request.body.email,
                name: request.body.name,
                description: request.body.description,
                id: id,
                solved: false
            }
        );
    }
}

module.exports = ticketMapper;
