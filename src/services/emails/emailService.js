const nodemailer = require("nodemailer");
const {nodeMailerConfig} = require("./emailConfig");
const {genericEmail, newsletterEmail, jobApplicationEmail, newTicketEmail} = require("./emailTemplates");

const transporter = nodemailer.createTransport(nodeMailerConfig);

const sendEmail = (data, callback) => transporter.sendMail(data, callback);

// TODO: callbackFn + error handling
const emailService = {
    sendGenericEmail: (customerEmail, subject, customerName, customerMessage) => {
        sendEmail(genericEmail(customerEmail, subject, customerName, customerMessage));
    },

    sendNewsletter: customerEmail => {
        sendEmail(newsletterEmail(customerEmail));
    },

    // TODO: remove attachment or save to DB
    sendJobApplicationConfirmation: application => {
        sendEmail(jobApplicationEmail(application));
    },

    sendNewTicketEmail: (ticket, res) => {
        sendEmail(
            newTicketEmail(ticket),
            (error, success) => { if (error) throw error; }
        )
    }
}

module.exports = emailService;
