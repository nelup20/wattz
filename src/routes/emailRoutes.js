const emailService = require("../services/emails/emailService");

const router = require("express").Router();

router.post("/", (req, res) => {
    const {name, email, subject, message} = req.body;

    emailService.sendGenericEmail(email, subject, name, message);
});

module.exports = router;
