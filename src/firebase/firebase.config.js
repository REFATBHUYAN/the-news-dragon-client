// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE1zkHvqb-h58ukzJBfCD_XHfIDTHfg1Q",
  authDomain: "the-news-dragon-client-eec94.firebaseapp.com",
  projectId: "the-news-dragon-client-eec94",
  storageBucket: "the-news-dragon-client-eec94.appspot.com",
  messagingSenderId: "211342507446",
  appId: "1:211342507446:web:ec3e56b744798d912b1517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;