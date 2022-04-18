
module.exports = {
    genericEmail: (customerEmail, subject, customerName, customerMessage) => {
        return {
            from: "Wattz.com",
            to: customerEmail,
            subject: "Re:  " + subject,
            html: `<h2>Dear ${customerName}</h2>
                   <div> We are very sorry to hear you are having this problem.
                   <br> Our team will try to solve this issue as soon as possible.
                   <br> If you have any more questions you can check out our FAQ section.
                   </div>
                   <div>Thank you for understanding, and we hope you have a wonderful day.</div>
                   <h3>THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLOY TO THIS EMAIL.</h3>
                   <hr>
                   <h3>Your message: </h3>
                   ${customerMessage}
                  `,
        };
    },

    newTicketEmail: (ticket) => {
        return {
            from: "Wattz.com",
            to: ticket.email,
            subject: "Support ticket: " + ticket.id,
            html: `<h4>Dear ${ticket.name},</h4>
                   <div>We are very sorry to hear you have this problem.</div>
                   <div>Our staff will answer your questions and fix any problems that you may have as soon as possible.</div>
                   <hr>
                   <h3>THIS IS AN AUTOMATIC MESSAGE, PLEASE DO NOT REPLY TO THIS EMAIL.</h3>`
        };
    },

    newsletterEmail: customerEmail => {
        return {
            from: "Wattz.com",
            to: customerEmail,
            subject: "Weekly newsletter !",
            html: `<h4>Dear Customer,</h4>
                   <div>Thank you for subscribing to our weekly newsletter.</div>
                   <div>Attached you will find this week's edition.</div>
                   <div>Enjoy!</div>`,
            attachments: [{
                filename: "newsletter.pdf",
                path: `${__dirname}/attachments/newsletter.pdf`
            }]
        }
    },

    jobApplicationEmail: (application) => {
        return {
            from: "Wattz.com",
            to: application.email,
            subject: "Job Application",
            html: `<h3>Hello ${application.name},</h3>
                   <div>We have received your application and will be reviewing it shortly.</div>
                   <div>Please check your email again for a reply within a few days.</div>
                   <div>Thank you for your application.</div>
                   <hr>
                   <h3>Your application: </h3>
                   <div>Name: ${application.name}</div>
                   <div>Birth date: ${application.birthdate}</div>
                   <div>Email: ${application.email}</div>
                   <div>Resume: ${application.attachment.originalname}</div>`,
            attachments: [{
                filename: application.attachment.originalname,
                path: application.attachment.path
            }]
        };
    }
}
