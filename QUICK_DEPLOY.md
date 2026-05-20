# Quick Deployment Checklist - Print This!

## 📁 Your Folder Structure (After Deployment)

```
universecoworks.com
│
├── 🌐 public_html/                 ← Your website root
│   │                               (What visitors see)
│   ├── 📂 api/                     ← EMAIL API FOLDER
│   │   │
│   │   ├── 📄 contact.php          ✅ PRODUCTION
│   │   ├── 📄 contact-simple.php   ✅ BACKUP
│   │   ├── 📄 contact-debug.php    🔧 DEBUG (optional)
│   │   └── 📄 debug.html           🧪 TEST TOOL
│   │
│   ├── 📂 app/                     ← Your website pages
│   ├── 📂 images/                  ← Your images
│   ├── 📄 index.html
│   └── ...other files
│
└── 📂 logs/
    └── error_log                   ← PHP errors saved here
```

---

## ⚡ Quick Setup (5 Steps)

### 1️⃣ LOGIN TO cPANEL
```
URL: https://universecoworks.com:2083
Username: Your email/username
Password: Your password
```

### 2️⃣ CREATE API FOLDER
```
File Manager → public_html
→ Right-click → Create Folder
→ Name: "api"
→ Create
```

### 3️⃣ UPLOAD 4 FILES
Copy these from your local folder and upload to `public_html/api/`:

| File | Size | Purpose |
|------|------|---------|
| `contact.php` | ~4KB | Main email handler |
| `contact-simple.php` | ~3KB | Backup handler |
| `contact-debug.php` | ~5KB | Error diagnostic |
| `debug.html` | ~8KB | Test tool |

### 4️⃣ SET PERMISSIONS
Right-click each file → Change Permissions → Set to `644`

### 5️⃣ TEST
Visit: `https://universecoworks.com/api/debug.html`

---

## 📋 Pre-Deployment Checklist

- [ ] You have these 4 files downloaded locally:
  - contact.php
  - contact-simple.php
  - contact-debug.php
  - debug.html

- [ ] You have cPanel access (username & password)

- [ ] You know your admin email address (info@universecoworks.com ?)

- [ ] You can access: https://universecoworks.com:2083

---

## 🚀 DEPLOYMENT STEP-BY-STEP

### STEP 1: Open cPanel
```
1. Go to: https://universecoworks.com:2083
2. Username: Your Hostinger email
3. Password: Your Hostinger password
4. Click: Log In
```

### STEP 2: Open File Manager
```
1. Look for "File Manager" in cPanel
2. Click it
3. Make sure you're in: public_html folder
```

### STEP 3: Create API Folder
```
1. Right-click in empty space
2. Select: Create New → Folder
3. Name: api
4. Click: Create
```

### STEP 4: Enter API Folder
```
1. Double-click the "api" folder
2. You're now inside: public_html/api/
3. This folder should be empty
```

### STEP 5: Upload contact.php
```
1. Click: Upload button (top bar)
2. Select: contact.php from your computer
3. Wait for upload to complete (green ✓)
4. Close upload dialog
```

### STEP 6: Upload contact-simple.php
```
1. Click: Upload button
2. Select: contact-simple.php
3. Wait for complete
4. Close dialog
```

### STEP 7: Upload contact-debug.php
```
1. Click: Upload button
2. Select: contact-debug.php
3. Wait for complete
4. Close dialog
```

### STEP 8: Upload debug.html
```
1. Click: Upload button
2. Select: debug.html
3. Wait for complete
4. Close dialog
```

### STEP 9: Set Permissions - contact.php
```
1. Right-click: contact.php
2. Select: Change Permissions
3. Change to: 644
4. Click: Change Permissions
```

### STEP 10: Set Permissions - contact-simple.php
```
1. Right-click: contact-simple.php
2. Select: Change Permissions
3. Change to: 644
4. Click: Change Permissions
```

### STEP 11: Set Permissions - contact-debug.php
```
1. Right-click: contact-debug.php
2. Select: Change Permissions
3. Change to: 644
4. Click: Change Permissions
```

