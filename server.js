// server.js - Backend for Sidewalk by TJ Stripe Integration
// Run with: node server.js

const express = require('express');
const stripe = require('stripe')('sk_test_YOUR_SECRET_KEY_HERE'); // Replace with your Stripe secret key
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serve your HTML file from public directory

// Create Stripe Products and Prices
// You should run this once to set up your products in Stripe
// Or manually create them in the Stripe Dashboard

const PRICE_IDS = {
  // Landscape 3:2
  price_landscape_small: 'price_xxxxx', // 12" × 8" - $85
  price_landscape_medium: 'price_xxxxx', // 18" × 12" - $145
  price_landscape_large: 'price_xxxxx', // 24" × 16" - $225
  price_landscape_xlarge: 'price_xxxxx', // 36" × 24" - $350

  // Portrait 2:3
  price_portrait_small: 'price_xxxxx', // 8" × 12" - $85
  price_portrait_medium: 'price_xxxxx', // 12" × 18" - $145
  price_portrait_large: 'price_xxxxx', // 16" × 24" - $225
  price_portrait_xlarge: 'price_xxxxx', // 24" × 36" - $350

  // Portrait 4:5
  price_portrait_45_small: 'price_xxxxx', // 8" × 10" - $75
  price_portrait_45_medium: 'price_xxxxx', // 16" × 20" - $165
  price_portrait_45_large: 'price_xxxxx', // 24" × 30" - $285

  // Square 1:1
  price_square_small: 'price_xxxxx', // 10" × 10" - $85
  price_square_medium: 'price_xxxxx', // 16" × 16" - $155
  price_square_large: 'price_xxxxx', // 24" × 24" - $255
  price_square_xlarge: 'price_xxxxx', // 36" × 36" - $395

  // Landscape 16:9
  price_landscape_169_small: 'price_xxxxx', // 16" × 9" - $95
  price_landscape_169_medium: 'price_xxxxx', // 24" × 13.5" - $165
  price_landscape_169_large: 'price_xxxxx', // 32" × 18" - $245
};

// Create Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  const { photoTitle, photoLocation, size, priceId, amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${photoTitle} - ${size}`,
              description: `Black & white street photography print from ${photoLocation}`,
              images: ['https://your-domain.com/images/placeholder.jpg'], // Add actual image URL
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500, // $15 standard shipping
              currency: 'usd',
            },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 3500, // $35 expedited shipping
              currency: 'usd',
            },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 2,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
      ],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}`,
      metadata: {
        photoTitle,
        photoLocation,
        size,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook endpoint for Stripe events
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = 'whsec_YOUR_WEBHOOK_SECRET'; // Replace with your webhook secret

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful:', session);
      
      // Fulfill the order
      // - Send order confirmation email
      // - Create print job
      // - Update inventory
      // - Send to fulfillment partner
      
      await fulfillOrder(session);
      break;

    case 'payment_intent.payment_failed':
      const paymentIntent = event.data.object;
      console.log('Payment failed:', paymentIntent);
      // Handle failed payment
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

// Function to fulfill the order
async function fulfillOrder(session) {
  console.log('Fulfilling order for session:', session.id);
  
  // Get customer details
  const customer = await stripe.customers.retrieve(session.customer);
  
  // Get line items
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  
  const orderDetails = {
    sessionId: session.id,
    customerEmail: customer.email,
    customerName: session.customer_details.name,
    shippingAddress: session.shipping_details.address,
    photoTitle: session.metadata.photoTitle,
    photoLocation: session.metadata.photoLocation,
    size: session.metadata.size,
    amountPaid: session.amount_total / 100, // Convert from cents
    paymentStatus: session.payment_status,
    items: lineItems.data,
  };

  console.log('Order details:', orderDetails);

  // TODO: Implement your fulfillment logic
  // - Send to email service (SendGrid, Mailgun, etc.)
  // - Create record in database
  // - Send to print fulfillment service
  // - Generate tracking number
  
  return orderDetails;
}

// Success page endpoint
app.get('/success', async (req, res) => {
  const sessionId = req.query.session_id;
  
  if (!sessionId) {
    return res.redirect('/');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // Send success page with order details
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Order Confirmed - Sidewalk by TJ</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
          }
          h1 { color: #ff3e00; }
          .order-details {
            background: #f5f5f5;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <h1>Thank You for Your Order!</h1>
        <p>Your print order has been confirmed.</p>
        <div class="order-details">
          <h2>Order Details</h2>
          <p><strong>Order ID:</strong> ${session.id}</p>
          <p><strong>Photo:</strong> ${session.metadata.photoTitle}</p>
          <p><strong>Size:</strong> ${session.metadata.size}</p>
          <p><strong>Total:</strong> $${(session.amount_total / 100).toFixed(2)}</p>
        </div>
        <p>You will receive a confirmation email shortly with tracking information.</p>
        <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #ff3e00; color: white; text-decoration: none;">Return to Gallery</a>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.redirect('/');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
