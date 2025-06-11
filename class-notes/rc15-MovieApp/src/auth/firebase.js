// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
// TODO: Replace the following with your app's Firebase project configuration
//!.env dosyası hazırladıktan sonra projeyi durdurup tekrar çalıştırmak lazım
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC9N_owQ1xL1lc55puFojpnPwJSrqZ2TrE",
  authDomain: "movieapp-a0d39.firebaseapp.com",
  projectId: "movieapp-a0d39",
  storageBucket: "movieapp-a0d39.firebasestorage.app",
  messagingSenderId: "611500859148",
  appId: "1:611500859148:web:1f13c86b3150c11792f329",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)