
module.exports = {
    paypalConfig: {
        'mode': 'sandbox',
        'client_id': process.env.PAYPAL_ID,
        'client_secret': process.env.PAYPAL_SECRET
    },

    paypalPaymentData: (product, price) => {
        return {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/",
                "cancel_url": "http://localhost:3000/products"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": product,
                        "sku": "electricity package",
                        "price": price,
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": price
                },
                "description": "Electricity package provided by Wattz LLC"
            }]
        };
    }
}
