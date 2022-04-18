const emailService = require("../services/emails/emailService");
const multer = require("multer");
const upload = multer({dest: `${__dirname}/../uploads/`});
const router = require("express").Router();

router.get("/", (req, res) => res.render("career"));

// TODO: add file extension based on mime-type
router.post("/application", upload.single("resume"), (req, res) => {
    let application = {
        name: req.body.name,
        birthdate: req.body.birthdate,
        email: req.body.email,
        attachment: req.file
    };

    emailService.sendJobApplicationConfirmation(application);

    res.render("success");
});

module.exports = router;
