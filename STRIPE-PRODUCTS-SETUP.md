# Stripe Products Setup Guide

## Overview

You need to create products in Stripe that match the exact Price IDs in your code. Your site has 18 different price IDs based on different print sizes and orientations.

## Quick Start: Create Products in Stripe Dashboard

### Step 1: Access Stripe Products

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Make sure you're in **Live mode** (toggle in top right)
3. Click **Products** in the left sidebar
4. Click **+ Add product**

### Step 2: Create Each Product

You need to create products for different print orientations. I recommend creating 5 main products:

---

## PRODUCT 1: Landscape Print (3:2 Ratio)

**Product Info:**
- Name: `Street Photography Print - Landscape (3:2)`
- Description: `Museum-quality archival print on premium fine art paper. Landscape orientation, 3:2 aspect ratio.`
- Image: Upload a sample landscape photo

**Create 4 Prices (one at a time):**

1. **Small Landscape**
   - Price: `$85.00`
   - Billing: `One time`
   - Price description: `12" × 8"`
   - **Look up ID**: `price_landscape_small` ← CRITICAL: Use this exact ID

2. **Medium Landscape**
   - Price: `$145.00`
   - Billing: `One time`
   - Price description: `18" × 12"`
   - **Look up ID**: `price_landscape_medium`

3. **Large Landscape**
   - Price: `$225.00`
   - Billing: `One time`
   - Price description: `24" × 16"`
   - **Look up ID**: `price_landscape_large`

4. **Extra Large Landscape**
   - Price: `$350.00`
   - Billing: `One time`
   - Price description: `36" × 24"`
   - **Look up ID**: `price_landscape_xlarge`

---

## PRODUCT 2: Portrait Print (2:3 Ratio)

**Product Info:**
- Name: `Street Photography Print - Portrait (2:3)`
- Description: `Museum-quality archival print on premium fine art paper. Portrait orientation, 2:3 aspect ratio.`

**Create 4 Prices:**

1. **Small Portrait**
   - Price: `$85.00`
   - Price description: `8" × 12"`
   - **Look up ID**: `price_portrait_small`

2. **Medium Portrait**
   - Price: `$145.00`
   - Price description: `12" × 18"`
   - **Look up ID**: `price_portrait_medium`

3. **Large Portrait**
   - Price: `$225.00`
   - Price description: `16" × 24"`
   - **Look up ID**: `price_portrait_large`

4. **Extra Large Portrait**
   - Price: `$350.00`
   - Price description: `24" × 36"`
   - **Look up ID**: `price_portrait_xlarge`

---

## PRODUCT 3: Portrait Print (4:5 Ratio)

**Product Info:**
- Name: `Street Photography Print - Portrait (4:5)`
- Description: `Museum-quality archival print on premium fine art paper. Portrait orientation, 4:5 aspect ratio.`

**Create 3 Prices:**

1. **Small Portrait 4:5**
   - Price: `$75.00`
   - Price description: `8" × 10"`
   - **Look up ID**: `price_portrait_45_small`

2. **Medium Portrait 4:5**
   - Price: `$165.00`
   - Price description: `16" × 20"`
   - **Look up ID**: `price_portrait_45_medium`

3. **Large Portrait 4:5**
   - Price: `$285.00`
   - Price description: `24" × 30"`
   - **Look up ID**: `price_portrait_45_large`

---

## PRODUCT 4: Square Print (1:1 Ratio)

**Product Info:**
- Name: `Street Photography Print - Square (1:1)`
- Description: `Museum-quality archival print on premium fine art paper. Square format, 1:1 aspect ratio.`

**Create 4 Prices:**

1. **Small Square**
   - Price: `$85.00`
   - Price description: `10" × 10"`
   - **Look up ID**: `price_square_small`

2. **Medium Square**
   - Price: `$155.00`
   - Price description: `16" × 16"`
   - **Look up ID**: `price_square_medium`

3. **Large Square**
   - Price: `$255.00`
   - Price description: `24" × 24"`
   - **Look up ID**: `price_square_large`

4. **Extra Large Square**
   - Price: `$395.00`
   - Price description: `36" × 36"`
   - **Look up ID**: `price_square_xlarge`

