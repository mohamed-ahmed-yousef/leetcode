// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_apiKey,
  authDomain: process.env.NEXT_PUBLIC_API_authDomain,
  projectId: process.env.NEXT_PUBLIC_API_projectId,
  storageBucket: process.env.NEXT_PUBLIC_API_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_API_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_API_appId,
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const fireStore = getFirestore(app)

export { auth, fireStore, app }
