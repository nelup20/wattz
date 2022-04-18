
const NODE_MAILER_USER = process.env.NODE_MAILER_USER;

module.exports = {
    nodeMailerConfig: {
        host: process.env.NODE_MAILER_HOST,
        port: process.env.NODE_MAILER_PORT,
        secure: false,
        auth: {
            user: NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASSWORD
        }
    }
}