---

## PRODUCT 5: Landscape Print (16:9 Ratio)

**Product Info:**
- Name: `Street Photography Print - Panoramic (16:9)`
- Description: `Museum-quality archival print on premium fine art paper. Panoramic landscape, 16:9 aspect ratio.`

**Create 3 Prices:**

1. **Small Panoramic**
   - Price: `$95.00`
   - Price description: `16" × 9"`
   - **Look up ID**: `price_landscape_169_small`

2. **Medium Panoramic**
   - Price: `$165.00`
   - Price description: `24" × 13.5"`
   - **Look up ID**: `price_landscape_169_medium`

3. **Large Panoramic**
   - Price: `$245.00`
   - Price description: `32" × 18"`
   - **Look up ID**: `price_landscape_169_large`

---

## How to Set Custom Price IDs in Stripe

### IMPORTANT: Setting the "Look up ID"

When creating each price in Stripe, you MUST set a custom "API ID" (also called "Look up ID"):

1. When adding a price, scroll down to find **Additional options**
2. Click to expand it
3. Find the field labeled **API ID** or **Look up key**
4. Enter the exact Price ID from the lists above (e.g., `price_landscape_small`)
5. **This is critical** - your code looks for these exact IDs

### Screenshot Guide:
```
┌─────────────────────────────┐
│ Add a price                    │
├─────────────────────────────┤
│ Price: $85.00                  │
│ Billing: One time              │
│ Description: 12" × 8"          │
│                                │
│ ▼ Additional options          │
│                                │
│ Look up key (API ID):          │
│ price_landscape_small  ← HERE │
│                                │
└─────────────────────────────┘
```

---

## Complete Checklist

### Product 1: Landscape 3:2
- [ ] price_landscape_small ($85)
- [ ] price_landscape_medium ($145)
- [ ] price_landscape_large ($225)
- [ ] price_landscape_xlarge ($350)

### Product 2: Portrait 2:3
- [ ] price_portrait_small ($85)
- [ ] price_portrait_medium ($145)
- [ ] price_portrait_large ($225)
- [ ] price_portrait_xlarge ($350)

### Product 3: Portrait 4:5
- [ ] price_portrait_45_small ($75)
- [ ] price_portrait_45_medium ($165)
- [ ] price_portrait_45_large ($285)

### Product 4: Square 1:1
- [ ] price_square_small ($85)
- [ ] price_square_medium ($155)
- [ ] price_square_large ($255)
- [ ] price_square_xlarge ($395)

### Product 5: Panoramic 16:9
- [ ] price_landscape_169_small ($95)
- [ ] price_landscape_169_medium ($165)
- [ ] price_landscape_169_large ($245)

**Total: 18 prices across 5 products**

---

## Testing Your Products

### In Test Mode:
1. Switch Stripe to Test mode
2. Create the same products with the same Price IDs
3. Use test card: `4242 4242 4242 4242`
4. Test a purchase on your site

### In Live Mode:
1. Make sure all 18 prices are created with correct IDs
2. Do a real test purchase with a real card
3. Immediately refund yourself in Stripe dashboard

---

## Troubleshooting

### "Price not found" error
**Problem**: The Price ID in your code doesn't match Stripe
**Solution**: 
1. Go to Stripe Dashboard → Products
2. Click on a product → View prices
3. Click on a price to see its API ID
4. Make sure it matches exactly (case-sensitive)

### "No such price" in checkout
**Problem**: Wrong Price ID or product in test mode vs live mode
**Solution**: Make sure you're in the same mode (test/live) in both Stripe and your site

---

## Quick Reference: All Price IDs

```
price_landscape_small
price_landscape_medium
price_landscape_large
price_landscape_xlarge

price_portrait_small
price_portrait_medium
price_portrait_large
price_portrait_xlarge

price_portrait_45_small
price_portrait_45_medium
price_portrait_45_large

price_square_small
price_square_medium
price_square_large
price_square_xlarge

price_landscape_169_small
price_landscape_169_medium
price_landscape_169_large
```

Copy these to use when setting up your Stripe products!