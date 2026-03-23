import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqmXevGR1FLLwCWk5i4FDghbyJT5wlINw",
  authDomain: "kamsi-b84ad.firebaseapp.com",
  projectId: "kamsi-b84ad",
  storageBucket: "kamsi-b84ad.firebasestorage.app",
  messagingSenderId: "45793560476",
  appId: "1:45793560476:web:058f4bc8b79e726ea7aa59",
  measurementId: "G-JM0V9K1DX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth




