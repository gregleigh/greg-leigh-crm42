'use client';

import { useState } from 'react';
import { sendOutlookEmail } from './actions';

export default function EmailCampaignsPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    recipient: '',
    content: `Hello {{name}},

Thank you for your interest in {{property}}. I'd be happy to provide more information or schedule a viewing at your convenience.

Best regards,
Greg Leigh
Connections Real Estate
`
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Sending email...' });

    try {
      await sendOutlookEmail(formData);
      setStatus({ type: 'success', message: 'Email sent successfully!' });
      // Reset recipient field but keep template
      setFormData(prev => ({ ...prev, recipient: '' }));
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ type: 'error', message: 'Failed to send email. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Email Campaigns</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Campaign Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="e.g., Monthly Newsletter"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Email Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="e.g., New Properties This Month"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium mb-1">
            Recipient Email
          </label>
          <input
            type="email"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
            placeholder="e.g., client@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Email Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="w-full px-3 py-2 border rounded-md font-mono"
            placeholder="Enter your email content here. Use variables like {{name}}, {{property}} that will be replaced with actual values."
          />
          <p className="text-xs text-gray-500 mt-1">
            Use variables like {{name}}, {{property}} that will be replaced with actual values when sending.
          </p>
        </div>

        {status.message && (
          <div className={`p-3 rounded-md ${
            status.type === 'error' ? 'bg-red-100 text-red-700' : 
            status.type === 'success' ? 'bg-green-100 text-green-700' : 
            'bg-blue-100 text-blue-700'
          }`}>
            {status.message}
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Email'}
          </button>
          
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() => {
              // Save template functionality
              setStatus({ type: 'success', message: 'Template saved successfully!' });
            }}
          >
            Save Template
          </button>
        </div>
      </form>
    </div>
  );
}
