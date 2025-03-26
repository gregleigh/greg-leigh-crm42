'use client';

import { useState } from 'react';
import TemplateForm from './TemplateForm';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default function WhatsAppTemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load templates from Firebase on component mount
  useState(() => {
    async function loadTemplates() {
      try {
        const templatesCollection = collection(db, 'whatsappTemplates');
        const templatesSnapshot = await getDocs(templatesCollection);
        const templatesList = templatesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTemplates(templatesList);
      } catch (error) {
        console.error('Error loading templates:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadTemplates();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">WhatsApp Templates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Create New Template</h2>
          <TemplateForm />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Saved Templates</h2>
          {loading ? (
            <p>Loading templates...</p>
          ) : templates.length > 0 ? (
            <div className="space-y-4">
              {templates.map(template => (
                <div key={template.id} className="border p-4 rounded-lg">
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="mt-2 whitespace-pre-line">{template.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No templates found. Create your first template!</p>
          )}
        </div>
      </div>
    </div>
  );
}
