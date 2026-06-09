# 🚫 Common Security Mistakes to Avoid

## ❌ DON'T DO THIS

### Hardcoded API Keys
```javascript
// ❌ WRONG - NEVER do this!
const API_KEY = "sk_live_your_actual_key_here";
const PASSWORD = "MyDatabasePassword123";

// ✅ CORRECT - Use environment variables
const API_KEY = process.env.STRIPE_SECRET_KEY;
const PASSWORD = process.env.DATABASE_PASSWORD;
```

### Storing Secrets in Config Files
```json
// ❌ WRONG - config.json
{
  "database": "mongodb://user:password@host/db",
  "api_key": "sk_live_123456",
  "jwt_secret": "my-secret-key-that-nobody-can-guess"
}

// ✅ CORRECT - Use .env.local
DATABASE_URL=mongodb://user:password@host/db
STRIPE_SECRET_KEY=sk_live_123456
JWT_SECRET=secure-random-string-generated-elsewhere
```

### Committing Sensitive Data
```bash
# ❌ WRONG - Don't commit these files
git add .env.local
git add config/secrets.js
git add database.backup.sql
git commit -m "Add credentials"

# ✅ CORRECT - These are already in .gitignore
# If you accidentally committed, use:
git rm --cached .env.local  # Remove from tracking
git commit --amend "Remove .env.local"
```

### Logging Sensitive Information
```javascript
// ❌ WRONG - Never log secrets
console.log("Connecting with password:", password);
throw new Error(`Auth failed with token: ${apiKey}`);

// ✅ CORRECT - Log safely
console.log("Database connection attempted");
throw new Error("Authentication failed");
```

### Comments with Credentials
```javascript
// ❌ WRONG - Don't leave credentials in comments
// Using Gmail account: admin@company.com
// Password: MyP@ssw0rd123
const email = "admin@company.com";

// ✅ CORRECT - Reference environment variables
// Using email from SMTP_USERNAME environment variable
const email = process.env.SMTP_USERNAME;
```

---

## ✅ SECURITY BEST PRACTICES

### 1. Use Environment Variables
```bash
# .env.local (never committed)
DATABASE_URL=postgres://user:pass@localhost/db
API_SECRET_KEY=your-secret-here
```

```javascript
// Your code
const dbUrl = process.env.DATABASE_URL;
const secret = process.env.API_SECRET_KEY;
```

### 2. Add to .gitignore
```
.env.local
.env.*.local
.env.production
*.key
*.pem
secrets/
```

### 3. Use `.env.example` for Documentation
```bash
# .env.example (CAN be committed - no actual values!)
DATABASE_URL=postgresql://localhost/mydb
API_SECRET_KEY=your_secret_key_here
STRIPE_PUBLIC_KEY=pk_test_xxx
```

### 4. Validate on Startup
```javascript
const requiredEnvVars = ['DATABASE_URL', 'API_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
```

### 5. Use Secret Management Services
For production:
- **Netlify**: Environment variables in deploy settings
- **Hostinger/cPanel**: Store in environment or `.env` outside web root
- **AWS**: Use Secrets Manager
- **GitHub**: Use repository secrets

### 6. Rotate Credentials Regularly
- Change API keys every 90 days
- Regenerate database passwords periodically
- Rotate OAuth tokens

### 7. Keep Secrets Out of Docker Images
```dockerfile
# ❌ WRONG
FROM node:18
ENV API_KEY="sk_live_123456"

# ✅ CORRECT - Pass at runtime
FROM node:18
# API_KEY will be passed via docker run -e API_KEY=...
```

### 8. Review Git History
```bash
# Check for exposed secrets in history
git log --all -p | grep -i "password\|api_key\|secret"

# See what you're about to commit
git diff --cached
```

---

## 🔄 If You Accidentally Committed a Secret

### 1. **IMMEDIATE**: Change the Credential
- Regenerate API keys
- Reset database password
- Invalidate tokens
- This is the most important step!

### 2. **Remove from Git History**
```bash
# Remove the file from git (but keep locally)
git rm --cached .env.local

# Rewrite history
git filter-branch --tree-filter 'rm -f .env.local' HEAD

# Force push (ONLY if repo is not shared)
git push origin --force-all
```

### 3. **Notify Your Team**
If others have cloned the repo, they may have the old credentials in their local history.

### 4. **Clean Your Local Repository**
```bash
# Remove all git history (nuclear option)
rm -rf .git
git init
git add .
git commit -m "Fresh start"
git remote add origin <your-repo>
git push -u origin main --force
```

---

## 🔐 Secrets Checklist

Before every commit, verify you're NOT committing:

- [ ] API keys (Stripe, SendGrid, etc.)
- [ ] Database passwords
- [ ] OAuth tokens
- [ ] SSH private keys
- [ ] AWS/Azure/GCP credentials
- [ ] Email passwords
- [ ] JWT secrets
- [ ] Session secrets
- [ ] Firebase/Supabase keys
- [ ] Encryption keys

---

## 🚀 Pre-Commit Hook (Optional but Recommended)

Add this to `.git/hooks/pre-commit` to prevent accidental commits:

```bash
#!/bin/bash

# Prevent committing .env files
if git diff --cached --name-only | grep -E '\.env\.|secrets|credentials'; then
    echo "🚫 ERROR: Attempting to commit sensitive files!"
    echo "Files detected:"
    git diff --cached --name-only | grep -E '\.env\.|secrets|credentials'
    exit 1
fi

# Check for common secret patterns
if git diff --cached | grep -E 'password|api_key|secret|token' -i; then
    echo "⚠️ WARNING: Detected potential secrets in diff"
    echo "Review your changes carefully before committing"
fi
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

---

## 📞 Emergency: Repository Compromised

1. **Stop all services immediately**
2. **Regenerate ALL credentials**
3. **Review repository access logs**
4. **Change GitHub password**
5. **Enable 2FA on GitHub if not already enabled**
6. **Contact GitHub support if needed**
7. **Consider making repo private temporarily**
