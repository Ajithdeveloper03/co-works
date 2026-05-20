# Hostinger cPanel - Complete Deployment Guide

## Your Current File Structure

```
universecoworks.com (Your Domain Root)
├── public_html/              ← Web root (what visitors see)
│   ├── app/                  ← Next.js app (compiled)
│   ├── api/                  ← PHP endpoints
│   │   ├── contact.php       ← PRODUCTION email handler
│   │   ├── contact-simple.php← Alternative handler
│   │   ├── contact-debug.php ← DEBUG (remove after fixing)
│   │   └── debug.html        ← Debug tester tool
│   ├── images/
│   ├── index.html
│   └── ...other files
│
└── private_html/             ← NOT visible to web
    └── (your private files)
```

---

## Step-by-Step Deployment

### **Method 1: Using cPanel File Manager (EASIEST)**

#### 1️⃣ Login to cPanel
```
1. Open: https://universecoworks.com:2083
2. Username: Your Hostinger account email
3. Password: Your Hostinger cPanel password
4. Click "Log in"
```

#### 2️⃣ Navigate to public_html/api
```
Left sidebar → File Manager
↓
Click: public_html folder (double-click to enter)
↓
Look for: api folder
↓
If NOT exist, create it:
  - Right-click in empty space
  - Select: "Create New" → "Folder"
  - Name: api
  - Click "Create"
```

#### 3️⃣ Upload PHP Files
```
Inside public_html/api folder:

1. Upload contact.php
   - Click "Upload" button (top)
   - Select: contact.php from your computer
   - Wait for upload ✓

2. Upload contact-simple.php
   - Click "Upload" button
   - Select: contact-simple.php
   - Wait for upload ✓

3. Upload contact-debug.php
   - Click "Upload" button
   - Select: contact-debug.php
   - Wait for upload ✓

4. Upload debug.html
   - Click "Upload" button
   - Select: debug.html
   - Wait for upload ✓
```

#### 4️⃣ Set File Permissions
```
For each PHP file:
1. Right-click the file
2. Select: "Change Permissions"
3. Set to: 644
   (Read/Write for owner, Read for others)
4. Click "Change Permissions"

Correct Permissions:
- PHP files (.php): 644 ✓
- HTML files (.html): 644 ✓
- Folders: 755 ✓
```

#### 5️⃣ Verify Uploads
```
Files should now be at:
✓ https://universecoworks.com/api/contact.php
✓ https://universecoworks.com/api/contact-simple.php
✓ https://universecoworks.com/api/contact-debug.php
✓ https://universecoworks.com/api/debug.html

Test in browser:
- Visit: https://universecoworks.com/api/debug.html
- You should see the debug tool interface
```

---

### **Method 2: Using FTP (MORE RELIABLE)**

#### Install FTP Client
```
Options:
1. FileZilla (Free) - Recommended
   Download: https://filezilla-project.org/
   
2. WinSCP (Windows only)
3. Cyberduck (Mac)
4. Core FTP
```

#### Get FTP Credentials from cPanel
```
In cPanel:
1. Search for: "FTP Accounts"
2. Look for your main FTP account
3. Note:
   - FTP Host: ftp.universecoworks.com
   - Username: Usually cpanel username
   - Password: Your password
   - Port: 21 (or use SFTP on 22 for security)
```

#### Connect via FileZilla
```
1. Open FileZilla
2. File → Site Manager → New Site
3. Fill in:
   - Protocol: SFTP (more secure)
   - Host: ftp.universecoworks.com
   - Port: 22 (for SFTP) or 21 (for FTP)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Logon Type: Normal

4. Click "Connect"
```

#### Upload Files
```
Left panel (Local): Your computer
Right panel (Remote): Hostinger server

Navigation on right panel:
1. Navigate to: public_html/api/

2. Drag & drop files from left to right:
   - contact.php
   - contact-simple.php
   - contact-debug.php
   - debug.html

3. Wait for uploads to complete (green ✓)
```

#### Set Permissions
```
Right-click each file → File Attributes:

PHP Files:
- Owner: Read ✓, Write ✓, Execute ✗
- Group: Read ✓, Write ✗, Execute ✗
- Others: Read ✓, Write ✗, Execute ✗
= 644

Result should show: 644 rw-r--r--
```

