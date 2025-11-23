# Sidewalk by TJ - Setup Instructions

## Ultra-Bold Editorial Photography Platform

A deconstructed, modern website for selling West Los Angeles black and white street photography with integrated Stripe payments.

## Features

✓ **Ultra-bold editorial design** - Deconstructed layout with dramatic typography
✓ **Dynamic print sizing** - Size options adapt based on photo orientation and aspect ratio
✓ **Stripe integration** - Secure checkout with shipping options
✓ **Responsive design** - Works beautifully on all devices
✓ **Black & white aesthetic** - High-contrast street photography showcase

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Stripe

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Create a `.env` file in the root directory:

```env
# .env file
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
PORT=3000
```

### 3. Update HTML File

Open `sidewalk-by-tj.html` and replace this line:
```javascript
const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
```

With your actual Stripe publishable key:
```javascript
const stripe = Stripe('pk_test_51ABC123...');
```

### 4. Update Server File

Open `server.js` and replace:
- `sk_test_YOUR_SECRET_KEY_HERE` with your Stripe secret key
- `whsec_YOUR_WEBHOOK_SECRET` with your webhook secret

### 5. Create Stripe Products (Optional)

You can either:
- Manually create products in the Stripe Dashboard
- Let the code create them dynamically (current setup)

For better control, create products in Stripe Dashboard:
- Product Name: "Street Photography Print - [Size]"
- Price: Set according to size
- Category: Physical goods

### 6. Run the Server

```bash
npm start
```

Visit http://localhost:3000 to see your site!

For development with auto-restart:
```bash
npm run dev
```

## Stripe Products & Pricing

The platform supports different sizes based on photo orientation:

### Landscape (3:2)
- 12" × 8" - $85
- 18" × 12" - $145
- 24" × 16" - $225
- 36" × 24" - $350

### Portrait (2:3)
- 8" × 12" - $85
- 12" × 18" - $145
- 16" × 24" - $225
- 24" × 36" - $350

### Square (1:1)
- 10" × 10" - $85
- 16" × 16" - $155
- 24" × 24" - $255
- 36" × 36" - $395

### Landscape (16:9)
- 16" × 9" - $95
- 24" × 13.5" - $165
- 32" × 18" - $245

### Portrait (4:5)
- 8" × 10" - $75
- 16" × 20" - $165
- 24" × 30" - $285

## Setting Up Webhooks

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/webhook`
4. Copy the webhook secret to your `.env` file

## Customization

### Adding Your Photos

Replace the placeholder SVG images with your actual photos:

```javascript
<img src="/images/your-photo.jpg" alt="Photo Title">
```

Update the `data-orientation` and `data-aspect` attributes to match your photo dimensions.

### Changing Colors

Update the CSS variables in the HTML file:

```css
:root {
    --black: #0a0a0a;
    --white: #fafafa;
    --gray: #666666;
    --accent: #ff3e00; /* Change this for different accent color */
}
```

### Typography

The site uses three bold fonts:
- **Archivo Black** - Display headlines
- **Space Mono** - Labels and metadata
- **Instrument Sans** - Body text

Change them in the Google Fonts link in the `<head>`.

## Production Deployment

### 1. Switch to Live Keys

Replace test keys with live keys:
- `pk_test_...` → `pk_live_...`
- `sk_test_...` → `sk_live_...`

### 2. Update URLs

In `server.js`, update:
```javascript
success_url: `https://yourdomain.com/success?session_id={CHECKOUT_SESSION_ID}`,
cancel_url: `https://yourdomain.com`,
```

### 3. Deploy

Deploy to:
- **Vercel** (recommended for static + API routes)
- **Heroku**
- **Railway**
- **DigitalOcean**
- **AWS**

### 4. Configure Webhooks

Set up production webhook endpoint in Stripe Dashboard:
`https://yourdomain.com/webhook`

## File Structure

```
sidewalk-by-tj/
├── sidewalk-by-tj.html    # Main frontend file
├── server.js              # Node.js backend with Stripe
├── package.json           # Dependencies
├── .env                   # Environment variables (create this)
└── README.md             # This file
```

## Design Philosophy

This platform embodies:
- **Editorial boldness** - Large typography and asymmetric layouts
- **Deconstructed UI** - Breaking traditional grid patterns
- **High contrast** - Pure black and white aesthetic
- **Kinetic energy** - Staggered animations and hover effects
- **Urban rawness** - Matching the street photography subject matter

## Support

For issues with:
- **Stripe integration**: https://stripe.com/docs
- **Payment testing**: Use test card `4242 4242 4242 4242`
- **Webhooks**: https://stripe.com/docs/webhooks

## License

MIT License - Feel free to customize for your photography business!

---

Made with ❤️ for street photography
