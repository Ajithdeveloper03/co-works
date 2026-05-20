# 📦 Deployment File Manifest

## Files to Deploy to Hostinger

### 🎯 Priority: MUST UPLOAD

| File | Size | Location | Permissions | Purpose |
|------|------|----------|-------------|---------|
| **contact.php** | ~4 KB | `public_html/api/` | 644 | ⭐ MAIN EMAIL HANDLER - Required |
| **debug.html** | ~8 KB | `public_html/api/` | 644 | 🔍 Debug tester tool - Testing only |

### 📌 Priority: RECOMMENDED

| File | Size | Location | Permissions | Purpose |
|------|------|----------|-------------|---------|
| **contact-simple.php** | ~3 KB | `public_html/api/` | 644 | 🔄 Backup email handler - Alternative |
| **contact-debug.php** | ~5 KB | `public_html/api/` | 644 | 🧪 Full error diagnostic - Troubleshooting |

### 📚 Files Already Updated

| File | Location | Status |
|------|----------|--------|
| **CPANEL_DEPLOYMENT_GUIDE.md** | Project root | ✅ Created - Full deployment steps |
| **QUICK_DEPLOY.md** | Project root | ✅ Created - Quick reference checklist |
| **ERROR_DECODER.md** | Project root | ✅ Created - Error troubleshooting |
| **HOSTINGER_MAIL_FIX.md** | Project root | ✅ Updated - Explains fixes |
| **ContactPopup.tsx** | `components/` | ✅ Updated - No changes needed |

---

## Download These Files From Your Computer

Location on your computer:
```
c:\Users\inyma\OneDrive\Desktop\Ajith System Backup\inymart projects\co-works\public\api\
```

**Files to download:**
```
✅ contact.php
✅ contact-simple.php  
✅ contact-debug.php
✅ debug.html
```

---

## Upload Path in cPanel

**All files go here:**
```
public_html/api/
```

**Full URLs after upload:**
```
https://universecoworks.com/api/contact.php
https://universecoworks.com/api/contact-simple.php
https://universecoworks.com/api/contact-debug.php
https://universecoworks.com/api/debug.html
```

---

## File Specifications

### contact.php
```
Type: PHP Script
Size: ~4 KB
Purpose: Main email handler (PRODUCTION)
Features:
  - Validates form data
  - Sends admin email
  - Sends auto-reply
  - Error handling
  - Proper headers for Hostinger
Status: ✅ REQUIRED - Upload this!
```

### contact-simple.php
```
Type: PHP Script
Size: ~3 KB
Purpose: Simplified email handler (BACKUP)
Features:
  - Same as contact.php
  - Slightly simpler code
  - Better compatibility
Status: ✅ OPTIONAL - Recommended as backup
```

### contact-debug.php
```
Type: PHP Script
Size: ~5 KB
Purpose: Diagnostic tool (DEBUGGING)
Features:
  - Shows all error details
  - Logs each step
  - Displays system info
  - Shows mail() function status
Status: 🔧 OPTIONAL - Keep for troubleshooting
```

### debug.html
```
Type: HTML/JavaScript
Size: ~8 KB
Purpose: Test tool interface (TESTING)
Features:
  - Visual form tester
  - Color-coded responses
  - JSON formatter
  - Error highlighting
Status: 🧪 OPTIONAL - Recommended for testing
```

---

## Configuration Checklist

### Before Upload
- [ ] Downloaded all 4 files from your computer
- [ ] Files are in correct location (public/api/ locally)
- [ ] You have cPanel access
- [ ] You know admin email: info@universecoworks.com

### During Upload
- [ ] Created `api` folder in `public_html/`
- [ ] Uploaded all 4 files
- [ ] Set permissions to 644 for each file
- [ ] No errors during upload

### After Upload
- [ ] Visited https://universecoworks.com/api/debug.html (should see interface)
- [ ] Visited https://universecoworks.com/api/contact.php (should be blank, no 404)
- [ ] Tested email with debug.html
- [ ] Received test email in inbox
- [ ] Auto-reply received

---

## Email Configuration

### Admin Email (receives form submissions)
```
Email: info@universecoworks.com
Status: Must exist on Hostinger
Verify: cPanel → Email Manager → Look for this email
```

### From Address (sender)
```
Email: info@universecoworks.com
Status: Must be a valid Hostinger email
Note: Replies sent from this address
```

### Auto-Reply (sent to users)
```
From: info@universecoworks.com
To: User's email (from form)
Status: Automatic - no setup needed
```

### Testing Email
```
Send to: your-test-email@gmail.com
From: info@universecoworks.com
Status: Test only - use same email as admin for production
```

---

## Deployment Steps Summary

```
1. Download 4 PHP/HTML files from local folder
2. Login to cPanel (https://universecoworks.com:2083)
3. Create api folder in public_html
4. Upload 4 files to public_html/api/
5. Set permissions to 644 for each file
6. Test with https://universecoworks.com/api/debug.html
7. Submit form - check inbox and spam folder
8. Verify auto-reply received
9. Done! ✅
```

---

## Troubleshooting Quick Links

**Files that help troubleshoot:**
- ✅ ERROR_DECODER.md - Read error responses
- ✅ HOSTINGER_MAIL_FIX.md - Understand what was fixed
- ✅ CPANEL_DEPLOYMENT_GUIDE.md - Detailed deployment steps
- ✅ debug.html - Test email in browser

**How to use them:**
1. Run: https://universecoworks.com/api/debug.html
2. Look for error in response
3. Find error in ERROR_DECODER.md
4. Follow fix instructions

---

## File Backup Reference

**Keep backups locally:**
```
C:\Users\inyma\OneDrive\Desktop\Ajith System Backup\inymart projects\co-works\
├── public/api/contact.php ← Original
├── public/api/contact-simple.php ← Original
├── public/api/contact-debug.php ← Original
├── public/api/debug.html ← Original
├── QUICK_DEPLOY.md ← This file format
├── CPANEL_DEPLOYMENT_GUIDE.md ← Full guide
└── ERROR_DECODER.md ← Troubleshooting
```

---

## Post-Deployment Tasks

### Immediate (do after uploading)
- [ ] Test with debug.html
- [ ] Submit test email
- [ ] Check inbox
- [ ] Verify auto-reply

### First Week
- [ ] Monitor for email errors
- [ ] Check cPanel error logs
- [ ] Get feedback from test users
- [ ] Verify no 500 errors

### Ongoing
- [ ] Check spam folder regularly
- [ ] Monitor email sending success rate
- [ ] Keep debug.html handy for troubleshooting
- [ ] Document any issues

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | May 2026 | Initial deployment files |
| 1.1 | May 2026 | Fixed header formatting |
| 1.2 | May 2026 | Added debug tools |

---

## Support Resources

**In your project folder:**
```
- QUICK_DEPLOY.md ← START HERE
- CPANEL_DEPLOYMENT_GUIDE.md ← Step-by-step
- ERROR_DECODER.md ← Troubleshooting
- HOSTINGER_MAIL_FIX.md ← What was fixed
```

**Online:**
- Hostinger Help: https://support.hostinger.com
- cPanel Help: https://docs.cpanel.net

**Contact Hostinger with:**
- Screenshot of error
- Response from debug.html
- What you've tried
- When it started failing

---

## Next Steps

1. **Read:** QUICK_DEPLOY.md (takes 5 minutes)
2. **Download:** 4 files from public/api/ folder
3. **Login:** cPanel at https://universecoworks.com:2083
4. **Upload:** Files to public_html/api/
5. **Set:** Permissions to 644
6. **Test:** Visit debug.html and test email
7. **Verify:** Email arrives in inbox
8. **Done!** Email system live ✅

---

**All set! You're ready to deploy!**

*Need help? Check QUICK_DEPLOY.md or CPANEL_DEPLOYMENT_GUIDE.md*
