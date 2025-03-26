'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WhatsAppDeepLinks() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    message: '',
    templateName: '',
  });
  const [generatedLink, setGeneratedLink] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format phone number (remove spaces, dashes, etc.)
    const formattedPhone = formData.phoneNumber.replace(/\D/g, '');
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(formData.message);
    
    // Generate WhatsApp deep link
    const deepLink = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
    
    setGeneratedLink(deepLink);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">WhatsApp Deep Links</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Create WhatsApp Link</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
                placeholder="e.g., 61412345678 (include country code)"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Hello, I'm interested in your property at..."
              />
            </div>
            
            <div>
              <label htmlFor="templateName" className="block text-sm font-medium mb-1">
                Template (Optional)
              </label>
              <select
                id="templateName"
                name="templateName"
                value={formData.templateName}
                onChange={(e) => {
                  handleChange(e);
                  // In a real implementation, this would load the template content
                  if (e.target.value === 'property-inquiry') {
                    setFormData(prev => ({
                      ...prev,
                      message: "Hello, I'm interested in scheduling a viewing for the property at [ADDRESS]. Is it available on [DATE/TIME]?"
                    }));
                  } else if (e.target.value === 'follow-up') {
                    setFormData(prev => ({
                      ...prev,
                      message: "Hello, I'm following up on our conversation about the property at [ADDRESS]. Have you made a decision yet?"
                    }));
                  }
                }}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select a template</option>
                <option value="property-inquiry">Property Inquiry</option>
                <option value="follow-up">Follow-up</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Generate Link
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Generated Link</h2>
          {generatedLink ? (
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 rounded-md break-all">
                <p className="font-mono text-sm">{generatedLink}</p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={generatedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 inline-flex items-center"
                >
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="h-5 w-5 mr-2" />
                  Open in WhatsApp
                </a>
                
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink);
                    alert('Link copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Copy Link
                </button>
              </div>
              
              <div className="mt-6 p-4 border border-yellow-300 bg-yellow-50 rounded-md">
                <h3 className="font-semibold text-yellow-800">WhatsApp Business API</h3>
                <p className="mt-2 text-sm text-yellow-700">
                  We're currently implementing direct deep links while the WhatsApp Business API approval is in progress.
                  The Business API will enable more advanced features like message templates and automated responses.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-gray-100 rounded-md text-center text-gray-500">
              Fill out the form and click "Generate Link" to create a WhatsApp deep link.
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8">
        <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
