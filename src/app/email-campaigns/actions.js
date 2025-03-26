'use server';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import nodemailer from 'nodemailer';

export async function sendOutlookEmail(emailData) {
  try {
    // Validate email data
    if (!emailData.name || !emailData.subject || !emailData.recipient || !emailData.content) {
      throw new Error('Email name, subject, recipient, and content are required');
    }

    // Process template variables (simple implementation)
    let processedContent = emailData.content;
    // In a real implementation, you would replace variables with actual values
    // For now, we'll just keep the template variables as is

    // Configure Outlook transporter using environment variables
    // Load environment variables from .env.email file
    const fs = require('fs');
    const path = require('path');
    const envFile = path.resolve(process.cwd(), '.env.email');
    const envConfig = require('dotenv').parse(fs.readFileSync(envFile));
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: envConfig.OUTLOOK_EMAIL || 'greg.leigh@connectionsre.com.au',
        pass: envConfig.OUTLOOK_PASSWORD,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: '"Greg Leigh" <greg.leigh@connectionsre.com.au>',
      to: emailData.recipient,
      subject: emailData.subject,
      text: processedContent,
      html: processedContent.replace(/\n/g, '<br>'),
    });

    // Save to Firestore
    const emailWithTimestamp = {
      ...emailData,
      sentAt: new Date().toISOString(),
      messageId: info.messageId,
    };

    const docRef = await addDoc(
      collection(db, 'sentEmails'), 
      emailWithTimestamp
    );

    return { success: true, id: docRef.id, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
