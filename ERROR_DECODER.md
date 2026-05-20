# Contact Form Email Error Decoder & Troubleshooting Guide

## Quick Diagnostics

### Error 1: HTTP 500 - Mail Function Failed

**Symptom:** Seeing 500 error in Network tab

**Step 1: Use Debug Tool**
```
1. Open: https://universecoworks.com/api/debug.html
2. Click "DEBUG" endpoint
3. Fill form with test data
4. Click "Send Test Email"
5. Look for "step_6_send_email: FAILED ✗"
```

**If "FAILED ✗":** Go to Error 2-5 below

---

### Error 2: mail() Function Not Available

**In Debug Response:**
```json
"step_6_mail_function_exists": "NO - CRITICAL!"
```

**Cause:** PHP `mail()` function is disabled on Hostinger

**Fix:**
```
Option A: Contact Hostinger Support
- Request: Enable PHP mail() function
- Reference: Open /api/contact-debug.php to confirm

Option B: Use SMTP instead (requires more setup)
- See "Using SMTP" section below

Option C: Use third-party service
- SendGrid, Mailgun, AWS SES
```

---

### Error 3: Invalid Email Address

**In Debug Response:**
```
"step_4_validate": "Invalid email format: [email]"
```

**Cause:** Email field has invalid format

**Fix:**
```
Check form input:
- Remove spaces: "test @gmail.com" → "test@gmail.com"
- Verify domain: "test@gmaicom" → "test@gmail.com"
- Include @: "testgmail.com" → "test@gmail.com"
```

---

### Error 4: Missing Required Fields

**In Debug Response:**
```
"step_4_validate": "Missing required fields. Name: ✗, Email: ✓, Phone: ✗"
```

**Cause:** Form fields are empty

**Fix:**
```
Ensure all fields are filled:
- Name: Not empty ✓
- Email: Valid format ✓
- Phone: Not empty ✓
- Interest: Auto-filled ✓
```

---

### Error 5: JSON Parse Error

**In Debug Response:**
```
"step_3_parse_json": "parsing..."
Then: json_last_error_msg: "Syntax error"
```

**Cause:** Frontend sending malformed JSON

**Fix:**
1. Check browser console for JavaScript errors
2. Verify form data structure
3. Check for special characters in messages

---

### Error 6: Sendmail Path Not Configured

**In Debug Response:**
```json
"sendmail_path": ""
```

**Cause:** Hostinger hasn't set up sendmail properly

**Fix:**
```
Contact Hostinger Support:
"Please configure sendmail_path for PHP mail() function"

Alternative: Use these settings:
SMTP: localhost
smtp_port: 25
```

---

## Error Decoder Reference Table

| Status | Message | Meaning | Solution |
|--------|---------|---------|----------|
| 200 | "success": true | ✅ Working! | None, email sent |
| 500 | "mail() function returned false" | Mail failed | Check sendmail_path |
| 500 | "No - CRITICAL!" | mail() disabled | Enable in Hostinger |
| 500 | "Invalid email format" | Bad email | Fix email in form |
| 500 | "Missing required fields" | Empty input | Fill all fields |
| 500 | "JSON Error" | Bad data format | Check JavaScript |
| 500 | "Unable to read input" | Stream error | Contact host support |

---

## Complete Debugging Checklist

### Step 1: Test Debug Endpoint
```bash
# In browser:
1. Go to: https://universecoworks.com/api/debug.html
2. Fill all form fields
3. Click "Send Test Email"
4. Note the response
```

### Step 2: Check Each Step
Look for these in response JSON:

```
✓ step_1_method: "POST"
✓ step_2_read_input: "nnn bytes read"
✓ step_3_parse_json: "success"
✓ step_4_validate: "all fields valid"
✓ step_5_email_prep: "done"
✓ step_6_send_email: "SUCCESS ✓"
✓ step_7_complete: "SUCCESS"
```

If any shows ✗, that's your problem area.

### Step 3: Check System Info
In debug response under `system_info`:

