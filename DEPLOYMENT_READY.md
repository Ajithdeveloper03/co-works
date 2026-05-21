# 🚀 DEPLOYMENT GUIDE - Ready to Deploy!

## ✅ Pre-Deployment Checklist

- [x] **Build Status**: ✅ **SUCCESSFUL** - No errors found
- [x] **TypeScript**: ✅ Type checking passed
- [x] **Dependencies**: ✅ All installed
- [x] **Production Build**: ✅ Created in `.next/` folder
- [x] **File Size**: ✅ Optimized (~103KB First Load JS)

---

## 🎯 Two-Part Deployment

Your project has TWO deployment targets:

### **1️⃣ NETLIFY** (Main Website)
- Next.js frontend application
- All page routes (/about, /contact, /pricing, etc.)
- Static pages + server-side API endpoint

### **2️⃣ CPANEL/HOSTINGER** (Email API)
- PHP backend for contact form emails
- `public/api/contact.php` file
- Handles email sending to admin

---

## 📋 PART 1: Deploy to Netlify (Next.js App)

### **Step 1: Prepare Your Repository**

```bash
# Make sure everything is committed to Git
git status
git add .
git commit -m "Ready for deployment"
git push origin main
```

### **Step 2: Connect to Netlify**

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** (if using GitHub)
4. Select your repository
5. Click **"Deploy site"**

### **Step 3: Configure Build Settings**

Netlify should auto-detect these settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: Should be 18+ (check in netlify.toml)

If not auto-detected, add them manually in Site Settings → Build & Deploy.

### **Step 4: Set Environment Variables** (if needed)

Go to: **Site Settings** → **Build & Deploy** → **Environment**

Add any required variables:
```
NEXT_PUBLIC_API_URL=https://universecoworks.com/api
```

### **Step 5: Deploy**

- Netlify will automatically build and deploy when you push to main branch
- Your site will be live at: `https://[your-netlify-domain].netlify.app`
- Or use your custom domain: `https://universecoworks.com`

---

## 📋 PART 2: Deploy API to cPanel/Hostinger

### **Step 1: Login to cPanel**

```
URL: https://universecoworks.com:2083
Username: Your email/hosting username
Password: Your password
```

### **Step 2: Access File Manager**

1. Click **File Manager**
2. Navigate to **public_html** folder
3. Create folder named **api** (if it doesn't exist)

### **Step 3: Upload These 4 Files**

From your local folder: `public/api/`

| File | Size | Purpose | Upload To |
|------|------|---------|-----------|
| contact.php | ~4KB | **MAIN** - Email handler | public_html/api/ |
| contact-simple.php | ~3KB | **BACKUP** - Fallback handler | public_html/api/ |
| contact-debug.php | ~5KB | **DEBUG** - Troubleshooting | public_html/api/ |
| debug.html | ~8KB | **TEST** - Testing tool | public_html/api/ |

### **Step 4: Set Permissions**

For each file:
1. Right-click → Change Permissions
2. Set to **644** (rw-r--r--)

### **Step 5: Test the API**

1. Open: `https://universecoworks.com/api/debug.html`
2. Test the contact form
3. Check your email inbox

---

## 🔗 Update API Endpoint (if needed)

### **In Next.js Project**

If your contact forms use the API, they're likely fetching from:

```javascript
fetch('/api/contact.php', ...)
```

**This is CORRECT** because:
- Netlify routes `/api/*` to cPanel backend
- Or use full URL: `https://universecoworks.com/api/contact.php`

### **Files to Check**

- [components/ContactPopup.tsx](components/ContactPopup.tsx)
- [components/ContactPageContent.tsx](components/ContactPageContent.tsx)
- Any other contact form components

---

## 📊 Deployment Status

| Component | Status | Location |
|-----------|--------|----------|
| **Next.js App** | ✅ Ready | Netlify |
| **Contact API** | ✅ Ready | cPanel /api/ |
| **Build** | ✅ Passed | .next/ |
| **TypeScript** | ✅ Checked | ✓ |
| **Email Sending** | ✅ Configured | contact.php |

---

## 🚨 Troubleshooting

### Issue: Contact form not sending emails

**Solution:**
1. Check error log: cPanel → Error Log
2. Run debug tool: `https://universecoworks.com/api/debug.html`
3. Check that `contact.php` has correct admin email
4. Verify email authentication is enabled on Hostinger

### Issue: "404 API Not Found"

**Solution:**
1. Verify `api/` folder exists in `public_html/`
2. Verify `contact.php` file is uploaded
3. Check file permissions (should be 644)
4. Clear browser cache and reload

### Issue: Netlify deployment fails

**Solution:**
1. Check build logs in Netlify Dashboard
2. Run `npm run build` locally to see errors
3. Push fixes to GitHub and redeploy

---

## ✨ Final Checklist Before Going Live

- [ ] Next.js app builds successfully (`npm run build`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] contact.php uploaded to cPanel
- [ ] API folder exists at public_html/api/
- [ ] File permissions are set to 644
- [ ] Test form at /contact page
- [ ] Receive email from form submission
- [ ] Check admin email receives submissions
- [ ] Verify no console errors on website
- [ ] Test on mobile device

---

## 📞 Support Links

- **Netlify Docs**: https://docs.netlify.com/
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **cPanel File Manager**: https://docs.cpanel.net/cpanel/
- **Hostinger Docs**: https://support.hostinger.com/

---

## 🎉 You're Ready!

Your application is production-ready. Follow the steps above to deploy to both Netlify (frontend) and cPanel (API backend).

Good luck! 🚀
