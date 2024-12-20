import { loadStripe } from '@stripe/stripe-js';

// Replace with your own publishable key
const stripePromise = loadStripe('your-publishable-key');

export default stripePromise;