---

### **Method 3: Using SSH/Terminal (ADVANCED)**

#### Connect via SSH
```bash
# On Windows: Use PuTTY or PowerShell with SSH

ssh username@universecoworks.com
# Enter password when prompted
```

#### Create API Folder (if needed)
```bash
mkdir -p ~/public_html/api
cd ~/public_html/api
```

#### Upload Files (using scp)
```bash
# From your local computer:

# Windows PowerShell:
scp -P 22 "C:\path\to\contact.php" username@universecoworks.com:~/public_html/api/

# Mac/Linux:
scp -P 22 contact.php username@universecoworks.com:~/public_html/api/
```

#### Set Permissions
```bash
chmod 644 ~/public_html/api/contact.php
chmod 644 ~/public_html/api/contact-simple.php
chmod 644 ~/public_html/api/contact-debug.php
chmod 644 ~/public_html/api/debug.html
```

#### Verify
```bash
ls -la ~/public_html/api/

# Should show:
# -rw-r--r-- contact.php
# -rw-r--r-- contact-simple.php
# -rw-r--r-- contact-debug.php
# -rw-r--r-- debug.html
```

---

## Complete Folder Structure After Deployment

```
Your Hosting Account
├── public_html/                    ← Website root
│   ├── api/                        ← Email API folder
│   │   ├── contact.php            ← MAIN email handler
│   │   ├── contact-simple.php     ← Backup handler
│   │   ├── contact-debug.php      ← Debug tool (remove later)
│   │   ├── debug.html             ← Debug interface
│   │   └── error_log.txt          ← Created by PHP (if errors)
│   │
│   ├── app/                        ← Your Next.js build
│   │   └── (all your pages)
│   │
│   ├── images/                     ← Your images
│   ├── index.html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── ...
│
├── logs/                           ← Server logs
│   ├── error_log                   ← PHP errors go here
│   └── access_log
│
└── (other cPanel folders)
```

---

## File Permissions Reference

| File Type | Permission | Code | Meaning |
|-----------|-----------|------|---------|
| PHP files | rw-r--r-- | 644 | Owner: read+write, Others: read only |
| HTML files | rw-r--r-- | 644 | Owner: read+write, Others: read only |
| Folders | rwxr-xr-x | 755 | Owner: full access, Others: read+execute |
| Sensitive files | rw------- | 600 | Owner only: read+write |

**IMPORTANT:** Don't use 777 (world-writable) - security risk!

---

## Verification Checklist

After uploading, verify each step:

### ✅ Step 1: Files Exist
```
Visit in browser:
✓ https://universecoworks.com/api/contact.php
  → Shows blank page (no errors)
  
✓ https://universecoworks.com/api/debug.html
  → Shows the debug interface
```

### ✅ Step 2: Permissions Correct
```
cPanel File Manager → api folder:
✓ contact.php: 644
✓ contact-simple.php: 644
✓ contact-debug.php: 644
✓ debug.html: 644
```

### ✅ Step 3: Debug Tool Works
```
1. Open: https://universecoworks.com/api/debug.html
2. Fill form with test data
3. Click "Send Test Email"
4. Check response for errors
```

### ✅ Step 4: Production Works
```
1. Submit contact form on website
2. Check inbox for admin email
3. Check spam folder
4. Verify auto-reply sent
```

---

## Configuration File Updates

### Update Frontend Endpoints

Make sure your Next.js components point to correct URLs:

**components/ContactPopup.tsx:**
```javascript
// Update this line:
const response = await fetch('/api/contact.php', {  // ← Already correct!
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});
```

**If you need to change email recipient:**

Edit `/public/api/contact.php` line 66:
```php
$to = "info@universecoworks.com";  // ← Change this to your email
```

Same for `/public/api/contact-simple.php`

---

## Troubleshooting Deployment Issues

### Issue 1: "File Upload Failed"
```
✗ Error: "Permission denied"

Fix:
1. Check cPanel File Manager allows uploads
2. Try FTP method instead
3. Contact Hostinger support if both fail
```

