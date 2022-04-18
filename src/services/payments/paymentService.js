const paypal = require("paypal-rest-sdk");
const {paypalConfig, paypalPaymentData} = require("./paymentConfig");

paypal.configure(paypalConfig);

const paymentService = {
    payWithPaypal: (product, price, res) => {
        paypal.payment.create(paypalPaymentData(product, price), (error, payment) => {
            if (error) throw error;

            res.send(payment.links.find(link => link.rel === "approval_url").href);
        });
    }
}

module.exports = paymentService;
