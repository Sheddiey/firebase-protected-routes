// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3wMoNzy_hGATy0UYo_DWpErU6rXiGi4s",
  authDomain: "fir-protected-routes.firebaseapp.com",
  projectId: "fir-protected-routes",
  storageBucket: "fir-protected-routes.appspot.com",
  messagingSenderId: "315912614790",
  appId: "1:315912614790:web:603a6204ef398a9f5a7207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;