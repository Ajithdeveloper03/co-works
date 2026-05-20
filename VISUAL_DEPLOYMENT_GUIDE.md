# 🚀 cPanel Deployment - Visual Guide

## Your Domain Structure (Before & After)

### BEFORE (Current)
```
universecoworks.com
└── public_html/
    ├── app/          ← Website content
    ├── images/
    ├── index.html
    └── ❌ NO /api/ folder yet
```

### AFTER (After Deployment)
```
universecoworks.com
└── public_html/
    ├── app/          ← Website content
    ├── api/          ← ✅ NEW!
    │   ├── contact.php          [REQUIRED]
    │   ├── contact-simple.php   [OPTIONAL]
    │   ├── contact-debug.php    [DEBUGGING]
    │   └── debug.html           [TESTING]
    ├── images/
    ├── index.html
    └── .htaccess
```

---

## Step-by-Step Visual Guide

### STEP 1️⃣: Login to cPanel
```
┌─────────────────────────────────────┐
│  Browser URL Bar                    │
├─────────────────────────────────────┤
│  https://universecoworks.com:2083   │
└─────────────────────────────────────┘
        ↓ Press Enter
┌─────────────────────────────────────┐
│  cPanel Login                       │
├─────────────────────────────────────┤
│  Username: your-email@gmail.com     │
│  Password: ••••••••••••             │
│  [Log in]                           │
└─────────────────────────────────────┘
        ↓ Click Log in
    Welcome to cPanel! ✅
```

---

### STEP 2️⃣: Open File Manager
```
cPanel Dashboard
├── Email
├── Domains
├── Files ──→ 📂 FILE MANAGER ← CLICK HERE
├── Databases
└── ...
```

---

### STEP 3️⃣: Navigate to public_html
```
Left Sidebar:
├── / (root)
├── public_html ← DOUBLE CLICK
│   ├── app/
│   ├── images/
│   ├── index.html
│   └── ...
```

---

### STEP 4️⃣: Create api Folder
```
Inside public_html/

[Empty space]

Right-click → Create New → Folder

New Folder Name: api

Click: Create
                ↓
        Folder created! ✅
```

---

### STEP 5️⃣: Upload Files (4 times)

#### First Upload:
```
Click: Upload
    ↓
Select: contact.php
    ↓
Click: Open
    ↓
[████████████] 100% ✅
```

#### Repeat for:
- contact-simple.php ✅
- contact-debug.php ✅
- debug.html ✅

---

### STEP 6️⃣: Set Permissions (4 times)

#### For each file:
```
Right-click: contact.php
    ↓
Select: Change Permissions
    ↓
Set to: 644
    ↓
Click: Change Permissions
                ↓
        Permission Updated ✅
```

---

## Folder Structure in cPanel

```
📁 public_html/
   │
   ├── 📁 app/
   │   └── [Your website pages]
   │
   ├── 📁 api/ ← NEW FOLDER
   │   ├── contact.php [644] ✅
   │   ├── contact-simple.php [644] ✅
   │   ├── contact-debug.php [644] ✅
   │   └── debug.html [644] ✅
   │
   ├── 📁 images/
   ├── 📄 index.html
   └── 📄 .htaccess
```

---

## Testing Workflow

### Test 1: Files Exist
```
Browser URL: https://universecoworks.com/api/contact.php
Expected: Blank page (no 404, no error)
Status: ✅ or ❌
```

### Test 2: Debug Tool Loads
```
Browser URL: https://universecoworks.com/api/debug.html
Expected: Form with fields and response panel
Status: ✅ or ❌
```

### Test 3: Email Sends
```
1. Fill debug.html form
2. Click "Send Test Email"
3. Check response for: "SUCCESS ✓"
Status: ✅ or ❌
```

### Test 4: Email Arrives
```
1. Check inbox for admin email
2. Check spam folder
3. Check auto-reply to test email
Status: ✅ or ❌
```

---

## File Permission Reference

```
644 = rw-r--r--

Owner (you):
  r (read)    ✅
  w (write)   ✅
  x (execute) ❌

Group:
  r (read)    ✅
  w (write)   ❌
  x (execute) ❌

Others:
  r (read)    ✅
  w (write)   ❌
  x (execute) ❌
```

**In cPanel:** Shows as `644` or `rw-r--r--`

---

## Troubleshooting Decision Tree

