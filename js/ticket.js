const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

exports.handler = async (event) => {
   const data = JSON.parse(event.body);

   const session = await stripe.checkout.sessions.create({
       payment_method_types: ['card'],
       line_items: [{
           price_data: {
               currency: 'usd',
               product_data: {
                   name: data['ticket-type'],
               },
               unit_amount: 5000, // Example amount in cents
           },
           quantity: 1,
       }],
       mode: 'payment',
       success_url: 'https://yourdomain.com/success',
       cancel_url: 'https://yourdomain.com/cancel',
       metadata: {
           name: data['your-name'],
           email: data['your-email'],
           phone: data['your-phone'],
           country: data['your-country'],
           organisation: data['your-organisation'],
           position: data['your-position'],
       },
   });

   return {
       statusCode: 200,
       body: JSON.stringify({ id: session.id }),
   };
};
