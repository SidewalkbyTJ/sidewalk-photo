# Stripe Webhook Setup Guide for Sidewalk Photo

## Step-by-Step: Creating Your Stripe Webhook

### 1. Get Your Netlify URL First

Before setting up the webhook, you need to know your site URL:
- If deploying to Netlify: `https://your-site-name.netlify.app`
- If using custom domain: `https://sidewalkbytj.com`

### 2. Access Stripe Dashboard

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Make sure you're in **Live mode** (toggle in top right - should NOT say "Test mode")
3. Click on **Developers** in the left sidebar
4. Click on **Webhooks**

### 3. Create the Webhook Endpoint

1. Click the **+ Add endpoint** button
2. In the "Endpoint URL" field, enter:
   ```
   https://YOUR-NETLIFY-SITE.netlify.app/.netlify/functions/webhook
   ```
   
   For example:
   ```
   https://sidewalk-photo.netlify.app/.netlify/functions/webhook
   ```

3. Under "Events to send", click **+ Select events**

4. Select these specific events:
   - ✅ `checkout.session.completed`
   - ✅ `payment_intent.succeeded`
   - ✅ `payment_intent.payment_failed`

5. Click **Add events**

6. (Optional) Add a description: "Production webhook for photo print orders"

7. Click **Add endpoint**

### 4. Get Your Webhook Secret

After creating the webhook:

1. You'll see your new webhook endpoint in the list
2. Click on it to view details
3. Find the **Signing secret** section
4. Click **Reveal** to show the secret
5. It will start with `whsec_`
6. **Copy this secret** - you'll need it for Netlify

### 5. Add to Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your sidewalk-photo site
3. Go to **Site settings** → **Environment variables**
4. Add a new variable:
   - **Key**: `STRIPE_WEBHOOK_SECRET`
   - **Value**: `whsec_...` (paste the secret you copied)
5. Click **Save**

### 6. Verify It's Working

After deploying your site:

1. Make a test purchase on your live site
2. Go back to Stripe Dashboard → Developers → Webhooks
3. Click on your webhook endpoint
4. Check the **Recent deliveries** section
5. You should see successful webhook events (200 status code)

If you see errors:
- 500 errors = Problem with your function code
- 401 errors = Wrong webhook secret
- 404 errors = Wrong endpoint URL

## Complete Checklist

- [ ] Netlify site is deployed
- [ ] Webhook endpoint created in Stripe (live mode)
- [ ] Selected correct events (checkout.session.completed, etc.)
- [ ] Copied webhook signing secret
- [ ] Added STRIPE_WEBHOOK_SECRET to Netlify env vars
- [ ] Site redeployed after adding env var
- [ ] Test purchase made successfully
- [ ] Verified webhook deliveries in Stripe dashboard

## Testing Your Webhook

### Test Mode (for development):

1. Switch Stripe to **Test mode**
2. Create a separate webhook endpoint for test: 
   ```
   https://YOUR-SITE.netlify.app/.netlify/functions/webhook
   ```
3. Use test mode webhook secret in your local .env
4. Use test card: `4242 4242 4242 4242`

### Live Mode (for production):

1. Use real credit cards
2. Monitor webhook deliveries in Stripe dashboard
3. Check Netlify Functions logs for any errors

## Common Issues & Solutions

### Webhook returns 401 Unauthorized
**Problem**: Wrong webhook secret
**Solution**: Double-check the STRIPE_WEBHOOK_SECRET in Netlify matches Stripe dashboard

### Webhook returns 404 Not Found
**Problem**: Wrong URL or function not deployed
**Solution**: Verify URL is exactly `/.netlify/functions/webhook` and site is deployed

### Webhook returns 500 Internal Server Error
**Problem**: Error in webhook function code
**Solution**: Check Netlify Functions logs for specific error details

### No webhook events received
**Problem**: Events not selected or webhook disabled
**Solution**: Verify correct events are selected and webhook is enabled in Stripe

## Security Best Practices

1. **Never commit** webhook secrets to Git
2. **Always verify** webhook signatures (already implemented in webhook.js)
3. **Use HTTPS** only (Netlify provides this automatically)
4. **Monitor** webhook deliveries regularly
5. **Rotate secrets** if you suspect they've been compromised

## Need Help?

- **Stripe Docs**: [https://stripe.com/docs/webhooks](https://stripe.com/docs/webhooks)
- **Netlify Functions**: [https://docs.netlify.com/functions/overview/](https://docs.netlify.com/functions/overview/)
- **Test your webhook**: Use Stripe CLI or test mode purchases