# Sidewalk Photo - Production Deployment Guide

## 🚀 Quick Deploy to Netlify

Your site is now ready for production! Here's how to deploy:

### Step 1: Connect to Netlify

1. **Sign in to Netlify**: Go to [netlify.com](https://netlify.com) and sign in
2. **Import from GitHub**: Click "New site from Git" → "GitHub"
3. **Select Repository**: Choose `SidewalkbyTJ/sidewalk-photo`
4. **Build Settings**:
   - Build command: `echo "No build required"`
   - Publish directory: `.` (root)
   - Functions directory: `netlify/functions` (auto-detected)

### Step 2: Environment Variables

In your Netlify dashboard, go to **Site settings** → **Environment variables** and add:

```env
STRIPE_SECRET_KEY=sk_live_your_live_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

⚠️ **Important**: Use LIVE keys for production, not test keys!

### Step 3: Update Stripe Key in Code

In `index.html`, replace:
```javascript
const stripe = Stripe('pk_live_YOUR_LIVE_PUBLISHABLE_KEY_HERE');
```

With your actual live publishable key:
```javascript
const stripe = Stripe('pk_live_51ABC123...');
```

### Step 4: Set Up Stripe Webhook

1. In your **Stripe Dashboard**, go to **Developers** → **Webhooks**
2. **Add endpoint**: `https://your-netlify-domain.netlify.app/.netlify/functions/webhook`
3. **Events to send**: Select `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the **Signing secret** and add it to Netlify environment variables

### Step 5: Custom Domain (Optional)

1. In Netlify, go to **Site settings** → **Domain management**
2. **Add custom domain**: Enter your domain (e.g., `sidewalkbytj.com`)
3. **Update DNS**: Point your domain to Netlify (they'll provide instructions)
4. **SSL Certificate**: Netlify auto-provisions Let's Encrypt SSL

## 📋 Production Checklist

### Before Going Live:

- [ ] **Replace SVG placeholders** with actual photography
- [ ] **Update Stripe keys** to live keys (not test)
- [ ] **Test all payment flows** with real credit cards
- [ ] **Set up Google Analytics** (replace `GA_MEASUREMENT_ID`)
- [ ] **Add real photos** and optimize for web
- [ ] **Create og-image.jpg** for social media sharing
- [ ] **Test responsive design** on all devices
- [ ] **Set up webhook monitoring** in Stripe dashboard

### Photo Requirements:

- **Format**: JPG or WebP for best compression
- **Size**: Max 2MB per image for fast loading
- **Dimensions**: High resolution for quality zooming
- **Alt text**: Update alt attributes for accessibility

### SEO Optimization:

- [ ] **Update meta descriptions** with actual photo details
- [ ] **Add structured data** for local business
- [ ] **Create sitemap.xml**
- [ ] **Submit to Google Search Console**
- [ ] **Add robots.txt**

## 🔧 Technical Features Included

### ✅ Netlify Functions
- **create-checkout-session**: Handles Stripe payment processing
- **webhook**: Processes Stripe webhook events
- Automatic scaling and serverless architecture

### ✅ Enhanced UX
- **Loading states** for better user feedback
- **Error handling** with user-friendly messages
- **Mobile-first** responsive design
- **Smooth animations** and transitions

### ✅ Analytics Ready
- **Google Analytics 4** integration
- **Event tracking** for user interactions
- **Conversion tracking** for purchases

### ✅ Security
- **HTTPS by default** on Netlify
- **Webhook signature verification**
- **Environment variable protection**
- **CORS headers** properly configured

### ✅ Performance
- **Optimized CSS** and JavaScript
- **Lazy loading** images
- **CDN delivery** through Netlify
- **Function bundling** with esbuild

## 🛠 Local Development

To test locally with Netlify Functions:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Start local development server
netlify dev
```

This will:
- Serve your site locally
- Run Netlify Functions locally
- Proxy Stripe webhooks for testing

## 📊 Monitoring & Analytics

### Stripe Dashboard
- Monitor payments and refunds
- View customer details
- Track revenue metrics
- Handle disputes

### Netlify Analytics
- Site performance metrics
- Function execution stats
- Error monitoring
- Traffic analytics

### Google Analytics
- User behavior tracking
- Conversion funnel analysis
- E-commerce tracking
- Custom event monitoring

## 🔄 Updates & Maintenance

### Making Changes:
1. Update code in GitHub
2. Netlify auto-deploys on push to `main`
3. Test in staging environment first
4. Monitor for errors after deployment

### Regular Maintenance:
- **Update dependencies** monthly
- **Monitor Stripe webhooks** for failures
- **Review analytics** for optimization opportunities
- **Backup important data** regularly

## 📧 Support

For technical issues:
- **Stripe**: [stripe.com/support](https://stripe.com/support)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Payment testing**: Use test card `4242 4242 4242 4242`

---

**🎉 Your photography e-commerce platform is production-ready!**

The site will handle everything from photo browsing to secure payments and order fulfillment. Just add your beautiful street photography and start selling!