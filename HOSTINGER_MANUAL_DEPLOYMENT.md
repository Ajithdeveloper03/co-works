# 🚀 How to Deploy Static Website to Hostinger (Manual)

## ✅ Files Ready in `out/` Folder

Your website is now ready as static HTML files in:
```
out/
├── index.html
├── about/index.html
├── contact/index.html
├── insights/blogs/index.html
├── insights/blogs/explore-the-best-coworking-space-trichy-for-innovators/index.html
├── insights/blogs/coworking-space-vs-traditional-office-in-trichy-which-is-better/index.html
├── insights/blogs/top-7-benefits-of-choosing-coworking-space-trichy/index.html
├── insights/blogs/why-startups-in-trichy-prefer-coworking/index.html
├── insights/blogs/explore-co-working-space-in-trichy-benefits-for-startups/index.html
├── insights/blogs/is-coworking-space-good-for-remote-workers-2026/index.html
├── insights/blogs/is-coworking-better-than-working-from-home/index.html
├── images/ (all image files)
├── _next/ (all CSS and JavaScript)
└── other pages...
```

---

## 📁 Step-by-Step: Upload to Hostinger

### **Step 1: Access Hostinger File Manager**

1. Login to Hostinger Control Panel
2. Click **File Manager**
3. Navigate to **public_html** folder

### **Step 2: Backup Current Files**

1. Select all files in `public_html`
2. Right-click → **Download**
3. Save them somewhere safe

### **Step 3: Delete Old Files**

1. Select all files in `public_html`
2. Right-click → **Delete**
3. Wait for deletion to complete

### **Step 4: Upload New Files from `out/` Folder**

**On your computer, open the `out` folder:**
```
C:\Users\inyma\OneDrive\Desktop\Ajith System Backup\inymart projects\co-works\out
```

**Upload everything:**
1. Select **ALL files and folders** inside the `out` folder
   - `_next/`
   - `api/` (if exists)
   - `images/`
   - `insights/`
   - `about/`, `contact/`, etc.
   - `index.html`
   - Any `.html` files
   
2. In Hostinger File Manager:
   - Click **Upload**
   - Drag and drop all files from `out/` folder
   - Or select files manually

3. **Wait for upload to complete** (may take 5-10 minutes)

### **Step 5: Add `.htaccess` File for Routing**

This is IMPORTANT for blog pages to work!

1. In Hostinger File Manager, right-click in `public_html`
2. Click **Create New File**
3. Name: `.htaccess`
4. Right-click it → **Edit**
5. Paste this code:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # If the request is for a valid file or directory, skip rewriting
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # If the URL doesn't end with /, add it
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteCond %{REQUEST_URI} !(.*)\.(html|css|js|jpg|jpeg|png|gif|svg|ico|webp)$
  RewriteRule ^(.*)$ $1/ [L]

  # Rewrite directory requests to index.html
  RewriteCond %{REQUEST_FILENAME}/ -f
  RewriteRule ^(.+)/$ $1/index.html [L]
</IfModule>

# Cache Headers for Performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access 1 week"
  ExpiresByType text/css "access 1 year"
  ExpiresByType text/javascript "access 1 year"
  ExpiresByType application/javascript "access 1 year"
  ExpiresByType image/jpeg "access 1 year"
  ExpiresByType image/gif "access 1 year"
  ExpiresByType image/png "access 1 year"
  ExpiresByType image/webp "access 1 year"
  ExpiresByType image/svg+xml "access 1 year"
</IfModule>
```

6. Click **Save**

### **Step 6: Set Permissions**

1. Right-click `.htaccess` file
2. Click **Change Permissions**
3. Set to **644**
4. Click **Change**

### **Step 7: Verify Upload**

Check that these folders exist in `public_html`:
- ✅ `_next/` folder (with CSS/JS)
- ✅ `images/` folder (with all images)
- ✅ `insights/blogs/` folder (with blog pages)
- ✅ `.htaccess` file

### **Step 8: Clear Browser Cache & Test**

1. Open: `https://universecoworks.com`
2. Press **Ctrl+Shift+Delete** (clear cache)
3. Refresh page
4. Click on **Blog** menu → you should see all 7 blogs
5. Click on a blog title → should display the full blog post

---

## ✅ What Should Display

**Blog Listing Page:**
- Shows 7 blog cards with images
- Blog titles visible
- Read time showing
- Categories showing

**Individual Blog Pages:**
- Blog image displays
- Full text content
- Author name
- FAQ section at bottom
- Share/related posts

---

## 🔗 Blog URLs That Should Work

After upload, these URLs should all work:

```
https://universecoworks.com/insights/blogs/ (listing)
https://universecoworks.com/insights/blogs/explore-the-best-coworking-space-trichy-for-innovators/
https://universecoworks.com/insights/blogs/coworking-space-vs-traditional-office-in-trichy-which-is-better/
https://universecoworks.com/insights/blogs/top-7-benefits-of-choosing-coworking-space-trichy/
https://universecoworks.com/insights/blogs/why-startups-in-trichy-prefer-coworking/
https://universecoworks.com/insights/blogs/explore-co-working-space-in-trichy-benefits-for-startups/
https://universecoworks.com/insights/blogs/is-coworking-space-good-for-remote-workers-2026/
https://universecoworks.com/insights/blogs/is-coworking-better-than-working-from-home/
```

---

## 🚨 Troubleshooting

### **Blogs Not Showing**
- ❌ Make sure `images/` folder is uploaded
- ❌ Check `.htaccess` is set with 644 permissions
- ❌ Wait 5 minutes for DNS cache to clear
- ❌ Hard refresh browser (Ctrl+Shift+Delete)

### **Blog Images Not Loading**
- ❌ Check `images/` folder exists in `public_html`
- ❌ Verify all `.jpg`, `.jpeg`, `.png` files are there
- ❌ Check file permissions (should be readable)

### **404 Error on Blog Pages**
- ❌ `.htaccess` file is missing
- ❌ `.htaccess` permissions aren't 644
- ❌ Apache mod_rewrite not enabled (contact Hostinger support)

### **Still Not Working?**
1. Contact Hostinger Support
2. Ask: "Enable Apache mod_rewrite"
3. Tell them: "I'm hosting a static Next.js website"

---

## 📋 Summary

1. ✅ Build complete (`out` folder ready)
2. ⏳ Delete old files from `public_html`
3. ⏳ Upload everything from `out/` folder
4. ⏳ Add `.htaccess` file
5. ⏳ Set permissions (644)
6. ⏳ Test the website

**Expected time:** 15-30 minutes

---

## 🔄 Future Updates

When you make changes and want to redeploy:

```bash
# On your computer
npm run build

# Then upload the `out` folder again
# (same process as above)
```

That's it! Your website will be live! 🚀
