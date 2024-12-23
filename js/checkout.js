document.addEventListener('DOMContentLoaded', function() {
    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');

    const form = document.getElementById('payment-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Create a Checkout Session with the selected data
            const response = await fetch('YOUR_BACKEND_URL/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const session = await response.json();

            // Redirect to the Stripe Checkout page
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                alert(result.error.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
