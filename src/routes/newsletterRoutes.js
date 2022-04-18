const emailService = require("../services/emails/emailService");
const router = require("express").Router();

router.post("/", (req, res) => {
    emailService.sendNewsletter(req.body.email);

    // TODO: cron/batch job to send the newsletter once a week
    // setInterval(sendMail, week);
});

module.exports = router;
