# Hostinger Email Setup Guide

## Problem
Email sending is not working on Hostinger live server with the current PHPMailer configuration.

## Solution
I've created multiple fallback solutions that work with Hostinger's hosting environment.

## Files Created

### 1. `contact-simple.php` (Recommended)
- **Location**: `/public/api/contact-simple.php`
- **Purpose**: Simple, Hostinger-compatible email solution
- **Features**:
  - Uses Hostinger's built-in PHP mail() function
  - HTML email templates
  - Auto-reply to users
  - Proper error handling
  - Spam protection

### 2. `contact-hostinger.php` (Advanced)
- **Location**: `/public/api/contact-hostinger.php`
- **Purpose**: Multiple fallback methods including PHPMailer
- **Features**:
  - Tries PHPMailer with Hostinger SMTP first
  - Falls back to standard PHP mail()
  - Hostinger-specific mail configuration
  - Debugging information

## Frontend Updates
Updated both contact forms to use the new endpoint:
- `ContactPopup.tsx`: Uses `/api/contact-simple.php`
- `ContactPageContent.tsx`: Uses `/api/contact-simple.php`

## Setup Instructions

### Option 1: Use Simple PHP Mail (Recommended)
1. Upload the updated files to Hostinger
2. Ensure `contact-simple.php` is in `/public/api/` directory
3. Test the contact form

### Option 2: Configure PHPMailer with Hostinger SMTP
1. Create a Hostinger email account:
   - Go to Hostinger control panel
   - Create email: `info@universecoworks.com`
   - Note the password

2. Update `contact-hostinger.php`:
   ```php
   $mail->Username = 'info@universecoworks.com';
   $mail->Password = 'your-hostinger-email-password';
   ```

3. Install PHPMailer:
   ```bash
   cd public
   composer install
   ```

### Option 3: Use External SMTP (Gmail)
If you prefer using Gmail:
1. Enable 2FA on Gmail account
2. Generate App Password
3. Update credentials in the PHP file

## Testing
1. Deploy to Hostinger
2. Test contact form submission
3. Check both admin email and auto-reply
4. Monitor error logs if issues persist

## Troubleshooting

### If emails still don't work:
1. Check Hostinger email logs
2. Verify email account exists and is active
3. Check if Hostinger blocks external SMTP
4. Try the simple PHP mail version first

### Common Hostinger Issues:
- **SMTP blocked**: Use the simple PHP mail version
- **Email not configured**: Create email in Hostinger control panel
- **Spam filters**: Check spam folder
- **Rate limiting**: Wait between test submissions

## Security Notes
- The forms include spam protection (honeypot field)
- Input validation and sanitization
- CSRF protection through headers
- Rate limiting recommended for production

## Next Steps
1. Deploy the updated files
2. Test with real email submissions
3. Monitor for any issues
4. Set up email forwarding if needed

The simple version should work immediately on Hostinger without additional configuration.
