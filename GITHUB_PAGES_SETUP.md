# GitHub Pages Deployment Guide

## 🚨 Important: GitHub Pages Limitations

GitHub Pages only supports **static websites** (HTML, CSS, JavaScript). Your current Node.js server (`server.js`) will **NOT work** on GitHub Pages.

## 🔧 Solutions for Contact Form on GitHub Pages

### Option 1: Formspree (Recommended - FREE)

1. **Sign up at [Formspree.io](https://formspree.io)**
2. **Create a new form** and get your form ID
3. **Update Contact.js** with your Formspree endpoint:
   ```javascript
   const formspreeEndpoint = "https://formspree.io/f/YOUR_ACTUAL_FORM_ID";
   ```

### Option 2: Netlify Forms (Alternative)

1. **Deploy to Netlify** instead of GitHub Pages
2. **Use Netlify Forms** (built-in form handling)
3. **No server needed** - forms work automatically

### Option 3: EmailJS (Client-side email)

1. **Sign up at [EmailJS.com](https://www.emailjs.com)**
2. **Configure email service** (Gmail, Outlook, etc.)
3. **Update Contact.js** to use EmailJS

## 📋 Current Setup Status

✅ **Contact form updated** for GitHub Pages compatibility
✅ **Formspree integration** ready (just need your form ID)
✅ **Environment variables** secured
✅ **React warnings** fixed

## 🚀 Deployment Steps

1. **Get Formspree form ID**:
   - Go to [Formspree.io](https://formspree.io)
   - Sign up and create a form
   - Copy your form ID

2. **Update Contact.js**:
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID

3. **Deploy to GitHub Pages**:
   ```bash
   npm run build
   npm run deploy
   ```

## 🔄 For Local Development

- **Keep using your Node.js server** for local development
- **Switch to Formspree** only for GitHub Pages deployment
- **Use environment variables** to toggle between local and production

## 📧 Email Setup

Your emails will be sent to the email address you configure in Formspree, not your Gmail account directly.
