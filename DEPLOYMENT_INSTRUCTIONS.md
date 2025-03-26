# Greg Leigh CRM - Deployment Instructions

This document provides step-by-step instructions for deploying the Greg Leigh CRM to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Node.js and npm installed on your local machine
- A Firebase project with Firestore enabled

## Deployment Steps

### 1. Extract the ZIP File

Extract the provided ZIP file to a directory on your local machine.

### 2. Set Up Environment Variables

Before deploying, you need to set up the following environment variables:

#### Firebase Configuration

Create a `.env.local` file in the project root with the following variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

Replace the placeholder values with your actual Firebase project credentials.

#### Email Configuration

Create a `.env.email` file in the project root with the following variables:

```
OUTLOOK_EMAIL=greg.leigh@connectionsre.com.au
OUTLOOK_PASSWORD=your_outlook_password
```

Replace `your_outlook_password` with your actual Outlook password.

### 3. Install Vercel CLI

If you haven't already, install the Vercel CLI:

```bash
npm install -g vercel
```

### 4. Login to Vercel

Log in to your Vercel account:

```bash
vercel login
```

Follow the prompts to complete the login process.

### 5. Deploy to Vercel

Navigate to the project directory and run:

```bash
vercel --name gregs-data-dungeon
```

Follow the prompts to complete the deployment. When asked about environment variables, you can either:

- Enter them manually during the deployment process
- Skip and add them later through the Vercel dashboard

### 6. Set Up Custom Domain (Optional)

If you want to use a custom domain instead of the default Vercel subdomain:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your custom domain and follow the instructions to configure DNS settings

### 7. Verify Deployment

Once deployed, verify that all pages are working correctly:

- Login page
- Dashboard
- WhatsApp Templates
- Email Campaigns
- WhatsApp Deep Links

## Firebase Setup

### 1. Firestore Collections

Make sure to set up the following Firestore collections in your Firebase project:

- `whatsappTemplates`: For storing WhatsApp templates
- `emailTemplates`: For storing email templates
- `sentEmails`: For tracking sent emails

### 2. Firebase Authentication

The CRM is configured to use Firebase Authentication with the following credentials:

- Username: gregleigh
- Email: gregleigh@example.com
- Password: Stella4545@@

Make sure this user exists in your Firebase Authentication system.

## Troubleshooting

### Pages Not Showing Properly

If some pages aren't showing properly after deployment:

1. Check that the `vercel.json` file is included in your deployment
2. Verify that all environment variables are set correctly
3. Check the Vercel deployment logs for any errors

### Email Integration Issues

If the email integration isn't working:

1. Verify that the Outlook credentials are correct
2. Check that the nodemailer and dotenv packages are installed
3. Make sure the `.env.email` file is included in your deployment

## Support

If you encounter any issues during deployment, please contact the developer for assistance.
