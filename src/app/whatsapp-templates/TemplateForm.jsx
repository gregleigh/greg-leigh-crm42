'use client';

import { useState } from 'react';
import { saveTemplate } from './actions';

export default function TemplateForm() {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
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
    setStatus({ type: 'info', message: 'Saving template...' });

    try {
      await saveTemplate(formData);
      setStatus({ type: 'success', message: 'Template saved successfully!' });
      setFormData({ name: '', content: '' }); // Reset form
    } catch (error) {
      console.error('Error saving template:', error);
      setStatus({ type: 'error', message: 'Failed to save template. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Template Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
          placeholder="e.g., Property Viewing Confirmation"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-1">
          Template Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Hello {{name}}, thank you for your interest in {{property}}. Would you like to schedule a viewing?"
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Template'}
      </button>
    </form>
  );
}
