# 🚀 Deploy Next.js Website to Hostinger - Complete Guide

## Two Deployment Options

### **Option A: Keep Netlify (RECOMMENDED - Current Setup)**
- Frontend: Netlify (already deployed) ✅
- API: Hostinger cPanel (PHP files)

### **Option B: Move Everything to Hostinger** 
- Frontend: Hostinger (Node.js hosting)
- API: Hostinger cPanel (PHP files)

---

# 📋 OPTION A: Deploy Only PHP API to Hostinger (Current Setup)

This is what you already have. Just upload the PHP files.

## Step 1: Login to cPanel

```
URL: https://universecoworks.com:2083
Username: Your Hostinger email/username
Password: Your Hostinger password
```

## Step 2: Open File Manager

1. Click **File Manager** in cPanel
2. Make sure you're in **public_html** folder
3. You should see your files here

## Step 3: Create `/api` Folder

1. Right-click in empty space
2. Click **Create New** → **Folder**
3. Name it: `api`
4. Click **Create**

## Step 4: Upload 4 PHP Files

Download these files from your project and upload to `public_html/api/`:

**Location on your computer:**
```
public/api/
├── contact.php
├── contact-simple.php
├── contact-debug.php
└── debug.html
```

**Upload Steps:**
1. Click the `api` folder to open it
2. Click **Upload**
3. Select all 4 files from your computer
4. Click **Upload**

## Step 5: Set File Permissions

For each uploaded file:

1. Right-click the file
2. Click **Change Permissions**
3. Set to **644** 
4. Click **Change**

## Step 6: Test

1. Open: `https://universecoworks.com/api/debug.html`
2. Fill out the test form
3. Click Submit
4. Check your email inbox

✅ **Done!** Your API is live on Hostinger!

---

# 🔄 OPTION B: Move Entire Website to Hostinger

If you want to move your Next.js app from Netlify to Hostinger.

## ⚠️ Before Starting

**Check if Hostinger supports Node.js:**
1. Login to Hostinger
2. Go to **Hosting** → **Manage**
3. Look for **Application** → **Node.js**
4. If available, proceed. If not, skip this option.

---

## Step 1: Build Your Next.js Project

```bash
npm run build
```

This creates a `.next` folder with your production build.

## Step 2: Export Static Files (Optional)

If you want a static site deployment (easier on shared hosting):

**Edit `next.config.js`:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

**Then rebuild:**
```bash
npm run build
```

This creates a `out/` folder with static HTML files.

## Step 3: Upload to Hostinger

### **If using Static Export (`out/` folder):**

1. Login to Hostinger cPanel
2. Open **File Manager**
3. Navigate to **public_html**
4. Delete existing files (backup first!)
5. Upload **all files from your `out/` folder** to `public_html/`

### **If using Node.js Runtime:**

1. Login to Hostinger
2. Go to **Application** → **Node.js**
3. Create new Node.js app:
   - **App name**: universe-coworks
   - **Node version**: 18.x or higher
   - **Port**: 3000
4. Upload your project files:
   - `next.config.js`
   - `package.json`
   - `package-lock.json`
   - `.next/` folder
   - `public/` folder
5. In Hostinger, run:
   ```bash
   npm install
   npm run build (if needed)
   npm start
   ```

## Step 4: Set Up Domain

1. Go to **Domains** in Hostinger
2. Point `universecoworks.com` to your Node.js app
3. Wait 24-48 hours for DNS propagation

## Step 5: Upload PHP API Files

Still upload your PHP files to `public_html/api/` as described in Option A.

---

# 📊 Comparison: Netlify vs Hostinger

| Feature | Netlify | Hostinger |
|---------|---------|-----------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Auto-Deploy from Git** | ✅ Yes | ❌ Manual |
| **Free SSL** | ✅ Yes | ✅ Yes |
| **Build Cache** | ✅ Yes | ⚠️ Limited |
| **Cold Starts** | ⚠️ Sometimes | ⚠️ Sometimes |
| **Cost** | $19+/month | $5-15/month |
| **Best For** | Production Apps | Budget Hosting |

---

# ✅ Current Recommended Setup

**Keep it as is:**
- ✅ **Frontend**: Netlify (automatic deployments from Git)
- ✅ **API**: Hostinger cPanel (PHP contact form)
- ✅ **Domain**: Points to Netlify
- ✅ **Emails**: Sent via Hostinger

**Why?**
- Netlify is faster for frontend
- Hostinger is cheaper for backend
- You get the best of both worlds
- No need to pay extra

---

# 🎯 Quick Steps for Option A (Recommended)

### To Deploy Your New Changes:

**On your computer:**
```bash
# Make sure changes are saved
git add .
git commit -m "Update blogs"
git push origin main
```

**That's it!** Netlify auto-deploys when you push to GitHub.

**For PHP API changes:**
1. Upload to `public_html/api/` via cPanel File Manager
2. Set permissions to 644
3. Test via `debug.html`

---

# 🔗 Important URLs

```
cPanel Login:        https://universecoworks.com:2083
Netlify Dashboard:   https://app.netlify.com
File Manager:        cPanel → File Manager
Your Website:        https://universecoworks.com
API Debug Test:      https://universecoworks.com/api/debug.html
Contact Form:        https://universecoworks.com/contact
Blog:                https://universecoworks.com/insights/blogs
```

---

# 📞 Hostinger Support

If you have issues:
1. Login to Hostinger
2. Click **Support** → **Live Chat**
3. Ask: "How do I enable Node.js on my hosting?"

---

# ✨ Summary

**You're already deployed!** Your website is live on:
- ✅ **Netlify** (Next.js Frontend)
- ✅ **Hostinger** (PHP API)

Just upload your PHP files to Hostinger's `public_html/api/` folder and you're completely done.

Need help? Let me know! 🚀
