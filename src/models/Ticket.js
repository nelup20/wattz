const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    question: String,
    email: String,
    name: String,
    description: String,
    id: String,
    solved: Boolean
});

module.exports = mongoose.model("ticket", ticketSchema);
