const ticketService = require("../services/tickets/ticketService");
const emailService = require("../services/emails/emailService");
const ticketMapper = require("./mappers/ticketMapper");
const router = require("express").Router();

router.get("/submit", (req, res) => res.render("submitTicket"));

router.get("/status", (req, res) => res.render("statusTicket"));

router.post("/submit", (req, res) => {
    const ticket = ticketMapper.toModel(req);

    try {
        ticketService.saveTicket(ticket);
        emailService.sendNewTicketEmail(ticket);
    } catch (e) {
        res.redirect("/ticket/submit");
    }

    res.render("submitSuccess", {
        id: ticket.id,
        name: ticket.name
    });
});

router.post("/status", (req, res) => {
    const ticket = ticketService.findById(req.body.ticketNumber);

    res.send(ticket);
});

module.exports = router;
