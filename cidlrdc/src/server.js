const express = require('express');
const stripe = require('stripe')('your-secret-key');
const app = express();

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { ticketType, name, email } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Ticket: ${ticketType}`,
          },
          unit_amount: ticketType === 'vip' ? 50000 : 25000,
        },
        quantity: 1,
      },
    ],
    customer_email: email,
    mode: 'payment',
    success_url: 'https://your-site.com/success',
    cancel_url: 'https://your-site.com/cancel',
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on port 4242'));
