// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwKi1WF5QPRBoEg_mPOn_LpheTo7Zcw8",
  authDomain: "netflix-gpt-dd6db.firebaseapp.com",
  projectId: "netflix-gpt-dd6db",
  storageBucket: "netflix-gpt-dd6db.firebasestorage.app",
  messagingSenderId: "823478799352",
  appId: "1:823478799352:web:6ce88a8b50b4640ead240d",
  measurementId: "G-KVYK499PWZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth(app);