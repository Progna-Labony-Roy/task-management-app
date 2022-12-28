// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuZjGnarwGFO-wNwK_K3LcktxLM4yzYbY",
  authDomain: "task-manager-f41dd.firebaseapp.com",
  projectId: "task-manager-f41dd",
  storageBucket: "task-manager-f41dd.appspot.com",
  messagingSenderId: "795915228411",
  appId: "1:795915228411:web:2f6b14ddd48f693ea0cc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;