```
                    File uploaded?
                         |
                ✅ YES    |    NO ❌
                    |             |
                    ↓             ↓
               Permission    Try FTP method
                 644?         or contact
                  |           Hostinger
            ✅ YES | NO ❌
              |      |
              ↓      ↓
           Test   Set to
           file   644 & try
            |     again
            ↓
      Work? Yes ✅
        |
        No ❌
        |
        ↓
    Use debug.html
    Check response
        |
        ↓
    Read ERROR_DECODER.md
    Find your error
        |
        ↓
    Follow fix
    Test again
```

---

## File Checklist

### Download These (from your computer)
```
📦 C:\path\to\co-works\public\api\

  ✅ contact.php
  ✅ contact-simple.php
  ✅ contact-debug.php
  ✅ debug.html
```

### Upload These (to cPanel)
```
📤 universecoworks.com/public_html/api/

  ✅ contact.php → Set 644
  ✅ contact-simple.php → Set 644
  ✅ contact-debug.php → Set 644
  ✅ debug.html → Set 644
```

---

## Configuration Reference

### Email Settings (in contact.php line 66)
```
Current:
  $to = "info@universecoworks.com";

To change to different email:
  $to = "newemail@domain.com";

Remember: Email must exist on Hostinger!
```

### Auto-Reply (Automatic - no config needed)
```
Sent to: User's email (from form)
From: info@universecoworks.com
Subject: "Thank you for contacting..."
Body: Automatic HTML template
```

---

## Success Criteria

### ✅ All True = SUCCESS!
```
☑ Files in public_html/api/
☑ Permissions are 644
☑ debug.html loads interface
☑ contact.php shows blank page
☑ Debug test shows all ✓
☑ Admin email receives test
☑ User receives auto-reply
☑ No 500 errors in Network tab
```

### ❌ Any False = Debug & Fix
```
Use debug.html to identify issue
Read ERROR_DECODER.md for solution
Check cPanel error logs
Contact Hostinger if needed
```

---

## Quick Reference URLs

| Action | URL |
|--------|-----|
| Login to cPanel | `https://universecoworks.com:2083` |
| View contact handler | `https://universecoworks.com/api/contact.php` |
| Test email | `https://universecoworks.com/api/debug.html` |
| Debug endpoint | `https://universecoworks.com/api/contact-debug.php` |

---

## File Roles

```
contact.php
├── Purpose: Send emails to admin
├── Status: REQUIRED ✅
└── If fails: Use contact-simple.php

contact-simple.php
├── Purpose: Backup email handler
├── Status: OPTIONAL
└── Use if: contact.php doesn't work

contact-debug.php
├── Purpose: Show error details
├── Status: DEBUGGING ONLY
└── Use for: Troubleshooting

debug.html
├── Purpose: Test email from browser
├── Status: TESTING TOOL
└── Use for: Verification & troubleshooting
```

---

## Time Estimate

| Task | Time |
|------|------|
| Login to cPanel | 2 min |
| Create api folder | 1 min |
| Upload 4 files | 5 min |
| Set permissions | 5 min |
| Test with debug.html | 5 min |
| **TOTAL** | **~20 minutes** |

---

## After Deployment

### Keep Nearby (for support)
```
📄 ERROR_DECODER.md
📄 CPANEL_DEPLOYMENT_GUIDE.md
📄 QUICK_DEPLOY.md
🔗 https://universecoworks.com/api/debug.html
```

### Monitor
```
✅ Email arrives for first week
✅ Check spam folder
✅ No 500 errors
✅ Auto-replies working
```

### Maintain
```
Update email if needed: Edit contact.php
Check logs: cPanel → Error Log
Debug issues: Use debug.html
```

---

## Emergency Restart

If something breaks:

```
1. Don't panic! ✨
2. Visit: https://universecoworks.com/api/debug.html
3. Look for error in response
4. Find error in ERROR_DECODER.md
5. Follow fix steps
6. Test again
7. Still broken? Contact Hostinger with error details
```

---

## Deployment Summary

```
🎯 GOAL: Email system working
📍 LOCATION: public_html/api/
📦 FILES: 4 (contact.php, etc)
⚙️ CONFIG: File permissions = 644
✅ TEST: debug.html works
📬 VERIFY: Email arrives
```

---

**YOU'RE READY TO DEPLOY! 🚀**

**Next Step:** Read QUICK_DEPLOY.md for detailed steps!
