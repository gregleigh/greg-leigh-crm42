'use server';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Initialize Firebase with environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create the user if it doesn't exist yet (only run once)
export async function createInitialUser() {
  try {
    await createUserWithEmailAndPassword(auth, 'gregleigh@example.com', 'Stella4545@@');
    return { success: true, message: 'User created successfully' };
  } catch (error) {
    console.error('Error creating user:', error);
    // If user already exists, this is fine
    if (error.code === 'auth/email-already-in-use') {
      return { success: true, message: 'User already exists' };
    }
    return { success: false, message: error.message };
  }
}

export async function signIn({ username, password }) {
  try {
    // For simplicity, we're using a fixed email format
    // In a production app, you'd have a proper user database
    const email = username.includes('@') ? username : `${username}@example.com`;
    
    // Hard-coded check for the specific user credentials provided
    if (username === 'gregleigh' && password === 'Stella4545@@') {
      // Use the email format for Firebase authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      return { 
        success: true, 
        user: { 
          uid: user.uid, 
          email: user.email,
          displayName: user.displayName || 'Greg Leigh'
        } 
      };
    } else {
      return { success: false, message: 'Invalid credentials' };
    }
  } catch (error) {
    console.error('Error signing in:', error);
    return { success: false, message: error.message };
  }
}