### STEP 12: Set Permissions - debug.html
```
1. Right-click: debug.html
2. Select: Change Permissions
3. Change to: 644
4. Click: Change Permissions
```

---

## ✅ VERIFICATION

### Check 1: Files Exist
```
Open in browser:
→ https://universecoworks.com/api/contact.php
  (Should show blank page, no 404)

→ https://universecoworks.com/api/debug.html
  (Should show debug tool interface)
```

### Check 2: Permissions OK
```
In cPanel File Manager:
→ api folder
→ Each file shows: 644 (or rw-r--r--)
```

### Check 3: Test Email
```
→ Visit: https://universecoworks.com/api/debug.html
→ Fill in test form
→ Click: "Send Test Email"
→ Wait for response
→ Look for: "step_6_send_email: SUCCESS ✓"
```

### Check 4: Email Arrives
```
→ Check inbox for admin email
→ Check spam folder if not found
→ Reply should be sent to your test email
```

---

## 🆘 TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| **404 Error on contact.php** | File not in public_html/api/. Re-upload. |
| **500 Error on contact.php** | Use debug.html to see exact error. |
| **Permission Denied** | Set file to 644 permissions. |
| **Email not arriving** | Check spam folder. Use debug.html to verify "SUCCESS ✓". |
| **Can't access cPanel** | Try: https://universecoworks.com:2083 or contact Hostinger |

---

## 📞 If You Need Help

### Gather This Information:
```
1. Screenshot of error message
2. Response from debug.html
3. Your admin email address
4. cPanel username
5. Domain name
```

### Check These First:
```
✓ Is file uploaded to public_html/api/?
✓ Is permission set to 644?
✓ Does debug.html load and show interface?
✓ What exactly is the error in debug response?
```

### Contact Support With:
```
"My contact form email is not working. I've uploaded
contact.php to /api/ folder. When I use debug.html,
it shows: [error message]. Can you help?"
```

---

## 📍 File Locations Reference

| File | Location | URL | Purpose |
|------|----------|-----|---------|
| contact.php | public_html/api/ | /api/contact.php | Production email |
| contact-simple.php | public_html/api/ | /api/contact-simple.php | Backup email |
| contact-debug.php | public_html/api/ | /api/contact-debug.php | Debug tool |
| debug.html | public_html/api/ | /api/debug.html | Test interface |

---

## 🎯 Success Indicators

✅ **All of these should be true:**
```
1. Files visible in cPanel File Manager
2. Permissions show 644
3. debug.html loads in browser
4. Debug test shows all "✓" steps
5. Admin email receives test messages
6. User receives auto-reply
7. No 500 errors
```

**If YES to all → DEPLOYMENT COMPLETE! 🎉**

---

## 🗑️ After Everything Works

You can optionally delete:
- `contact-debug.php` (only needed for debugging)

Keep:
- `contact.php` (PRODUCTION - needed!)
- `contact-simple.php` (backup, optional)
- `debug.html` (keep for future troubleshooting)

---

## 🔧 Making Changes Later

**To change admin email:**
```
1. cPanel File Manager → public_html/api/
2. Right-click contact.php → Edit
3. Find line: $to = "info@universecoworks.com";
4. Change email to: $to = "youremail@domain.com";
5. Click: Save Changes
6. Test with debug.html
```

**To view email errors:**
```
cPanel → Error Log
(Shows recent PHP errors)
```

---

## 📞 Hostinger Support Info

If you need to contact Hostinger, tell them:

```
Subject: PHP mail() function configuration

Body:
"I'm deploying a contact form with email functionality.
Currently using PHP mail() function. 

Can you confirm:
1. Is mail() enabled?
2. What is sendmail_path?
3. Are SPF/DKIM configured for info@universecoworks.com?

Domain: universecoworks.com"
```

---

**That's it! You now have complete deployment instructions!**

**Questions? Check CPANEL_DEPLOYMENT_GUIDE.md for detailed steps.**
