import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_GA_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_BASE_AUTH_DOMAIN_KEY,
  projectId: import.meta.env.VITE_FIRE_BASE_PROJECT_ID_KEY,
  storageBucket: import.meta.env.VITE_FIRE_BASE_STORAGE_BUCKET_KEY,
  messagingSenderId: import.meta.env.VITE_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_BASE_APP_ID,
  measurementId: import.meta.env.VITE_FIRE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'en';
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
// auth.settings.appVerificationDisabledForTesting = true;
console.log(auth)
export default app;
