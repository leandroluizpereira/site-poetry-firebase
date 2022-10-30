// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk_gXkmDQLbGSeemKnNd04sClAcVJT15o",
  authDomain: "poetry-86aac.firebaseapp.com",
  projectId: "poetry-86aac",
  storageBucket: "poetry-86aac.appspot.com",
  messagingSenderId: "771200065824",
  appId: "1:771200065824:web:18d33b5ab8f49ce59bb745",
  measurementId: "G-BZLW2TJV9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);