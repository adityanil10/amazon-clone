const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51MAepASHwHsw4yZ06p4JuXuzoGdaT0m84yVGFj858JK8F91g8gNIHqMhtshVc3IcYg7zS5fCOqvljkbLeahlrlnl006ROPOxoX')

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    //Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://127.0.0.1:5001/clone-ca532/us-central1/api