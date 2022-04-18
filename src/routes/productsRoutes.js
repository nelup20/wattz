const paymentService = require("../services/payments/paymentService");
const router = require("express").Router();

router.get("/", (req, res) => res.render("products"));

router.post("/buy", (req, res) => {
    try {
        // TODO: shouldn't pass response obj, switch to async/await?
        paymentService.payWithPaypal(req.body.product, req.body.price, res);
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;
