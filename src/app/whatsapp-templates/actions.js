'use server';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function saveTemplate(templateData) {
  try {
    // Validate template data
    if (!templateData.name || !templateData.content) {
      throw new Error('Template name and content are required');
    }

    // Add timestamp
    const templateWithTimestamp = {
      ...templateData,
      createdAt: new Date().toISOString(),
    };

    // Save to Firestore
    const docRef = await addDoc(
      collection(db, 'whatsappTemplates'), 
      templateWithTimestamp
    );

    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error saving template:', error);
    throw error;
  }
}