### Issue 2: "404 Error - File Not Found"
```
✗ Visiting /api/contact.php shows 404

Fix:
1. Verify file uploaded to: public_html/api/
2. Check filename spelling exactly
3. Refresh browser cache (Ctrl+Shift+R)
4. Check file permissions
```

### Issue 3: "500 Error - Server Error"
```
✗ Getting 500 error on contact.php

Fix:
1. Check PHP syntax errors
   - Use: /api/contact-debug.php instead
   
2. Check file permissions (should be 644)

3. Check Hostinger error log:
   - cPanel → Error Log
   - Look for recent PHP errors

4. Check if mail() is available:
   - Visit: /api/debug.html
   - Read error response
```

### Issue 4: "Emails Not Arriving"
```
✗ 200 response but no email received

Fix:
1. Check spam/promotions folder
2. Check auto-reply works (proves email sent)
3. Use debug tool to verify all steps pass
4. Check error log in cPanel
5. Ask Hostinger to enable mail() if disabled
```

---

## Final Deployment Checklist

- [ ] cPanel accessed successfully
- [ ] public_html/api folder exists
- [ ] All 4 files uploaded (contact.php, contact-simple.php, contact-debug.php, debug.html)
- [ ] All files have 644 permissions
- [ ] contact.php shows blank page (no 404/500)
- [ ] debug.html shows interface
- [ ] Test form submitted successfully
- [ ] Email received in inbox
- [ ] Auto-reply sent to test email
- [ ] No 500 errors in Network tab
- [ ] Error log shows successful sends

**If all checked:** ✅ DEPLOYMENT COMPLETE!

---

## Production Steps After Testing

### 1. Verify Everything Works
```
✓ Debug tool passes all steps
✓ Admin email receives forms
✓ User auto-reply works
✓ No 500 errors
```

### 2. Update Frontend (if needed)
```
Ensure ContactPopup.tsx uses:
fetch('/api/contact.php', ...)
↓
Not contact-simple.php or contact-debug.php
```

### 3. Remove Debug Files (Optional)
```
Once fully working, you can delete:
- contact-debug.php (not needed)
- debug.html (keep for future debugging)

Or keep them hidden for support troubleshooting
```

### 4. Monitor Email Logs
```
cPanel → Error Log
Check daily for first week:
- Successful sends logged
- No PHP errors
- No mail() failures
```

### 5. Set Up Error Notifications (Optional)
```
cPanel → Track DNS
→ Add monitoring for uptime
→ Get alerts if forms fail
```

---

## Quick Reference - Common Tasks

### Check if mail() is working
```
Visit: https://universecoworks.com/api/contact-debug.php
POST test data
Look for: step_6_send_email: "SUCCESS ✓"
```

### Change admin email
```
Edit: /api/contact.php (line 66)
$to = "newemail@universecoworks.com";

Upload updated file
```

### View email logs
```
cPanel → Error Log
→ Shows recent PHP/mail errors
```

### Check file permissions
```
cPanel File Manager → api folder
→ Right-click file
→ Change Permissions
→ Should be 644
```

### Re-upload a file
```
cPanel File Manager → api folder
→ Delete old file (right-click → Delete)
→ Upload new file
→ Set permissions to 644
```

---

## Support Information to Keep

```
Your Hosting:
- Host: Hostinger
- Control Panel: cPanel
- Domain: universecoworks.com
- FTP: ftp.universecoworks.com

Email Account:
- Admin Email: info@universecoworks.com
- Auto-reply: Enabled (yes/no)

API Endpoints:
- Production: /api/contact.php
- Debug: /api/contact-debug.php
- Tester: /api/debug.html

In case of issues:
1. Check /api/debug.html response
2. Review cPanel Error Log
3. Contact Hostinger support with error details
```

---

## Next Steps

1. **Choose deployment method:**
   - ✅ Method 1: cPanel File Manager (easiest)
   - OR Method 2: FTP (more reliable)
   - OR Method 3: SSH (fastest)

2. **Upload files** to public_html/api/

3. **Set permissions** to 644 for all files

4. **Test** at https://universecoworks.com/api/debug.html

5. **Monitor** cPanel error logs

**That's it! Your email system will be live!**