```json
"mail_function": "enabled" ← MUST BE "enabled"
"sendmail_path": "/usr/sbin/sendmail" ← Should NOT be empty
"SMTP": "localhost" ← Typical value
```

### Step 4: Verify Email Account on Hostinger

```
Hostinger Control Panel → Email Manager
✓ Email: info@universecoworks.com EXISTS
✓ Quota: Has space
✓ Status: Active (not suspended)
✓ Password: Correct
```

---

## Common Issues & Fixes

### Issue A: "Email Not Received"

```
Checklist:
1. ✓ Check SPAM folder (most common!)
2. ✓ Check email exists in Hostinger
3. ✓ Debug response shows "SUCCESS ✓"
4. ✓ Wait 5 minutes (email delays happen)
5. ✓ Check Reply-To address matches sender domain
6. ✓ No special characters in email headers
```

### Issue B: "Only Some Emails Arrive"

```
Cause: Mail function fails intermittently
Solution:
1. Check Hostinger server load (too high = mail fails)
2. Add queue system (not in scope here)
3. Test at different times
```

### Issue C: "Auto-Reply Not Sent"

```
OK - this is not critical
The main email must go through first
Check if admin email arrived
If yes, auto-reply is secondary
```

### Issue D: "CORS Error in Browser"

```
Not an email issue - check frontend
CORS headers should be:
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
```

---

## Advanced: Using SMTP Instead of mail()

**If mail() doesn't work, try SMTP:**

Create `/public/api/contact-smtp.php`:

```php
<?php
// SMTP Configuration
$smtp_host = "mail.universecoworks.com";
$smtp_port = 465;
$smtp_user = "info@universecoworks.com";
$smtp_pass = "YOUR_PASSWORD";

// Use PHPMailer or SwiftMailer instead of mail()
// Requires composer install
?>
```

**This requires:**
- PHPMailer or SwiftMailer library
- Composer package manager
- More complex setup

**Recommendation:** Start with mail() first, use SMTP only if mail() fails.

---

## Testing Flow Diagram

```
User fills form
    ↓
Frontend sends JSON
    ↓
contact-debug.php receives
    ↓ (step_1)
Validates method (POST)
    ↓ (step_2)
Reads input stream
    ↓ (step_3)
Parses JSON
    ↓ (step_4)
Validates fields (name, email, phone)
    ↓ (step_5)
Prepares email (headers, body)
    ↓ (step_6)
Calls mail() function
    ↓
SUCCESS or FAILURE ← YOUR ANSWER IS HERE
```

---

## What to Tell Hostinger Support

If you need to contact them:

```
Subject: PHP mail() function configuration issue

Body:
"I'm trying to send emails from a contact form using PHP mail() function.
Currently getting 500 errors. 

Please confirm:
1. Is mail() function enabled?
2. What is the sendmail_path?
3. Is SMTP configured for: localhost:25?
4. Do I need to configure SPF/DKIM records?

Email account: info@universecoworks.com
Domain: universecoworks.com"
```

---

## Debug Files Locations

| File | Purpose | URL |
|------|---------|-----|
| contact-debug.php | Full error diagnostic | /api/contact-debug.php |
| debug.html | Interactive tester | /api/debug.html |
| error_log.txt | Error logs (if created) | /api/error_log.txt |
| contact.php | Production endpoint | /api/contact.php |

---

## Final Troubleshooting Steps

1. **Test with debug tool** → Identifies exact issue
2. **Check Hostinger logs** → Shows what server sees
3. **Verify email account** → Must exist and be active
4. **Contact Hostinger** → If mail() is disabled
5. **Check spam folder** → Emails might be filtered
6. **Monitor for 24 hours** → Delayed delivery happens

---

## Success Checklist

- [ ] Debug tool shows all "✓" steps
- [ ] Step 6 shows "SUCCESS ✓"
- [ ] Email received in inbox (not spam)
- [ ] Auto-reply sent to test email
- [ ] Production endpoint also working
- [ ] No 500 errors in Network tab
- [ ] Error logs show successful sends

**If all checked:** ✅ EMAIL SYSTEM WORKING!
