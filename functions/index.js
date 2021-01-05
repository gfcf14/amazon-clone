const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I6HA3HlFlM8FgiaRIb8PEaw4Abim3fHhaLP7FfBn4bDbJnZW0f3afuxDgxeB4lh4iuMxqL7mfqRFcAhs2j4QmVi0049NrOWkh');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('payment request received. BOOM! For the amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-53b4a/us-central1/api
